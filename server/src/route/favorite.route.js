const express = require('express')
const favoriteController = require('../controllers/favorite.controller')
const verifyToken = require('../middleware/verifyToken')

const router = express.Router()

router.post('/favorite/:mediaType/:mediaId', verifyToken, favoriteController.addFavorite)
router

router.delete('/favorite/:mediaType/:mediaId', verifyToken, favoriteController.removeFavorite)

router.get('/favorites', verifyToken, favoriteController.getFavorites)

module.exports = router
