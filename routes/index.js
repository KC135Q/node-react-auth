var express = require("express");
var router = express.Router();
const { authPerson } = require("../controllers/authController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/auth", authPerson);

module.exports = router;
