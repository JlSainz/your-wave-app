const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String
    },
    lastname: {
      type: String
    },
    email: {
      type: String,
      required: true
      // unique: true
    },
    password: {
      type: String,
      required: true
    },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Spot" }],
    wave_form: String,
    wave_direction: String,
    wave_distance: String,
    country: String,
    weather: String,
    period: Number,
    break_type: String,
    level: String,
    desired_height: Number,
    vibe: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
