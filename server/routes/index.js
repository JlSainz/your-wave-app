const express = require("express");
const router = express.Router();



const authRouter = require("./auth");
router.use("/api/auth", authRouter);

const spotRouter = require("./spots");
router.use("/api/spots", spotRouter);

module.exports = router;
