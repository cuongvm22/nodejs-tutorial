const express = require('express');
const Users = require('../models/Users')
const router = express.Router();

/* GET users listing. */
router.get('/users/view', async function(req, res, next) {
  const users = await Users.find()
  res.jsonp({users});
});

router.post("/users/create", async (req, res) => {
  const user = new Users({
    userName: "cuongvm",
    _id : "cuongvm",
    passWord: "pass"
  })
  try {
    await user.save();
    res.json(user)
  } catch (error) {
    res.statusCode = 400
    res.jsonp({error: error.keyValue})
  } finally {
  }
})

module.exports = router;
