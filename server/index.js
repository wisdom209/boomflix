const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const helmet = require('helmet')
const mongoose = require('mongoose')
const path = require('path')
const router = express.Router()
const indexRoute = require('./src/route/index.route')

const app = express()

dotenv.config()
if (process.env.NODE_ENV === 'production') {
	dotenv.config({ path: path.join(__dirname, '.env.prod') })
} else {
	dotenv.config({ path: path.join(__dirname, '.env.local') })
}

const port = process.env.PORT || 3000

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(indexRoute)


mongoose.connect(process.env.MONGO_URI)
	.then((res) => {
		console.log("Connected to DB")
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}`)
		})
	})
