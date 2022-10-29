const mongoose = require("mongoose")

const schema = mongoose.Schema({
    userName: String,
    passWord: String,
    _id: String
})

module.exports = mongoose.model("Users", schema)