import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Create.css";
import SpotsService from "./../services/SpotsService";
import GmapsLocate from "./../gmaps/GmapsLocate";

class Create extends Component {
                 constructor() {
                   super();

                   this.state = {
                     coordinates: [115.838236, -8.739984],
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
                     imageURL: "",
                     oculto: true
                   };

                   this.service = new SpotsService();
                 }

                 getLocation = lnglat => {
                   const loct = {
                     coordinates: [lnglat.lng, lnglat.lat],
                     type: "Point"
                   };
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
                     imageURL,
                     () => {
                     this.props.getAllSpotsFn(() => {
                       this.props.history.push("/");
                     })}
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
                     imageURL: "",
                   });
                 };

                 handleChange = event => {
                   const { name, value } = event.target;
                   this.setState({ [name]: value });
                 };
                  componentDidMount() {
                    let _this = this;
                    setTimeout(function() {
                      _this.setState({
                        ...this.state,
                        oculto: false
                      });
                    },10);
                  }
                
                  out(){
                    this.setState({
                      ...this.state,
                      oculto: false
                    });
                  }

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
                   if (this.state.oculto === true) {
                     return (
                       <div className="container oculto-create">
                         <form
                           onSubmit={event =>
                             this.handleFormSubmit(event, "image")
                           }
                         >
                           <div className="backImg" >
                             {this.state.imageURL && (
                               <img src={this.state.imageURL} />
                             )}
                           </div>
                           <div className="icons">
                             <fieldset>
                               <label>
                                 Name
                                 <i class="medium material-icons">thumb_up</i>
                               </label>
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
                               <label>T</label>
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
                               <label> Country 🏳️</label>
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
                               <label> Near? 🍺</label>
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
                               <label> +/- </label>
                               <select
                                 name="consistence"
                                 onChange={event => this.handleChange(event)}
                               >
                                 <option
                                   value=""
                                   selected={this.state.consistence === ""}
                                 >
                                   Select consistence
                                 </option>
                                 <option
                                   value="Yes"
                                   selected={this.state.consistence === "Yes"}
                                 >
                                   Yes
                                 </option>
                                 <option
                                   value="No"
                                   selected={this.state.consistence === "No"}
                                 >
                                   No
                                 </option>
                               </select>
                             </label>
                             <label>
                               <label>
                                 <svg
                                   id="Capa_1"
                                   enable-background="new 0 0 512.001 512.001"
                                   height="40"
                                   viewBox="0 0 512.001 512.001"
                                   width="40"
                                   xmlns="http://www.w3.org/2000/svg"
                                 >
                                   <path d="m483.489 385.311c-32.178 0-48.303 11.653-63.896 22.923-14.288 10.326-27.784 20.08-55.108 20.08s-40.82-9.753-55.108-20.08c-15.594-11.269-31.718-22.922-63.896-22.922-32.174 0-48.296 11.653-63.888 22.923-14.286 10.326-27.78 20.08-55.101 20.08s-40.815-9.753-55.102-20.08c-15.592-11.27-31.715-22.923-63.89-22.923-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5c27.321 0 40.815 9.753 55.103 20.08 15.592 11.269 31.715 22.922 63.889 22.922s48.296-11.653 63.888-22.923c14.286-10.326 27.78-20.08 55.101-20.08 27.324 0 40.82 9.753 55.108 20.08 15.594 11.269 31.718 22.922 63.896 22.922s48.302-11.653 63.895-22.922c14.289-10.326 27.785-20.08 55.11-20.08 4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.501-7.5z" />
                                   <path d="m483.489 428.314c-32.178 0-48.303 11.653-63.896 22.922-14.288 10.326-27.784 20.08-55.108 20.08s-40.82-9.753-55.108-20.08c-15.594-11.27-31.718-22.922-63.896-22.922-32.174 0-48.296 11.653-63.888 22.922-14.286 10.326-27.78 20.08-55.101 20.08s-40.815-9.753-55.102-20.08c-15.592-11.269-31.715-22.922-63.89-22.922-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5c27.321 0 40.816 9.753 55.103 20.08 15.592 11.27 31.715 22.922 63.889 22.922s48.296-11.653 63.888-22.922c14.286-10.326 27.78-20.08 55.101-20.08 27.324 0 40.82 9.753 55.108 20.08 15.594 11.27 31.718 22.922 63.896 22.922s48.302-11.653 63.895-22.922c14.289-10.326 27.785-20.08 55.11-20.08 4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.501-7.5z" />
                                   <path d="m511.987 233.665-.004-.12c0-.002 0-.004 0-.006-.384-56.941-23.221-110.037-64.305-149.509-41.063-39.451-95.099-60.131-152.126-58.224-42.003 1.402-82.112 15.398-115.994 40.474-32.968 24.399-58.049 57.668-72.531 96.211-1.457 3.877.505 8.202 4.383 9.659 3.872 1.458 8.202-.505 9.658-4.382 13.464-35.831 36.775-66.755 67.413-89.431 31.426-23.258 68.623-36.239 107.571-37.54 52.959-1.763 103.114 17.427 141.233 54.049 4.666 4.483 9.065 9.165 13.217 14.01-32.996-28.059-74.615-42.611-118.419-41.147-45.386 1.515-87.766 20.662-119.333 53.911-31.395 33.067-48.685 76.411-48.685 122.047 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-41.775 15.826-81.452 44.563-111.719 28.839-30.375 67.533-47.865 108.955-49.248 43.544-1.438 84.715 14.384 115.953 44.597 11.283 10.913 20.726 23.182 28.199 36.443-15.203-11.465-33.621-17.685-52.984-17.685-23.273 0-45.233 8.98-61.835 25.285-16.579 16.284-25.954 38.035-26.398 61.247-.074 3.908.124 7.876.588 11.795.452 3.813 3.691 6.618 7.438 6.618.295 0 .593-.017.893-.053 4.113-.487 7.053-4.217 6.565-8.331-.385-3.24-.548-6.519-.486-9.743.368-19.263 8.149-37.315 21.911-50.831 13.779-13.534 32.007-20.987 51.324-20.987 35.333 0 65.054 25.374 71.79 58.855.96 7.117 1.459 14.349 1.459 21.666 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c.001-.1-.009-7.81-.013-7.911z" />
                                   <path d="m7.501 351.526c27.321 0 40.815 9.753 55.103 20.08 15.592 11.27 31.715 22.922 63.89 22.922 32.173 0 48.295-11.653 63.887-22.922 14.286-10.326 27.78-20.08 55.101-20.08 27.324 0 40.82 9.753 55.108 20.08 15.594 11.27 31.718 22.922 63.896 22.922s48.303-11.653 63.896-22.922c14.288-10.326 27.784-20.08 55.108-20.08 3.48 0 6.503-2.394 7.301-5.782.797-3.388-.841-6.879-3.956-8.431l-13.136-6.545c-19.964-9.947-42.563-18.497-69.088-26.136-10.175-2.931-19.852-8.115-27.983-14.992-7.956-6.729-14.525-15.169-18.999-24.407-1.804-3.728-6.287-5.288-10.019-3.482-3.728 1.805-5.287 6.291-3.481 10.019 5.38 11.111 13.269 21.25 22.813 29.323 9.735 8.233 21.325 14.441 33.519 17.953 21.443 6.176 40.179 12.94 56.934 20.567-16.178 4.209-27.113 12.112-37.798 19.834-14.289 10.327-27.785 20.08-55.11 20.08-27.324 0-40.82-9.753-55.108-20.08-15.594-11.27-31.718-22.922-63.896-22.922-32.174 0-48.296 11.653-63.888 22.923-14.286 10.326-27.78 20.079-55.1 20.079-27.321 0-40.815-9.753-55.103-20.08-10.355-7.484-20.945-15.138-36.314-19.435l9.332-4.134c38.888-17.226 64.015-55.838 64.015-98.37 0-15.357 1.789-30.717 5.316-45.655.952-4.031-1.544-8.071-5.575-9.023-4.028-.951-8.071 1.545-9.022 5.575-3.795 16.066-5.719 32.587-5.719 49.103 0 36.602-21.624 69.831-55.09 84.655l-33.87 15.004c-3.239 1.436-5.033 4.943-4.3 8.41.731 3.468 3.792 5.949 7.336 5.949z" />
                                 </svg>
                               </label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="wave_form"
                               >
                                 <option
                                   value=""
                                   selected={this.state.wave_form === ""}
                                 >
                                   Select wave form
                                 </option>
                                 <option
                                   value="Fat"
                                   selected={this.state.wave_form === "Fat"}
                                 >
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
                               <label>⬅ Direction ➡</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="wave_direction"
                               >
                                 {" "}
                                 <option
                                   value=""
                                   selected={this.state.wave_direction === ""}
                                 >
                                   Select wave direction
                                 </option>
                                 <option
                                   value="Left"
                                   selected={
                                     this.state.wave_direction === "Left"
                                   }
                                 >
                                   Left
                                 </option>
                                 <option
                                   value="A-Frame"
                                   selected={
                                     this.state.wave_direction === "A-Frame"
                                   }
                                 >
                                   A-Frame
                                 </option>
                                 <option
                                   value="Right"
                                   selected={
                                     this.state.wave_direction === "Right"
                                   }
                                 >
                                   Right
                                 </option>
                               </select>
                             </label>
                             <label>
                               <label> Weather 🔆</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="weather"
                               >
                                 <option
                                   value=""
                                   selected={this.state.weather === ""}
                                 >
                                   Select weather
                                 </option>
                                 <option
                                   value="Cold"
                                   selected={this.state.weather === "Cold"}
                                 >
                                   Cold
                                 </option>
                                 <option
                                   value="Mild"
                                   selected={this.state.weather === "Mild"}
                                 >
                                   Mild
                                 </option>
                                 <option
                                   value="Hot"
                                   selected={this.state.weather === "Hot"}
                                 >
                                   Hot
                                 </option>
                               </select>
                             </label>
                             <label>
                               <label> Break 🌊</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="break_type"
                               >
                                 <option
                                   value=""
                                   selected={this.state.break_type === ""}
                                 >
                                   Select Break type
                                 </option>
                                 <option
                                   value="Beach break"
                                   selected={
                                     this.state.break_type === "Beach break"
                                   }
                                 >
                                   Beach break
                                 </option>
                                 <option
                                   value="Point break"
                                   selected={
                                     this.state.break_type === "Point break"
                                   }
                                 >
                                   Point break
                                 </option>
                                 <option
                                   value="Reef break"
                                   selected={
                                     this.state.break_type === "Reef break"
                                   }
                                 >
                                   Reef break
                                 </option>
                                 <option
                                   value="Rivermouth break"
                                   selected={
                                     this.state.break_type ===
                                     "Rivermouth break"
                                   }
                                 >
                                   Rivermouth break
                                 </option>
                               </select>
                             </label>
                             <label>
                               <label>Level ⚠️</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="level"
                               >
                                 <option
                                   value=""
                                   selected={this.state.level === ""}
                                 >
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
                                   selected={
                                     this.state.level === "Intermediate"
                                   }
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
                               <label> Vibe? 🤙🏾</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="vibe"
                               >
                                 <option
                                   value=""
                                   selected={this.state.vibe === ""}
                                 >
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
                               <label>Rate it! ⭐️</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="rating"
                               >
                                 <option
                                   value=""
                                   selected={this.state.rating === ""}
                                 >
                                   Rate!
                                 </option>
                                 <option
                                   value="1"
                                   selected={this.state.rating === "1"}
                                 >
                                   1
                                 </option>
                                 <option
                                   value="2"
                                   selected={this.state.rating === "2"}
                                 >
                                   2
                                 </option>
                                 <option
                                   value="3"
                                   selected={this.state.rating === "3"}
                                 >
                                   3
                                 </option>
                                 <option
                                   value="4"
                                   selected={this.state.rating === "4"}
                                 >
                                   4
                                 </option>
                                 <option
                                   value="5"
                                   selected={this.state.rating === "5"}
                                 >
                                   5
                                 </option>
                               </select>
                             </label>
                              <label>Upload photo</label>
                             <input
                               type="button"
                               value="Upload photo"
                               onClick={() => this.upload()}
                             />
                             <input
                               className="submit-button"
                               type="button"
                               value="Create spot!"
                               onClick={e => this.handleFormSubmit(e)}
                             />
                             <input
                               type="file"
                               name="photo"
                               onChange={e => this.onPhotoChange(e)}
                             />
                           </div>
                           <div className="cont-map">
                             <GmapsLocate
                               className="map"
                               coordinates={this.state.coordinates}
                               getLocation={this.getLocation}
                             />
                             <div className="cloudinary"></div>
                           </div>
                         </form> 
                       </div>
                     );
                   } else {
                     return (
                       <div
                         className="container oculto-create mostrar-create"
                        //  onClick={() => this.props.history.push("/")}
                       >
                         <form
                           onSubmit={event =>
                             this.handleFormSubmit(event, "image")
                           }
                         >
                           <div className="backImg">
                             {this.state.imageURL && (
                               <img src={this.state.imageURL} />
                             )}
                           </div>
                           <div className="icons">
                             <fieldset>
                               <label>
                                 Name
                                 <i class="medium material-icons">thumb_up</i>
                               </label>
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
                               <label>T</label>
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
                               <label> Country 🏳️</label>
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
                               <label> Near? 🍺</label>
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
                               <label> +/- </label>
                               <select
                                 name="consistence"
                                 onChange={event => this.handleChange(event)}
                               >
                                 <option
                                   value=""
                                   selected={this.state.consistence === ""}
                                 >
                                   Select consistence
                                 </option>
                                 <option
                                   value="Yes"
                                   selected={this.state.consistence === "Yes"}
                                 >
                                   Yes
                                 </option>
                                 <option
                                   value="No"
                                   selected={this.state.consistence === "No"}
                                 >
                                   No
                                 </option>
                               </select>
                             </label>
                             <label>
                               <label>
                                 <svg
                                   id="Capa_1"
                                   enable-background="new 0 0 512.001 512.001"
                                   height="40"
                                   viewBox="0 0 512.001 512.001"
                                   width="40"
                                   xmlns="http://www.w3.org/2000/svg"
                                 >
                                   <path d="m483.489 385.311c-32.178 0-48.303 11.653-63.896 22.923-14.288 10.326-27.784 20.08-55.108 20.08s-40.82-9.753-55.108-20.08c-15.594-11.269-31.718-22.922-63.896-22.922-32.174 0-48.296 11.653-63.888 22.923-14.286 10.326-27.78 20.08-55.101 20.08s-40.815-9.753-55.102-20.08c-15.592-11.27-31.715-22.923-63.89-22.923-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5c27.321 0 40.815 9.753 55.103 20.08 15.592 11.269 31.715 22.922 63.889 22.922s48.296-11.653 63.888-22.923c14.286-10.326 27.78-20.08 55.101-20.08 27.324 0 40.82 9.753 55.108 20.08 15.594 11.269 31.718 22.922 63.896 22.922s48.302-11.653 63.895-22.922c14.289-10.326 27.785-20.08 55.11-20.08 4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.501-7.5z" />
                                   <path d="m483.489 428.314c-32.178 0-48.303 11.653-63.896 22.922-14.288 10.326-27.784 20.08-55.108 20.08s-40.82-9.753-55.108-20.08c-15.594-11.27-31.718-22.922-63.896-22.922-32.174 0-48.296 11.653-63.888 22.922-14.286 10.326-27.78 20.08-55.101 20.08s-40.815-9.753-55.102-20.08c-15.592-11.269-31.715-22.922-63.89-22.922-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5c27.321 0 40.816 9.753 55.103 20.08 15.592 11.27 31.715 22.922 63.889 22.922s48.296-11.653 63.888-22.922c14.286-10.326 27.78-20.08 55.101-20.08 27.324 0 40.82 9.753 55.108 20.08 15.594 11.27 31.718 22.922 63.896 22.922s48.302-11.653 63.895-22.922c14.289-10.326 27.785-20.08 55.11-20.08 4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.501-7.5z" />
                                   <path d="m511.987 233.665-.004-.12c0-.002 0-.004 0-.006-.384-56.941-23.221-110.037-64.305-149.509-41.063-39.451-95.099-60.131-152.126-58.224-42.003 1.402-82.112 15.398-115.994 40.474-32.968 24.399-58.049 57.668-72.531 96.211-1.457 3.877.505 8.202 4.383 9.659 3.872 1.458 8.202-.505 9.658-4.382 13.464-35.831 36.775-66.755 67.413-89.431 31.426-23.258 68.623-36.239 107.571-37.54 52.959-1.763 103.114 17.427 141.233 54.049 4.666 4.483 9.065 9.165 13.217 14.01-32.996-28.059-74.615-42.611-118.419-41.147-45.386 1.515-87.766 20.662-119.333 53.911-31.395 33.067-48.685 76.411-48.685 122.047 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-41.775 15.826-81.452 44.563-111.719 28.839-30.375 67.533-47.865 108.955-49.248 43.544-1.438 84.715 14.384 115.953 44.597 11.283 10.913 20.726 23.182 28.199 36.443-15.203-11.465-33.621-17.685-52.984-17.685-23.273 0-45.233 8.98-61.835 25.285-16.579 16.284-25.954 38.035-26.398 61.247-.074 3.908.124 7.876.588 11.795.452 3.813 3.691 6.618 7.438 6.618.295 0 .593-.017.893-.053 4.113-.487 7.053-4.217 6.565-8.331-.385-3.24-.548-6.519-.486-9.743.368-19.263 8.149-37.315 21.911-50.831 13.779-13.534 32.007-20.987 51.324-20.987 35.333 0 65.054 25.374 71.79 58.855.96 7.117 1.459 14.349 1.459 21.666 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c.001-.1-.009-7.81-.013-7.911z" />
                                   <path d="m7.501 351.526c27.321 0 40.815 9.753 55.103 20.08 15.592 11.27 31.715 22.922 63.89 22.922 32.173 0 48.295-11.653 63.887-22.922 14.286-10.326 27.78-20.08 55.101-20.08 27.324 0 40.82 9.753 55.108 20.08 15.594 11.27 31.718 22.922 63.896 22.922s48.303-11.653 63.896-22.922c14.288-10.326 27.784-20.08 55.108-20.08 3.48 0 6.503-2.394 7.301-5.782.797-3.388-.841-6.879-3.956-8.431l-13.136-6.545c-19.964-9.947-42.563-18.497-69.088-26.136-10.175-2.931-19.852-8.115-27.983-14.992-7.956-6.729-14.525-15.169-18.999-24.407-1.804-3.728-6.287-5.288-10.019-3.482-3.728 1.805-5.287 6.291-3.481 10.019 5.38 11.111 13.269 21.25 22.813 29.323 9.735 8.233 21.325 14.441 33.519 17.953 21.443 6.176 40.179 12.94 56.934 20.567-16.178 4.209-27.113 12.112-37.798 19.834-14.289 10.327-27.785 20.08-55.11 20.08-27.324 0-40.82-9.753-55.108-20.08-15.594-11.27-31.718-22.922-63.896-22.922-32.174 0-48.296 11.653-63.888 22.923-14.286 10.326-27.78 20.079-55.1 20.079-27.321 0-40.815-9.753-55.103-20.08-10.355-7.484-20.945-15.138-36.314-19.435l9.332-4.134c38.888-17.226 64.015-55.838 64.015-98.37 0-15.357 1.789-30.717 5.316-45.655.952-4.031-1.544-8.071-5.575-9.023-4.028-.951-8.071 1.545-9.022 5.575-3.795 16.066-5.719 32.587-5.719 49.103 0 36.602-21.624 69.831-55.09 84.655l-33.87 15.004c-3.239 1.436-5.033 4.943-4.3 8.41.731 3.468 3.792 5.949 7.336 5.949z" />
                                 </svg>
                               </label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="wave_form"
                               >
                                 <option
                                   value=""
                                   selected={this.state.wave_form === ""}
                                 >
                                   Select wave form
                                 </option>
                                 <option
                                   value="Fat"
                                   selected={this.state.wave_form === "Fat"}
                                 >
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
                               <label>⬅ Direction ➡</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="wave_direction"
                               >
                                 {" "}
                                 <option
                                   value=""
                                   selected={this.state.wave_direction === ""}
                                 >
                                   Select wave direction
                                 </option>
                                 <option
                                   value="Left"
                                   selected={
                                     this.state.wave_direction === "Left"
                                   }
                                 >
                                   Left
                                 </option>
                                 <option
                                   value="A-Frame"
                                   selected={
                                     this.state.wave_direction === "A-Frame"
                                   }
                                 >
                                   A-Frame
                                 </option>
                                 <option
                                   value="Right"
                                   selected={
                                     this.state.wave_direction === "Right"
                                   }
                                 >
                                   Right
                                 </option>
                               </select>
                             </label>
                             <label>
                               <label> Weather 🔆</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="weather"
                               >
                                 <option
                                   value=""
                                   selected={this.state.weather === ""}
                                 >
                                   Select weather
                                 </option>
                                 <option
                                   value="Cold"
                                   selected={this.state.weather === "Cold"}
                                 >
                                   Cold
                                 </option>
                                 <option
                                   value="Mild"
                                   selected={this.state.weather === "Mild"}
                                 >
                                   Mild
                                 </option>
                                 <option
                                   value="Hot"
                                   selected={this.state.weather === "Hot"}
                                 >
                                   Hot
                                 </option>
                               </select>
                             </label>
                             <label>
                               <label> Break 🌊</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="break_type"
                               >
                                 <option
                                   value=""
                                   selected={this.state.break_type === ""}
                                 >
                                   Select Break type
                                 </option>
                                 <option
                                   value="Beach break"
                                   selected={
                                     this.state.break_type === "Beach break"
                                   }
                                 >
                                   Beach break
                                 </option>
                                 <option
                                   value="Point break"
                                   selected={
                                     this.state.break_type === "Point break"
                                   }
                                 >
                                   Point break
                                 </option>
                                 <option
                                   value="Reef break"
                                   selected={
                                     this.state.break_type === "Reef break"
                                   }
                                 >
                                   Reef break
                                 </option>
                                 <option
                                   value="Rivermouth break"
                                   selected={
                                     this.state.break_type ===
                                     "Rivermouth break"
                                   }
                                 >
                                   Rivermouth break
                                 </option>
                               </select>
                             </label>
                             <label>
                               <label>Level ⚠️</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="level"
                               >
                                 <option
                                   value=""
                                   selected={this.state.level === ""}
                                 >
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
                                   selected={
                                     this.state.level === "Intermediate"
                                   }
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
                               <label> Vibe? 🤙🏾</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="vibe"
                               >
                                 <option
                                   value=""
                                   selected={this.state.vibe === ""}
                                 >
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
                               <label>Rate it! ⭐️</label>
                               <select
                                 onChange={event => this.handleChange(event)}
                                 name="rating"
                               >
                                 <option
                                   value=""
                                   selected={this.state.rating === ""}
                                 >
                                   Rate!
                                 </option>
                                 <option
                                   value="1"
                                   selected={this.state.rating === "1"}
                                 >
                                   1
                                 </option>
                                 <option
                                   value="2"
                                   selected={this.state.rating === "2"}
                                 >
                                   2
                                 </option>
                                 <option
                                   value="3"
                                   selected={this.state.rating === "3"}
                                 >
                                   3
                                 </option>
                                 <option
                                   value="4"
                                   selected={this.state.rating === "4"}
                                 >
                                   4
                                 </option>
                                 <option
                                   value="5"
                                   selected={this.state.rating === "5"}
                                 >
                                   5
                                 </option>
                               </select>
                             </label>
                             <input
                               type="button"
                               value="Upload photo"
                               onClick={() => this.upload()}
                             />
                             <input
                               className="submit-button"
                               type="button"
                               value="Create spot!"
                               onClick={e => this.handleFormSubmit(e)}
                             />
                             <input
                               type="file"
                               name="photo"
                               onChange={e => this.onPhotoChange(e)}
                             />
                           </div>
                           <div className="cont-map">
                             <GmapsLocate
                               className="map"
                               coordinates={this.state.coordinates}
                               getLocation={this.getLocation}
                             />
                             <div className="cloudinary"></div>
                           </div>
                         </form>
                       </div>
                     );
                   }
                 }
               }


               export default withRouter(Create);