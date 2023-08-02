const express = require('express')
const reviewRouter = require('../route/review.route')
const mediaRouter = require('../route/media.route')
const userRouter = require('../route/user.route')
const favoriteRouter = require('../route/favorite.route')

const router = express.Router()

router.use(reviewRouter)
router.use(mediaRouter)
router.use(userRouter)
router.use(favoriteRouter)

module.exports = router


