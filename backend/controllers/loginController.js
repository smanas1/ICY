const User = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send("All fields are required");
    }
    const user = await User.findOne({ email: email });
    if (user == null) {
      return res.status(401).send("User not found");
    } else {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          let token = jwt.sign({ email: email }, process.env.JWI_SECRET);

          return res.send({ name: user.name, email: user.email, token: token });
        } else {
          return res.status(401).send("Password is incorrect");
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = loginController;
