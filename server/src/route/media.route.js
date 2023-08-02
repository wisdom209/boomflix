const express = require('express')
const mediaController = require('../controllers/media.controller')
const router = express.Router({ mergeParams: true })

router.get('/trending/:mediaType', mediaController.getTrending)
router.get('/popular/:mediaType', mediaController.getPopular)
router.get('/top-rated/:mediaType', mediaController.getToprated)
router.get('/genres/:mediaType', mediaController.getGenres)
router.get('/search/:mediaType', mediaController.getSearch)
router.get('/video/:mediaType/:mediaId', mediaController.getVideo)
router.get('/credits/:mediaType/:mediaId', mediaController.getCredits)
router.get('/details/:mediaType/:mediaId', mediaController.getDetails)

module.exports = router
