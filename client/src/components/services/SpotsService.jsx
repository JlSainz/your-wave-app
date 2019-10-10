import axios from "axios";

class SpotsService {
  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:3010`,
      withCredentials: true
    });
  }

  allSpots = () => {
    return this.service.get("/api/spots").then(response => {
      return response.data;
    });
  };

  createSpots = (
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
  ) => {
    return this.service
      .post("/api/spots/create", {
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
      })
      .then(response => {
        return response.data;
      });
  };

  // oneSpot = () => {
  //   return this.service.get("/one").then(response => {
  //     return response.data;
  //   });
  // };
}
export default SpotsService;
