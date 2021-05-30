const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtDecode = require("jwt-decode");
const db = require("../db/models/");

const authPerson = async (req, res) => {
  try {
    console.log(req.body);
    return res.status(200).json({ message: "authPerson 200" });
  } catch (error) {
    return res.status(error.msg).json(error);
  }
};

module.exports = {
  authPerson,
};
