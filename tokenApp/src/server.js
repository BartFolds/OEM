import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import authRoutes from './routes/authRoutes.js'
import shopifyRoutes from './routes/shopifyRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'
import rawBodyMiddleware from './middleware/rawBodyMiddleware.js'


const app = express()
const PORT= process.env.PORT || 5003

//Get the file path from the url of the current module

const __filename = fileURLToPath(import.meta.url)
//Get the directory name from the file path
const __dirname = dirname(__filename)


//Serves the HTML file from the /public directory
//Tells express to serve all files from the public folder as static assets/file. Any requests for the css files will be resolved to the public directory

app.use(express.static(path.join(__dirname, '../public')))


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
S})

// Use express.json for all routes except /webhook
app.use((req, res, next) => {
  if (req.originalUrl.startsWith('/webhook')) {
    return next()
  }
  express.json()(req, res, next)
})


// Routes
app.use('/auth', authRoutes)
app.use('/webhook', rawBodyMiddleware, shopifyRoutes)



app.listen(PORT, ()=>{
    console.log(`Server has started on port: ${PORT}`)
    console.log("Using DATABASE_URL:", process.env.DATABASE_URL);
    
})