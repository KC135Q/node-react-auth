const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtDecode = require("jwt-decode");
const { models } = require("../db/models");

const authPerson = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    // console.log("db", db);
    const person = await models.User.find({ email }).exec();
    console.log(person);

    return res.status(200).json(person);
  } catch (error) {
    console.warn(error);
    return res.json(error);
  }
};

module.exports = {
  authPerson,
};
