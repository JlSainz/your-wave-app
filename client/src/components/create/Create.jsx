import React, { Component } from "react";
// import { Switch, Route, Redirect, Link } from "react-router-dom";
import "./Create.css";
import SpotsService from "./../services/SpotsService";
import GmapsLocate from "./../gmaps/GmapsLocate";

export default class Create extends Component {
  constructor() {
    super();

    this.state = {
      coordinates: "",
      name: "x",
      location: "",
      image: "",
      nearby: "x",
      rating: "3",
      text: "r",
      wave_form: "Fat",
      wave_direction: "A-Frame",
      country: "France",
      weather: "Hot",
      period: "13",
      break_type: "Beach break",
      level: "Advanced",
      vibe: "Friendly",
      consistence: "Yes",
      imageURL: ""
    };

    this.service = new SpotsService();
  }

  getLocation = lnglat => {
    const loct = { coordinates: [lnglat.lng, lnglat.lat], type: "Point" };
    this.setState({
      ...this.state,
      location: loct
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const name = this.state.name;
    const location = this.state.location;
    const nearby = this.state.nearby;
    const rating = this.state.rating;
    const text = this.state.text;
    const wave_form = this.state.wave_form;
    const wave_direction = this.state.wave_direction;
    const country = this.state.country;
    const weather = this.state.weather;
    const period = this.state.period;
    const break_type = this.state.break_type;
    const level = this.state.level;
    const desired_height = this.desired_height;
    const vibe = this.state.vibe;
    const consistence = this.state.consistence;
    const imageURL = this.state.imageURL;

    this.props.createSpots(
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
    );

    this.setState({
      name: "",
      location: "",
      image: "",
      nearby: "",
      rating: "",
      text: "",
      wave_form: "",
      wave_direction: "",
      country: "",
      weather: "",
      period: "",
      break_type: "",
      level: "",
      desired_height: "",
      vibe: "",
      consistence: "",
      imageURL: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onPhotoChange(image) {
    const filename = image.target.value;

    this.setState({
      ...this.state,
      image: image.target.files[0]
    });
  }

  upload() {
    this.service.addPicture(this.state.image).then(imageURL => {
      this.setState({
        ...this.state,
        imageURL: imageURL
      });
    });
  }

  render() {
    console.log(this.state.image + "esta puta mierda es");
    return (
      <div className="container">
        <form onSubmit={event => this.handleFormSubmit(event, "image")}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name..."
              required
              onChange={event => this.handleChange(event)}
            />
          </fieldset>
          <fieldset>
            <label>Text</label>
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={event => this.handleChange(event)}
              placeholder="Comment"
              required
            />
          </fieldset>
          <fieldset>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={event => this.handleChange(event)}
              placeholder="Country..."
              required
            />
          </fieldset>
          <fieldset>
            <label>Nearby</label>
            <input
              type="text"
              name="nearby"
              value={this.state.nearby}
              onChange={event => this.handleChange(event)}
              placeholder="Nearby..."
              required
            />
          </fieldset>
          <label>
            Consistence
            <select
              name="consistence"
              onChange={event => this.handleChange(event)}
            >
              <option value="" selected={this.state.consistence === ""}>
                Select consistence
              </option>
              <option value="Yes" selected={this.state.consistence === "Yes"}>
                Yes
              </option>
              <option value="No" selected={this.state.consistence === "No"}>
                No
              </option>
            </select>
          </label>
          <label>
            Wave Form
            <select
              onChange={event => this.handleChange(event)}
              name="wave_form"
            >
              <option value="" selected={this.state.wave_form === ""}>
                Select wave form
              </option>
              <option value="Fat" selected={this.state.wave_form === "Fat"}>
                Fat
              </option>
              <option
                value="Hollow"
                selected={this.state.wave_form === "Hollow"}
              >
                Hollow
              </option>
            </select>
          </label>
          <label>
            Wave Direction
            <select
              onChange={event => this.handleChange(event)}
              name="wave_direction"
            >
              {" "}
              <option value="" selected={this.state.wave_direction === ""}>
                Select wave direction
              </option>
              <option
                value="Left"
                selected={this.state.wave_direction === "Left"}
              >
                Left
              </option>
              <option
                value="A-Frame"
                selected={this.state.wave_direction === "A-Frame"}
              >
                A-Frame
              </option>
              <option
                value="Right"
                selected={this.state.wave_direction === "Right"}
              >
                Right
              </option>
            </select>
          </label>
          <label>
            Weather
            <select onChange={event => this.handleChange(event)} name="weather">
              <option value="" selected={this.state.weather === ""}>
                Select weather
              </option>
              <option value="Cold" selected={this.state.weather === "Cold"}>
                Cold
              </option>
              <option value="Mild" selected={this.state.weather === "Mild"}>
                Mild
              </option>
              <option value="Hot" selected={this.state.weather === "Hot"}>
                Hot
              </option>
            </select>
          </label>
          <label>
            Period
            <select onChange={event => this.handleChange(event)} name="period">
              <option value="" selected={this.state.period === ""}>
                Select period
              </option>
              <option value="10" selected={this.state.period === "10"}>
                10
              </option>
              <option value="11" selected={this.state.period === "11"}>
                11
              </option>
              <option value="12" selected={this.state.period === "12"}>
                12
              </option>
              <option value="13" selected={this.state.period === "13"}>
                13
              </option>
              <option value="14" selected={this.state.period === "14"}>
                14
              </option>
              <option value="15" selected={this.state.period === "15"}>
                15
              </option>
              <option value="16" selected={this.state.period === "16"}>
                16
              </option>
              <option value="17" selected={this.state.period === "17"}>
                17
              </option>
              <option value="18" selected={this.state.period === "18"}>
                18
              </option>
              <option value="19" selected={this.state.period === "19"}>
                19
              </option>
              <option value="20" selected={this.state.period === "20"}>
                20
              </option>
              <option value="21" selected={this.state.period === "21"}>
                21
              </option>
            </select>
          </label>
          <label>
            Break type
            <select
              onChange={event => this.handleChange(event)}
              name="break_type"
            >
              <option value="" selected={this.state.break_type === ""}>
                Select Break type
              </option>
              <option
                value="Beach break"
                selected={this.state.break_type === "Beach break"}
              >
                Beach break
              </option>
              <option
                value="Point break"
                selected={this.state.break_type === "Point break"}
              >
                Point break
              </option>
              <option
                value="Reef break"
                selected={this.state.break_type === "Reef break"}
              >
                Reef break
              </option>
              <option
                value="Rivermouth break"
                selected={this.state.break_type === "Rivermouth break"}
              >
                Rivermouth break
              </option>
            </select>
          </label>
          <label>
            Level
            <select onChange={event => this.handleChange(event)} name="level">
              <option value="" selected={this.state.level === ""}>
                Select level
              </option>
              <option
                value="Beginner"
                selected={this.state.level === "Beginner"}
              >
                Beginner
              </option>
              <option
                value="Intermediate"
                selected={this.state.level === "Intermediate"}
              >
                Intermediate
              </option>
              <option
                value="Advanced"
                selected={this.state.level === "Advanced"}
              >
                Advanced
              </option>
            </select>
          </label>
          <label>
            Vibe
            <select onChange={event => this.handleChange(event)} name="vibe">
              <option value="" selected={this.state.vibe === ""}>
                Select vibe
              </option>
              <option
                value="Friendly"
                selected={this.state.vibe === "Friendly"}
              >
                Friendly
              </option>
              <option
                value="Unfriendly"
                selected={this.state.vibe === "Unfriendly"}
              >
                Unfriendly
              </option>
            </select>
          </label>
          <label>
            Rating
            <select onChange={event => this.handleChange(event)} name="rating">
              <option value="" selected={this.state.rating === ""}>
                Rate!
              </option>
              <option value="1" selected={this.state.rating === "1"}>
                1
              </option>
              <option value="2" selected={this.state.rating === "2"}>
                2
              </option>
              <option value="3" selected={this.state.rating === "3"}>
                3
              </option>
              <option value="4" selected={this.state.rating === "4"}>
                4
              </option>
              <option value="5" selected={this.state.rating === "5"}>
                5
              </option>
            </select>
          </label>
          <input
            type="button"
            value="Create spot!"
            onClick={e => this.handleFormSubmit(e)}
          />

          <label>Upload photo</label>
          {this.state.imageURL && <img src={this.state.imageURL} />}
          <input
            type="file"
            name="photo"
            onChange={e => this.onPhotoChange(e)}
          />
          <input
            type="button"
            value="Upload photo"
            onClick={() => this.upload()}
          />
          <GmapsLocate
            coordinates={this.state.coordinates}
            getLocation={this.getLocation}
          />
        </form>
      </div>
    );
  }
}
