const Users = require('../models/Users')
const uuid = require('uuid')

module.exports.createUser = async (req, res) => {
    try {
        const user = new Users({
            userName: req.body.userName,
            passWord: req.body.passWord,
            // _id: uuid.v4()
        })
        await user.save();
        res.json(user)
    } catch (error) {
        res.statusCode = 400
        res.jsonp({error: error})
    } finally {

    }
}

module.exports.getAllUser = async (req, res) => {
    const users = await Users.find()
    res.jsonp({users});
}