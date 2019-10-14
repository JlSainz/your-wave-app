const mongoose = require("mongoose");
const Spot = require("../models/Spot");

mongoose
  .connect("mongodb://localhost:27017/server", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const spots = [
  {
    name: "Dessert point",
    latlng: {
      lat: -8.739984,
      lng: 115.838236
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Makan",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Best of bests"
    },
    wave_form: "Hollow",
    wave_direction: "Left",
    country: "Indonesia",
    weather: "Hot",
    period: 18,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  },
  {
    name: "Yoyo's",
    latlng: {
      lat: -8.970379,
      lng: 116.729529
    },
    imageURL
    :
      "https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/09/28152001/092817-desert-point-promo.jpg",
    nearby: "Warung Brapa",
    consistence: "Much",
    comment: {
      rating: 5,
      author: "psainz2593@gmail.com",
      text: "Awesome"
    },
    wave_form: "Hollow",
    wave_direction: "Right",
    country: "Indonesia",
    weather: "Hot",
    period: 16,
    break_type: "Reef break",
    level: "Advanced",
    vibe: "Friendly"
  }
];

const spotsToSave = spots.map(spot => ({
  name: spot.name,
  imageURL
  : spot.imageURL,
  location: {
    type: "Point",
    coordinates: [spot.latlng.lng, spot.latlng.lat]
  },
  nearby: spot.nearby,
  consistence: spot.consistence,
  comment: [spot.comment, spot.author, spot.rating],
  wave_form: spot.wave_form,
  wave_direction: spot.wave_direction,
  country: spot.country,
  weather: spot.weather,
  period: spot.period,
  break_type: spot.break_type,
  level: spot.level,
  vibe: spot.vibe
}));

Spot.create(spotsToSave).then(() => mongoose.disconnect());

