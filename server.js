require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const connectDB = () => {
  mongoose.connect(MONGO_URI)
 .then(() => console.log('Database connection successful'))
 .catch(err => console.log('connection error:', err));
}

connectDB();

app.listen(PORT, ()=> {
 console.log(`Server listen on port ${PORT}`);
 console.log(`Server running on  : http:127.0.0.1:5000`);
});


module.exports = connectDB;
