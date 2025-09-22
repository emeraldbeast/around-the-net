const mongoose = require('mongoose')
// mongoose.connect("mongodb://127.0.0.1:27017/cte-database")

const userSchema = mongoose.Schema({
    username: String, 
    email: String ,
    password: String,
    registeredCourses : [String]
})

module.exports = mongoose.model('user',userSchema)