const express = require('express')
const { createBooking, getOccupiedSeats } = require('../controllers/bookingController.js')
const bookingRouter = express.Router()

bookingRouter.post('/create', createBooking)
bookingRouter.get('/seats/:showId', getOccupiedSeats)

module.exports = bookingRouter;