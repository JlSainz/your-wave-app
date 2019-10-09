const express = require("express");
const router = express.Router();

/* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

const authRouter = require("./auth");
router.use("/api/auth", authRouter);

const spotRouter = require("./spots");
router.use("/api/spots", spotRouter);

module.exports = router;
