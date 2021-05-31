const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtDecode = require("jwt-decode");
const { models } = require("../db/models");

const verifyPassword = (passwordAttempt, hashedPassword) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};

const authPerson = async (req, res) => {
  try {
    const { email, password } = req.body;
    const person = await models.User.find({ email }).exec();

    if (!person) {
      return res.status(403).json({ message: "Wrong email or password." });
    }
    // console.log(person);

    const passwordValid = await verifyPassword(password, person.password);

    if (passwordValid) {
      const { password, name, ...rest } = person;
      const userInfo = Object.assign({}, { ...rest });
      const token = createToken(person);

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      return {
        token,
        expiresAt,
        userInfo,
        message: "Successful authentication!",
      };
    } else {
      return res.status(403).json({
        message: "Wrong email or password.",
      });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  authPerson,
};
