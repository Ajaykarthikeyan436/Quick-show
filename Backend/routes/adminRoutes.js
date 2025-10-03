const express = require('express')
const protectAdmin = require('../midddleware/auth')
const { isAdmin, getDashboardData, getAllShows, getAllBookings } = require('../controllers/adminController.js')

const adminRouter = express.Router()

adminRouter.get('/is-admin', protectAdmin, isAdmin)
adminRouter.get('/dashboard', protectAdmin, getDashboardData)
adminRouter.get('/all-shows', protectAdmin, getAllShows)
adminRouter.get('/all-bookings', protectAdmin, getAllBookings)

module.exports = adminRouter;