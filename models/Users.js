const mongoose = require("mongoose")
const validator = require("validator")

const schema = mongoose.Schema({
    userName: {
        type: String,
        require: [true, "please fill your username"],
        index: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail,  "Please provide a valid email"]
    },
    passWord: {
        type: String,
        require: [true, "please fill your passWord"]
    }
})

module.exports = mongoose.model("Users", schema)