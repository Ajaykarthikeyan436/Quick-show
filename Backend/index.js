require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require("./config/mongodb.js")
const { serve } = require('inngest/express')
const { inngest, functions } = require('./inngest/inngest.js')
const { clerkMiddleware } = require('@clerk/express')
const showRouter = require('./routes/showRoute.js')
const bookingRouter = require('./routes/bookingRoutes.js')
const adminRouter = require('./routes/adminRoutes.js')
const userRouter = require('./routes/userRoutes.js')

const app = express()

//Middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

//Connnections
connectDB()

//API Routes
app.get('/', (req, res) => res.send("Backend is Running.."))
app.use('/api/inngest', serve({ client: inngest, functions }))
app.use('/api/admin', adminRouter)
app.use('/api/show', showRouter)
app.use('/api/booking', bookingRouter)
app.use('/api/user', userRouter)

app.listen(5000, ( res ) => {
    console.log("Backend is Running....")
})

module.exports = app;