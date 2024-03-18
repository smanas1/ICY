const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name | !email | !password) {
    return res.status(401).send("All fields are required");
  }

  if (password.length < 6) {
    return res.status(401).send("password must be at least 6 characters");
  }

  const existingUser = await User.find({ email: email });

  if (existingUser.length > 0) {
    return res.status(401).send("User already exists");
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        console.log(err);
      }
      const user = new User({ name: name, email: email, password: hash });
      await user.save();
      res.send({
        id: user._id,
        name: name,
        email: email,
      });
    });
  }
};

module.exports = registerController;
