const express = require('express')
const { body } = require('express-validator')
const validate = require('../handler/request.handler')
const userController = require('../controllers/user.controller')
const verifyToken = require('../middleware/verifyToken')

const router = express.Router({ mergeParams: true })

router.post('/register',
	body('username')
		.notEmpty().withMessage("username cannot be blank")
		.isLength({ min: 5 }).withMessage("username must be 6 characters or more"),
	body('password')
		.notEmpty().withMessage("Password must not be blank")
		.isLength({ min: 6 }).withMessage("Password must be 6 characters or more"),
	validate,
	userController.register
)

router.post('/login',
	body('username')
		.notEmpty().withMessage("username cannot be blank")
		.isLength({ min: 5 }).withMessage("username must be 6 characters or more"),
	body('password')
		.notEmpty().withMessage("Password must not be blank")
		.isLength({ min: 6 }).withMessage("Password must be 6 characters or more"),
	validate,
	userController.login
)

router.put('/update-password',
	body('username')
		.notEmpty().withMessage("username cannot be blank")
		.isLength({ min: 5 }).withMessage("username must be 6 characters or more"),
	body('newPassword')
		.notEmpty().withMessage("Password must not be blank")
		.isLength({ min: 6 }).withMessage("Password must be 6 characters or more"),
	validate,
	verifyToken,
	userController.updatePassword
)

module.exports = router
