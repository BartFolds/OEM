# bot to update ford site whenever a customer purchases a token. 
import os
import json
import logging
from logging.handlers import RotatingFileHandler
from flask import Flask, request
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.common import NoSuchElementException, ElementNotInteractableException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from datetime import datetime 
import threading
import time
from dotenv import load_dotenv

load_dotenv(dotenv_path="/pythonBot/.env")

SCREENSHOT_DIR = os.getenv("SCREENSHOT_DIR", "/app/screenshots")
LOG_DIR = os.getenv("LOG_DIR", "/app/logs")

os.makedirs(SCREENSHOT_DIR, exist_ok=True)
os.makedirs(LOG_DIR, exist_ok=True)

#define functions

def timestamp():
    return datetime.now().strftime("%Y%m%d_%H%M%S")
def screenshot(driver, name):
    filename = f"{SCREENSHOT_DIR}/{timestamp()}_{name}.png"
    try:
        driver.save_screenshot(filename)
        logging.info(f"Saved screenshot: {filename}")
    except Exception as e:
        logging.warning(f"Could not save screenshot: {e}")

def save_page_source(driver, name):
    try:
        with open(f"{SCREENSHOT_DIR}/{timestamp()}_{name}.html", "w", encoding="utf-8") as f:
            f.write(driver.page_source)
        logging.info("Saved HTML page source.")
    except Exception as e:
        logging.warning(f"Could not save page source: {e}")

# Setup logging
log_file = os.path.join(LOG_DIR, "bot.log")
formatter = logging.Formatter('%(asctime)s [%(levelname)s] %(message)s')

#file handler with rotation
handler = RotatingFileHandler(
    log_file,
    maxBytes=5 * 1024 * 1024,  # 5MB
    backupCount=5              # Keep last 5 logs: bot.log.1, bot.log.2, etc.
)
handler.setFormatter(formatter)

#console handler
console_handler = logging.StreamHandler()
console_handler.setFormatter(formatter)

#ROOT LOGGER

logger = logging.getLogger()
logger.setLevel(logging.INFO)
logger.addHandler(handler)
logger.addHandler(console_handler)

logger.info("Logging initialized")

app = Flask(__name__)
username = os.environ.get('FORD_LOGIN')
login = os.environ.get('FORD_PASS')

def dismiss_cookie_banner(driver, timeout=10):
    """
    Dismisses the cookie consent banner if it appears.
    
    Args:
        driver (webdriver): The active Selenium WebDriver.
        timeout (int): Seconds to wait for banner to become clickable.
    """
    try:
        WebDriverWait(driver, timeout).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "cc_btn_accept_all"))
        ).click()
        logging.info("Dismissed cookie consent banner.")
    except TimeoutException:
        logging.info("No cookie banner appeared.")


def run_bot(form_data):
    logger.info("run_bot() started")
    print("run_bot() started")
    logger.info(f"Recieved form data: {form_data}")

    # Set up Selenium (headless optional)

    options = Options()
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")

    options.binary_location = "/usr/bin/chromium"
    
    driver = None

    try:
        logger.info("Launching browser...")
        driver = webdriver.Chrome(options=options)
        screenshot(driver, "01_browser_launched")

        logger.info('Opening form page')
        driver.get("https://cabinet.fktscore.com/")
        screenshot(driver, "02_login_page_loaded")

        #dismiss cookie banner
        dismiss_cookie_banner(driver)

        # LOGIN
        logger.info("Filling in login details...")
        wait = WebDriverWait(driver, 10)

        # Wait for and enter username
        username_input = wait.until(EC.element_to_be_clickable((By.ID, "MainContent_LoginBox")))
        username_input.send_keys(username)
        screenshot(driver, "03_username_entered")
        # Wait for and enter password
        password_input = wait.until(EC.element_to_be_clickable((By.ID, "MainContent_PassBox")))
        password_input.send_keys(login)
        screenshot(driver, "04_password_entered")

        # Click login
        login_button = wait.until(EC.element_to_be_clickable((By.ID, "MainContent_btnLogin")))
        login_button.click()

        logger.info("✅ Submitted login form")
        screenshot(driver, "after_login_click")


        # Optional: verify login success
        if "Login" in driver.page_source:
            logger.warning("⚠️ Login might have failed — login form still visible.")
            save_page_source(driver, "login_failed")
        

        # FORM FILLING
        driver.get("https://cabinet.fktscore.com/Account")
        screenshot(driver, "04_account_page_loaded")
        dismiss_cookie_banner(driver)
        time.sleep(3)
        screenshot(driver, "05_dismissedBanner")

        tokenname_input = wait.until(EC.element_to_be_clickable((By.ID,"MainContent_userTokens")))
        tokenname_input.send_keys(form_data.get("field1"))

        tokenpass_input = wait.until(EC.element_to_be_clickable((By.ID,"MainContent_countTokens")))
        tokenpass_input.send_keys(form_data.get("field2"))
        screenshot(driver, "06_filled_form")
       
        element = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "MainContent_btnAddTokens")))
        element.click()

    except Exception as e:
        logger.error(f"Error during bot execution: {e}", exc_info=True)
        if driver:
            screenshot(driver, "error_state")
            save_page_source(driver, "error_page_source")
    finally:
        if driver: 
            driver.quit()


@app.route('/webhook', methods=['POST'])
def webhook():
    try:
        data = request.json
        logger.info(f"Recieved form data: {json.dumps(data)}")
        threading.Thread(target=run_bot, args=(data,)).start()
        #run_bot(data)
        return {"status": "Form submission started"}, 200
    except Exception as e:
        logger.error("Webhook error:", exc_info=True)
        return {"error": "Bot failed"}, 500



if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
