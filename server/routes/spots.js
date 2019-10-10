const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Spot = require("../models/Spot");
const passport = require("passport");
// const axios = require("axios");

router.get("/", (req, res, next) => {
  Spot.find({})
    .then(allSpots => res.json({ spots: allSpots }))
    .catch(function() {
      next();
      throw new Error("There's an error!");
    });
});



module.exports = router;
