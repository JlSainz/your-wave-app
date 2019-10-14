const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spotSchema = new Schema(
  {
    name: {
      type: String
      // required: true
    },
    location: {
      type: { type: String },
      coordinates: Array
    },
    type: {
      type: String
    },
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
      enum: [0.5, 1, 1.5, 2, 3, 4, 5]
    },
    vibe: {
      type: String,
      enum: ["Friendly", "Unfriendly"]
    },
    imageURL: String
  },
  { timestamps: true }
);

const Spot = mongoose.model("Spot", spotSchema);
module.exports = Spot;
