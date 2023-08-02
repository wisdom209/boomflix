const handleResponse = require('../handler/response.handler')
const reviewModel = require('../model/review.model')


const addReview = async (req, res) => {
	try {
		const mediaId = req.params.mediaId;
		const mediaType = req.params.mediaType;
		const username = req.user

		const { review } = req.body

		if (!mediaId || !mediaType || !username || !review)
			return handleResponse.badRequest(res)

		const newReview = new reviewModel({ mediaId, mediaType, username, review })

		const addedReview = await newReview.save()

		handleResponse.ok(res, addedReview)
	} catch (error) {
		handleResponse.error(res, error)
	}

}

const removeReview = async (req, res) => {
	try {
		const reviewId = req.params.id

		if (!reviewId)
			return handleResponse.badRequest(res)

		const review = await reviewModel.findById(reviewId)

		if (!review) handleResponse.badRequest(res)

		const removedReview = await reviewModel.deleteOne({ _id: reviewId }, { new: true })

		handleResponse.ok(res, removeReview)

	} catch (error) {
		handleResponse.error(res, error)
	}

}

const getReviews = async (req, res) => {
	try {
		const { mediaType, mediaId } = req.params

		const reviews = await reviewModel.find({ mediaType, mediaId })

		handleResponse.ok(res, reviews)

	} catch (error) {
		handleResponse.error(res, error)
	}

}

module.exports = { removeReview, addReview, getReviews }

