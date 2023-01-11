const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000

// routers
const homeRouter = require('./routes/homeRouter.js')
const inventoryRouter = require('./routes/inventoryRouter.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')

// db
const connectDB = require('./db/connect.js')

// initializing express instance
const app = express()

// req.body json parsing middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/v1/home', homeRouter)
app.use('/api/v1/inventory', inventoryRouter)

// 404 response
app.use(errorHandlerMiddleware)
console.log(process.env.MONGO_URL)
// listening for requests
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
