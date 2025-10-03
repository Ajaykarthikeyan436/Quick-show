const Booking = require("../models/Booking.js");
const { clerkClient } = require('@clerk/express');
const Movie = require("../models/Movie.js");

//API Function to get User Bookings
const getUserBookings = async ( req, res ) => {
    try {
        const user = req.auth().userId;

        const bookings = await Booking.find({ user }).populate({
            path: 'show',
            populate: { path: 'movie' }
        }).sort({ createdAt: -1 })

        res.json({ success: true, bookings })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

//API to update Favorite Movie in clerk user Metadata
const updateFavorite = async ( req, res ) => {
    try {
        
        const { movieId } = req.body;
        const userId = req.auth().userId;

        const user = await clerkClient.users.getUser(userId)

        if(!user.privateMetadata.favorites) {
            user.privateMetadata.favorites = []
        }

        if(user.privateMetadata.favorites.includes(movieId)) {
            user.privateMetadata.favorites.push(movieId)
        }else{
            user.privateMetadata.favorites = user.privateMetadata.favorites.filter(item => item !== movieId)
        }

        await clerkClient.users.updateUserMetadata(userId, { privateMetadata: user.privateMetadata })

        res.json({ success: true, message: "Favorite added Successfully." })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

const getFavorites = async ( req, res ) => {
    try {
        const user = await clerkClient.users.getUser(req.auth().userId)
        const getUser = user.privateMetadata.favorites;

        //Getting Movies From Database
        const movies = await Movie.find({_id:{ $in: favorites } })

        res.json({ success: true, movies })
        
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

module.exports = {
    getUserBookings,
    updateFavorite,
    getFavorites,
}