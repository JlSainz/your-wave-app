const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spotSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      type: { type: String },
      coordinates: Array
    },
    type: {
      type: String
    },
    image: String,
    nearby: String,
    consistence: {
      type: String
    },
    comment: {
      rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
      },
      author: [{ type: Schema.Types.ObjectId, ref: "User" }],
      text: String
    },
    wave_form: {
      type: String,
      enum: ["Fat", "Hollow"]
    },
    wave_direction: {
      type: String,
      enum: ["Left", "A-Frame", "Right"]
    },
    country: {
      type: String
    },
    weather: {
      type: String,
      enum: ["Cold", "Mild", "Hot"]
    },
    period: {
      type: Number,
      enum: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    break_type: {
      type: String,
      enum: ["Beach break", "Point break", "Reef break", "Rivermouth break"]
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"]
    },
    desired_height: {
      type: String,
      enum: [
        0.5,
        0.6,
        0.7,
        0.8,
        0.9,
        1,
        1.1,
        1.2,
        1.3,
        1.4,
        1.5,
        1.6,
        1.7,
        1.8,
        1.9,
        2,
        2.1,
        2.2,
        2.3,
        2.4,
        2.5,
        2.6,
        2.7,
        2.8,
        2.9,
        3,
        3.1,
        3.2,
        3.3,
        3.4,
        3.5,
        3.6,
        3.7,
        3.8,
        3.9,
        4,
        4.1,
        4.2,
        4.3,
        4.4,
        4.5,
        4.6,
        4.7,
        4.8,
        4.9,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    vibe: {
      type: String,
      enum: ["Friendly", "Unfriendly"]
    }
  },
  { timestamps: true }
);

const Spot = mongoose.model("Spot", spotSchema);
module.exports = Spot;
