let jwt = require("jsonwebtoken");
const auth = require(`${__dirname}/../../config/auth.js`);
module.exports.login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  // For the given username fetch user from DB
  let mockedUsername = "admin";
  let mockedPassword = "password";

  if (username && password) {
    if (username === mockedUsername && password === mockedPassword) {
      let token = jwt.sign({ username: username }, auth.jwtSecretKey, {
        expiresIn: "24h" // expires in 24 hours
      });
      // return the JWT token for the future API calls
      res.json({
        success: true,
        message: "Authentication successful!",
        token: token
      });
    } else {
      res.send(403).json({
        success: false,
        message: "Incorrect username or password"
      });
    }
  } else {
    res.send(400).json({
      success: false,
      message: "Authentication failed! Please check the request"
    });
  }
};
