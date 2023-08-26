const express = require('express')
const reviewController = require('../controllers/review.controller')
const verifyToken = require('../middleware/verifyToken')

const router = express.Router()

router.post('/review/:mediaType/:mediaId', verifyToken, reviewController.addReview)

router.delete('/review/:id', verifyToken, reviewController.removeReview)

router.get('/review/:mediaType/:mediaId', reviewController.getReviews)

router.get('/reviews/all', reviewController.getAllReviews);

module.exports = router
