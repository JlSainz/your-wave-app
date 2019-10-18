const express = require("express");
const router = express.Router();
const uploadCloud = require("../configs/cloudinary.config");
const meteo = require("../api");
const Spot = require("../models/Spot");

router.get("/", (req, res, next) => {
  Spot.find({})
    .sort({ createdAt: -1 })
    .then(allSpots => res.json({ spots: allSpots }))
    .catch(function() {
      next();
      throw new Error("There's an error!");
    });
});

router.post("/create/photo", uploadCloud.single("photo"), (req, res, next) => {
  res.json(req.file.url);
});

router.post("/create", (req, res, next) => {
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
    desired_height,
    vibe,
    consistence,
    imageURL
  } = req.body;

  const newSpot = new Spot({
    name,
    location,
    image,
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
    desired_height,
    vibe,
    imageURL
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
});

router.get("/getForecast", (req, res, next) => {
  res.status(200).json(meteo);
});

module.exports = router;
