// const axios = require("axios");
// const express = require("express");
// const router = express.Router();
// const upload = require("../configs/cloudinary.config");
// // const User = require("../models/User");
// const Spot = require("../models/Spot");
// // const passport = require("passport");

// class ApiForecast {
//   constructor() {
//     this.BASE_URL =
//       "https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}";
//   }
//   getForecast() {
//     return axios.get(`${this.BASE_URL}`);
//   } 
 
//   // const lat = 58.5;
//   // const lng = 17.8;

//   // fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`, {
//   //   headers: {
//   //     'Authorization': '807b335c-e8f5-11e9-80bf-0242ac130004-807b347e-e8f5-11e9-80bf-0242ac130004'
//   //   }
//   // }).then((response) => response.json()).then((jsonData) => {
//   //   // Do something with response data.
//   // });

// }

// const apiForecast = new ApiForecast()

// module.exports = router;