const express = require("express");
const router = express.Router();
const upload = require("../configs/cloudinary.config");
// const User = require("../models/User");
const Spot = require("../models/Spot");
// const passport = require("passport");
// const axios = require("axios");

router.get("/", (req, res, next) => {
  Spot.find({})
    .then(allSpots => res.json({ spots: allSpots }))
    .catch(function() {
      next();
      throw new Error("There's an error!");
    });
});

router.post(
  "http://localhost:3010/api/spots/add",
  upload.single("photo"),
  (req, res, next) => {
    const name = req.body;
    const { location: lat, lng, type } = req.body;
    const nearby = req.body;
    const consistence = req.body;
    const { comment: text, author, rating } = req.body;
    const wave_form = req.body;
    const wave_direction = req.body;
    const country = req.body;
    const weather = req.body;
    const period = req.body;
    const break_type = req.body;
    const level = req.body;
    const desired_height = req.body;
    const vibe = req.body;
    const { url } = req.file;

    const newSpot = new Spot({
      name,
      location: {
        coordinates: [lng, lat],
        type: "Point"
      },
      nearby,
      consistence,
      comment: {
        text,
        author,
        rating
      },
      wave_form,
      wave_direction,
      country,
      weather,
      period,
      break_type,
      level,
      desired_height,
      vibe,
      creator: req.user._id,
      image: url
    });

    newSpot
      .save()
      .then(() => res.redirect("/"))
      .catch(error => next(error));
  }
);

module.exports = router;
