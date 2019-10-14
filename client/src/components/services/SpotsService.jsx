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
  ) => {
    return this.service
      .post("/api/spots/create", {
        name,
        location,
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
      })
      .then(response => {
        return response.data;
      });
  };

  addPicture = file => {
    const formData = new FormData();
    formData.append("photo", file);

    return this.service
      .post("/api/spots/create/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(this.errHandler);
  };

  // oneSpot = () => {
  //   return this.service.get("/one").then(response => {
  //     return response.data;
  //   });
  // };
}
export default SpotsService;
