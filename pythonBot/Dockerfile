FROM python:3.10-slim

# Install system dependencies and Chromium
RUN apt-get update && apt-get install -y \
    curl unzip wget gnupg ca-certificates \
    chromium chromium-driver \
    fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 \
    libcups2 libdbus-1-3 libgdk-pixbuf2.0-0 libnspr4 libnss3 libx11-xcb1 \
    libxcomposite1 libxdamage1 libxrandr2 xdg-utils libgbm1 libgtk-3-0 \
    && rm -rf /var/lib/apt/lists/*

# Set Chromium path explicitly (may vary depending on OS)
ENV CHROME_BIN=/usr/bin/chromium

WORKDIR /bot
COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5015
CMD ["python", "fordBot.py"]
