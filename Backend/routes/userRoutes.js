const express = require('express')
const { getUserBookings, updateFavorite, getFavorites } = require('../controllers/userController.js')

const userRouter = express.Router()

userRouter.get('/booking', getUserBookings)
userRouter.post('/update-favorite', updateFavorite)
userRouter.post('/favorites', getFavorites)

module.exports = userRouter;