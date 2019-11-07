const loginController = require("../controllers").login;

var router = require("express").Router();

//  /login
router.post("/login", loginController.login);
module.exports = router;
