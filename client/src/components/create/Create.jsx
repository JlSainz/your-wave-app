import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Create.scss";
import SpotsService from "./../services/SpotsService";
import GmapsLocate from "./../gmaps/GmapsLocate";

class Create extends Component {
                 constructor() {
                   super();

                   this.state = {
                     coordinates: [115.838236, -8.739984],
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
                     vibe: "",
                     consistence: "",
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
                       <div className="container oculto-create mostrar-create">
                         <div className="full oculto-create ">
                           <i
                             className="material-icons back"
                             onClick={() => this.props.history.push("/")}
                           >
                             arrow_back
                           </i>
                           <div className="left">
                             <div className="cloudinary">
                               {this.state.imageURL && (
                                 <img src={this.state.imageURL} />
                               )}

                               <div className="upload">
                                 <i
                                   class="fas fa-cloud-upload-alt"
                                   onClick={() => this.upload()}
                                 ></i>
                               </div>
                               <div className="align">
                                 <input
                                   className="ok"
                                   type="file"
                                   name="photo"
                                   onChange={e => this.onPhotoChange(e)}
                                 />
                               </div>
                             </div>
                             <GmapsLocate
                               className="map"
                               coordinates={this.state.coordinates}
                               getLocation={this.getLocation}
                             />
                           </div>

                           <form
                             onSubmit={event =>
                               this.handleFormSubmit(event, "image")
                             }
                           >
                             <div className="icons">
                               <div className="firstRow">
                                 <fieldset>
                                   <label>Spot name</label>
                                   <input
                                     type="text"
                                     name="name"
                                     value={this.state.name}
                                     placeholder="Name..."
                                     required
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                   />
                                 </fieldset>
                                 <fieldset>
                                   <label> Country</label>
                                   <input
                                     type="text"
                                     name="country"
                                     value={this.state.country}
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     placeholder="Country..."
                                     required
                                   />
                                 </fieldset>
                                 <fieldset>
                                   <label> Near? </label>
                                   <input
                                     type="text"
                                     name="nearby"
                                     value={this.state.nearby}
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     placeholder="Nearby..."
                                     required
                                   />
                                 </fieldset>
                               </div>
                               <div className="secRow">
                                 <label>
                                   <label> Consistence </label>
                                   <select
                                     defaultValue="Select consistence"
                                     name="consistence"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                   >
                                     <option
                                       value=""
                                       selected={this.state.consistence === ""}
                                     >
                                       Select consistence
                                     </option>

                                     <option
                                       value="Yes"
                                       selected={
                                         this.state.consistence === "Yes"
                                       }
                                     >
                                       Yes
                                     </option>
                                     <option
                                       value="No"
                                       selected={
                                         this.state.consistence === "No"
                                       }
                                     >
                                       No
                                     </option>
                                   </select>
                                 </label>
                                 <label>
                                   <label>Wave form</label>
                                   <select
                                     defaultValue="Select wave form"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                                       selected={
                                         this.state.wave_form === "Hollow"
                                       }
                                     >
                                       Hollow
                                     </option>
                                   </select>
                                 </label>
                                 <label>
                                   <label>Direction </label>
                                   <select
                                     defaultValue="Select wave direction"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     name="wave_direction"
                                   >
                                     {" "}
                                     <option
                                       value=""
                                       selected={
                                         this.state.wave_direction === ""
                                       }
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
                                   <label> Weather </label>
                                   <select
                                     defaultValue="Select weather"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                               </div>
                               <div className="thirdRow">
                                 <label>
                                   <label> Break </label>
                                   <select
                                     defaultValue="Select break type"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                                   <label>Level </label>
                                   <select
                                     defaultValue="Select level"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                                       selected={
                                         this.state.level === "Beginner"
                                       }
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
                                       selected={
                                         this.state.level === "Advanced"
                                       }
                                     >
                                       Advanced
                                     </option>
                                   </select>
                                 </label>
                                 <label>
                                   <label> Vibe? </label>
                                   <select
                                     defaultValue="Select vibe"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                                       selected={
                                         this.state.vibe === "Unfriendly"
                                       }
                                     >
                                       Unfriendly
                                     </option>
                                   </select>
                                 </label>
                                 <label>
                                   <label>Rate it!</label>
                                   <select
                                     defaultValue="Rate it!"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     name="rating"
                                   >
                                     <option
                                       value=""
                                       selected={this.state.rating === ""}
                                     >
                                       Rate
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
                               </div>
                               <div className="comment">
                                 <fieldset>
                                   <textarea
                                     type="text"
                                     name="text"
                                     value={this.state.text}
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     placeholder="Your comment here...."
                                     required
                                   />
                                 </fieldset>
                               </div>
                               <input
                                 className="submit-button"
                                 type="button"
                                 value="Create spot!"
                                 onClick={e => this.handleFormSubmit(e)}
                               />
                             </div>
                           </form>
                         </div>
                       </div>
                     );
                   } else {
                     return (
                       <div className="container oculto-create mostrar-create">
                         <div className="full oculto-create mostrar-create ">
                           <i
                             className="material-icons back"
                             onClick={() => this.props.history.push("/")}
                           >
                             arrow_back
                           </i>
                           <div className="left">
                             <div className="cloudinary">
                               {this.state.imageURL && (
                                 <img src={this.state.imageURL} />
                               )}

                               <div className="upload">
                                 <i
                                   class="fas fa-cloud-upload-alt"
                                   onClick={() => this.upload()}
                                 ></i>
                               </div>
                               <div className="align">
                                 <input
                                   className="ok"
                                   type="file"
                                   name="photo"
                                   onChange={e => this.onPhotoChange(e)}
                                 />
                         
                               </div>
                             </div>
                             <GmapsLocate
                               className="map"
                               coordinates={this.state.coordinates}
                               getLocation={this.getLocation}
                             />
                           </div>

                           <form
                             onSubmit={event =>
                               this.handleFormSubmit(event, "image")
                             }
                           >
                             <div className="icons">
                               <div className="firstRow">
                                 <fieldset>
                                   <label>Spot name</label>
                                   <input
                                     type="text"
                                     name="name"
                                     value={this.state.name}
                                     placeholder="Name..."
                                     required
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                   />
                                 </fieldset>
                                 <fieldset>
                                   <label> Country</label>
                                   <input
                                     type="text"
                                     name="country"
                                     value={this.state.country}
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     placeholder="Country..."
                                     required
                                   />
                                 </fieldset>
                                 <fieldset>
                                   <label> Near? </label>
                                   <input
                                     type="text"
                                     name="nearby"
                                     value={this.state.nearby}
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     placeholder="Nearby..."
                                     required
                                   />
                                 </fieldset>
                               </div>
                               <div className="secRow">
                                 <label>
                                   <label> Consistence </label>
                                   <select
                                     defaultValue="Select consistence"
                                     name="consistence"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                   >
                                     <option
                                       value=""
                                       selected={this.state.consistence === ""}
                                     >
                                       Select consistence
                                     </option>

                                     <option
                                       value="Yes"
                                       selected={
                                         this.state.consistence === "Yes"
                                       }
                                     >
                                       Yes
                                     </option>
                                     <option
                                       value="No"
                                       selected={
                                         this.state.consistence === "No"
                                       }
                                     >
                                       No
                                     </option>
                                   </select>
                                 </label>
                                 <label>
                                   <label>Wave form</label>
                                   <select
                                     defaultValue="Select wave form"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                                       selected={
                                         this.state.wave_form === "Hollow"
                                       }
                                     >
                                       Hollow
                                     </option>
                                   </select>
                                 </label>
                                 <label>
                                   <label>Wave Direction </label>
                                   <select
                                     defaultValue="Select wave direction"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     name="wave_direction"
                                   >
                                     {" "}
                                     <option
                                       value=""
                                       selected={
                                         this.state.wave_direction === ""
                                       }
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
                                   <label> Weather </label>
                                   <select
                                     defaultValue="Select weather"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                               </div>
                               <div className="thirdRow">
                                 <label>
                                   <label> Break </label>
                                   <select
                                     defaultValue="Select break type"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                                   <label>Level </label>
                                   <select
                                     defaultValue="Select level"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                                       selected={
                                         this.state.level === "Beginner"
                                       }
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
                                       selected={
                                         this.state.level === "Advanced"
                                       }
                                     >
                                       Advanced
                                     </option>
                                   </select>
                                 </label>
                                 <label>
                                   <label> Vibe? </label>
                                   <select
                                     defaultValue="Select vibe"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
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
                                       selected={
                                         this.state.vibe === "Unfriendly"
                                       }
                                     >
                                       Unfriendly
                                     </option>
                                   </select>
                                 </label>
                                 <label>
                                   <label>Rate it!</label>
                                   <select
                                     defaultValue="Rate it!"
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     name="rating"
                                   >
                                     <option
                                       value=""
                                       selected={this.state.rating === ""}
                                     >
                                       Rate
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
                               </div>
                               <div className="comment">
                                 <fieldset>
                                   <textarea
                                     type="text"
                                     name="text"
                                     value={this.state.text}
                                     onChange={event =>
                                       this.handleChange(event)
                                     }
                                     placeholder="Your comment here...."
                                     required
                                   />
                                 </fieldset>
                               </div>
                               <input
                                 className="submit-button"
                                 type="button"
                                 value="Create spot!"
                                 onClick={e => this.handleFormSubmit(e)}
                               />
                             </div>
                           </form>
                         </div>
                       </div>
                     );
                   }
                 }
               }


               export default withRouter(Create);