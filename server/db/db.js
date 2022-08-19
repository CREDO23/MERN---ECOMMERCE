/** @format */
const mongoose = require('mongoose');

const connectDB = () => {
	try {
		mongoose.connect(process.env.DATA_BASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to Database');
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;
