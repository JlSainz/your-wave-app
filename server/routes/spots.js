const express = require("express");
const router = express.Router();
// const upload = require("../configs/cloudinary.config");
// const User = require("../models/User");
const Spot = require("../models/Spot");
// const passport = require("passport");
// const axios = require("axios");

router.get("/", (req, res, next) => {
  Spot.find({})
    .sort({ createdAt: -1 })
    .then(allSpots => res.json({ spots: allSpots }))
    .catch(function() {
      next();
      throw new Error("There's an error!");
    });
});

router.post(
  "/create",
  // upload.single("photo"),
  (req, res, next) => {
    const {
      name,
      location,
      image,
      nearby,
      rating,
      text,
      wave_form,
      wave_direction,
      country,
      weather,
      period,
      break_type,
      level,
      vibe,
      consistence
    } = req.body;

    const newSpot = new Spot({
      name,
      location,
      nearby,
      consistence,
      comment: {
        text,
        author: req.user._id,
        rating
      },
      wave_form,
      wave_direction,
      country,
      weather,
      period,
      break_type,
      level,
      // desired_height,
      vibe,
      creator: req.user._id
      // image: url
    });
    newSpot
      .save()
      .then(createdSpot => {
        Spot.find()
          .sort({ createdAt: -1 })
          .then(allSpots => {
            res.json({
              created: true,
              timestamp: new Date(),
              allSpots: allSpots
            });
          });
      })
      .catch(error => next(error));
  }
);

module.exports = router;
