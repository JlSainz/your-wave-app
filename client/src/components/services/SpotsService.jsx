import axios from "axios";

class SpotsService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api/spots`,
      withCredentials: true
    });
  }

  allSpots = () => {
    return this.service.get("/").then(response => {
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
      .post("/create", {
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
        console.log(response.data);
        return response.data;
      });
  };

  addPicture = file => {
    const formData = new FormData();
    formData.append("photo", file);

    return this.service
      .post("/create/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(this.errHandler);
  };

  getForecast = () => {
    return this.service.get('/getForecast')
    .then(response => response.data)
  }

  // oneSpot = () => {
  //   return this.service.get("/one").then(response => {
  //     return response.data;
  //   });
  // };
}
export default SpotsService;
