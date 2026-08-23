const mongoose = require('mongoose')

const connectdb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://yt:DId8HOnKXEz8mxvs@complete-backend.nfoesp5.mongodb.net/?appName=complete-backend")
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectdb