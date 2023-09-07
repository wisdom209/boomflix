const modelOptions = {
	virtuals: true,
	toObject: (_, obj) => {
		delete obj._id;
		return obj
	},
	toJSON: (_, obj) => {
		delete obj._id;
		return obj
	},
	versionKey: false,
	timestamps: true,
}
module.exports = modelOptions
