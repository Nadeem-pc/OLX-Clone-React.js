const mongoose = require('mongoose')
const env = require('dotenv').config()

const connnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log("Database Connection Error",error.message);
        process.exit(1)
    }
}

module.exports = connnectDb