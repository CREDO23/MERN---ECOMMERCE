/** @format */
const express = require('express');
const connectDB = require('./db/db.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

connectDB();

app.listen(process.env.PORT, () =>
	console.log(`Listening on PORT ${process.env.PORT}`),
);
