import React, { Component } from "react";
import "./Spots.scss";
import Gmaps from "./../gmaps/Gmaps";
import OneSpot from "./OneSpot";
import SpotsService from "./../services/SpotsService";
import { directive } from "@babel/types";
import Preload from "../Preload/Preload";

export default class Spots extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     spots: [],
                     selectedSpot: [],
                     showOneSpot: false,
                     forecast: {},
                     preload:false
                   };
                   this.service = new SpotsService();
                   this.preload()
                 }

                    // componentDidMount(){

                    //   }


                 displayOne(spot) {
                   this.setState({
                     ...this.state,
                     selectedSpot: spot,
                     showOneSpot: true
                   },()=>this.getForecast(this.state.selectedSpot));
                 }

                 preload(){
                   setTimeout(()=>{
                     this.setState({...this.state, preload: true})
                   },4000)
                 }

                 hideOne(spot) {
                   this.setState({
                     ...this.state,
                     showOneSpot: false
                   });
                 }

                 // async getMeteo() {
                 //   const forecast = await this.getForecast();
                 //   // console.log(forecast);
                 //   this.setState({
                 //     ...this.state,
                 //     forecast: forecast
                 //   });

                 //   console.log("GETTING FORECAST...");
                 //   const lng = this.state.spot.location.coordinates[0];
                 //   const lat = this.state.spot.location.coordinates[1];
                 //   // const params = "swellHeight, waveHeight,seaLevel, windDirection, windSpeed";
                 //   // ("time,airTemperature,swellDirection, swellHeight, swellPeriod, waterTemperature, waveDirection, waveHeight, wavePeriod,seaLevel, windDirection, windSpeed");
                 //   console.log(process.env);
                 //   fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`, {
                 //     headers: {
                 //       Authorization: `${process.env.REACT_APP_API_KEY}`
                 //     }
                 //   })
                 //     .then(response => response.json())
                 //     .then(jsonData => {
                 //       // Do something with response data.
                 //       console.log(jsonData);
                 //     });
                 // }
                

                 getForecast(spot) {
                   console.dir(this.state.selectedSpot);
                   console.log(Object.values(this.state.spots));
                   console.log("GETTING FORECAST...");

                   const lng = spot.location.coordinates[0];
                   const lat = spot.location.coordinates[1];
                   fetch(
                    //  `https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`,
                     {
                       headers: {
                         Authorization: `${process.env.REACT_APP_API_KEY}`
                       }
                     }
                   )
                     .then(response => response.json())
                     .then(forecast => {
                       this.setState({
                         ...this.state,
                         forecast: forecast
                       });
                      
                     });
                 }

                 render() {
                   if (this.state.forecast.hours) {
                   }
                   if (this.state.showOneSpot === false) {
                     return (
                       <div className="container-spot">
                         <div className="one-spot">
                           <div className="filter"></div>
                           <div className="full-info"></div>
                         </div>
                         <div  className="masonry-effect">
                           {this.props.spots.map((spot, index) => (
                             <div
                               className="item"
                               onClick={() => this.displayOne(spot)}
                             >
                               <OneSpot
                                 full={false}
                                 selectedSpot={this.state.selectedSpot}
                                 key={index}
                                 spot={spot}
                                 display={() => this.getForecast(spot)}
                               />
                             </div>
                           ))}
                         </div>
                       </div>
                     );
                   } else {
                     return (
                       <div className="container-spot">
                         <div className="one-spot display">
                           <div className="filter">
                             <i
                               className="material-icons back"
                               onClick={() => this.hideOne()}
                             >
                               arrow_back
                             </i>
                           </div>
                           <div className="full-info">
                             <div className="spot-info">
                               <ul>
                                 <li>
                                   {this.state.selectedSpot.name}( (
                                   {this.state.selectedSpot.country})
                                 </li>
                                 <li>{this.state.selectedSpot.nearby} near</li>
                                 <li>
                                   Consistence:{" "}
                                   {this.state.selectedSpot.consistence}
                                 </li>
                                 <li>
                                   Commment:{" "}
                                   {this.state.selectedSpot.comment.text}
                                 </li>
                                 <li>
                                   Rating:{" "}
                                   {this.state.selectedSpot.comment.rating}
                                 </li>
                                 <li>
                                   Wave form:{" "}
                                   {this.state.selectedSpot.wave_form}
                                 </li>
                                 <li>
                                   {this.state.selectedSpot.wave_direction}
                                 </li>
                                 <li>
                                   {this.state.selectedSpot.weather} weather
                                 </li>
                                 <li>
                                   Period: {this.state.selectedSpot.period} s
                                 </li>
                                 <li>{this.state.selectedSpot.break_type}</li>
                                 <li>{this.state.selectedSpot.level} level</li>
                                 <li> {this.state.selectedSpot.vibe} vibe</li>
                               </ul>
                               <Gmaps
                                 className="Gmaps"
                                 coordinates={
                                   this.state.selectedSpot.location.coordinates
                                 }
                               />
                             </div>
                             <div className="forecast-info">
                               <div className="Morning">
                                 {this.state.preload ? (
                                   <React.Fragment>
                                     <div className="upRow">
                                       <ul>
                                         {!!this.state.forecast.hours && (
                                           <li>
                                             <i class="material-icons">
                                               brightness_7
                                             </i>
                                             {this.state.forecast.hours[4].airTemperature[0].value.toFixed()}{" "}
                                             -
                                             {this.state.forecast.hours[12].airTemperature[0].value.toFixed()}
                                             ºC
                                           </li>
                                         )}
                                       </ul>
                                       <p>Morning 05-11h</p>
                                       <ul>
                                         {!!this.state.forecast.hours && (
                                           <li>
                                             <i class="material-icons">
                                               opacity
                                             </i>
                                             {this.state.forecast.hours[4].waterTemperature[0].value.toFixed()}{" "}
                                             -
                                             {this.state.forecast.hours[12].waterTemperature[0].value.toFixed()}
                                             ºC
                                           </li>
                                         )}
                                       </ul>
                                     </div>
                                     <div className="midRow">
                                       <ul>
                                         {!!this.state.forecast.hours && (
                                           <li>
                                             <i class="fas fa-water"></i>
                                             {this.state.forecast.hours[4].waveHeight[0].value.toFixed(
                                               1
                                             )}{" "}
                                             -
                                             {this.state.forecast.hours[12].waveHeight[0].value.toFixed(
                                               1
                                             )}{" "}
                                             m
                                           </li>
                                         )}
                                       </ul>
                                     </div>
                                     <div className="downRow">
                                       <ul>
                                         {!!this.state.forecast.hours && (
                                           <li>
                                             <i class="material-icons">
                                               {" "}
                                               autorenew
                                             </i>
                                             {this.state.forecast.hours[4].wavePeriod[0].value.toFixed()}{" "}
                                             -
                                             {this.state.forecast.hours[12].wavePeriod[0].value.toFixed()}{" "}
                                             s
                                           </li>
                                         )}
                                       </ul>
                                       <ul>
                                         {!!this.state.forecast.hours && (
                                           <li>
                                             <i class="material-icons">
                                               {" "}
                                               arrow_upward
                                             </i>
                                             {this.state.forecast.hours[4].windSpeed[0].value.toFixed()}{" "}
                                             -
                                             {this.state.forecast.hours[12].windSpeed[0].value.toFixed()}{" "}
                                             kph
                                           </li>
                                         )}
                                       </ul>
                                     </div>
                                   </React.Fragment>
                                 ) : (
                                <Preload/>
                                 )}
                               </div>
                               <div className="Midday">
                                 <div className="upRow">
                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="material-icons">
                                           brightness_7
                                         </i>
                                         {this.state.forecast.hours[12].airTemperature[0].value.toFixed()}{" "}
                                         -
                                         {this.state.forecast.hours[18].airTemperature[0].value.toFixed()}
                                         ºC
                                       </li>
                                     )}
                                   </ul>

                                   <p>Midday 11-17h</p>

                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="material-icons">opacity</i>
                                         {this.state.forecast.hours[12].waterTemperature[0].value.toFixed()}{" "}
                                         -
                                         {this.state.forecast.hours[18].waterTemperature[0].value.toFixed()}
                                         ºC
                                       </li>
                                     )}
                                   </ul>
                                 </div>
                                 <div className="midRow">
                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="fas fa-water"></i>
                                         {this.state.forecast.hours[12].waveHeight[0].value.toFixed(
                                           1
                                         )}{" "}
                                         -
                                         {this.state.forecast.hours[18].waveHeight[0].value.toFixed(
                                           1
                                         )}{" "}
                                         m
                                       </li>
                                     )}
                                   </ul>
                                 </div>
                                 <div className="downRow">
                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="material-icons">
                                           {" "}
                                           autorenew
                                         </i>
                                         {this.state.forecast.hours[12].wavePeriod[0].value.toFixed()}{" "}
                                         -
                                         {this.state.forecast.hours[18].wavePeriod[0].value.toFixed()}{" "}
                                         s
                                       </li>
                                     )}
                                   </ul>
                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="material-icons">
                                           {" "}
                                           arrow_upward
                                         </i>
                                         {this.state.forecast.hours[12].windSpeed[0].value.toFixed()}{" "}
                                         -
                                         {this.state.forecast.hours[18].windSpeed[0].value.toFixed()}{" "}
                                         kph
                                       </li>
                                     )}
                                   </ul>
                                 </div>
                               </div>
                               <div className="Evening">
                                 <div className="upRow">
                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="material-icons">
                                           brightness_7
                                         </i>
                                         {this.state.forecast.hours[18].airTemperature[0].value.toFixed()}{" "}
                                         -
                                         {this.state.forecast.hours[24].airTemperature[0].value.toFixed()}
                                         ºC
                                       </li>
                                     )}
                                   </ul>
                                   <p>Evening 17-23h</p>

                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="material-icons">opacity</i>
                                         {this.state.forecast.hours[18].waterTemperature[0].value.toFixed()}{" "}
                                         -
                                         {this.state.forecast.hours[24].waterTemperature[0].value.toFixed()}
                                         ºC
                                       </li>
                                     )}
                                   </ul>
                                 </div>
                                 <div className="midRow">
                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="fas fa-water"></i>
                                         {this.state.forecast.hours[18].waveHeight[0].value.toFixed(
                                           1
                                         )}{" "}
                                         -
                                         {this.state.forecast.hours[24].waveHeight[0].value.toFixed(
                                           1
                                         )}{" "}
                                         m
                                       </li>
                                     )}
                                   </ul>
                                 </div>
                                 <div className="downRow">
                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="material-icons">
                                           {" "}
                                           autorenew
                                         </i>
                                         {this.state.forecast.hours[18].wavePeriod[0].value.toFixed()}{" "}
                                         -
                                         {this.state.forecast.hours[24].wavePeriod[0].value.toFixed()}{" "}
                                         s
                                       </li>
                                     )}
                                   </ul>
                                   <ul>
                                     {!!this.state.forecast.hours && (
                                       <li>
                                         <i class="material-icons">
                                           {" "}
                                           arrow_upward
                                         </i>
                                         {this.state.forecast.hours[18].windSpeed[0].value.toFixed()}{" "}
                                         -
                                         {this.state.forecast.hours[24].windSpeed[0].value.toFixed()}{" "}
                                         kph
                                       </li>
                                     )}
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                         {this.props.spots.map((spot, index) => (
                           <React.Fragment>
                             <OneSpot key={index} spot={spot} />
                           </React.Fragment>
                         ))}
                       </div>
                     );
                   }
                 }
               }

// async getMeteo() {
//   const forecast = await this.service.getForecast();
//   // console.log(forecast);
//   this.setState({
//     ...this.state,
//     forecast: forecast
//   });
// }

//esto funcionAAAA
// render() {
//     if (!!this.state.forecast.hours) {
//       console.log(this.state.forecast.hours[0].airTemperature[0].value);
//     }
//     if (this.state.showOneSpot === false) {
//       return (
//         <div className="container-spot">
//           <div className="one-spot">
//             <div className="filter"></div>
//             <div className="full-info"></div>
//           </div>
//           {this.props.spots.map((spot, index) => (
//             <div className="item" onClick={() => this.displayOne(spot)}>
//               <OneSpot
//                 full={false}
//                 selectedSpot={this.state.selectedSpot}
//                 key={index}
//                 spot={spot}
//                 display={e => this.getMeteo(e)}
//               />
//             </div>
//           ))}
//         </div>
//       );
//     } else {
//       return (
//         <div className="container-spot">
//           <div className="one-spot display">
//             <div className="filter">
//               <i className="material-icons back" onClick={() => this.hideOne()}>
//                 arrow_back
//               </i>
//             </div>
//             <div className="full-info">
//               <div className="spot-info">
//                 <ul>
//                   <li>
//                     {this.state.selectedSpot.name}(
//                     {this.state.selectedSpot.country})
//                   </li>
//                   <li>{this.state.selectedSpot.nearby} near</li>
//                   <li>Consistence: {this.state.selectedSpot.consistence}</li>
//                   <li>Commment: {this.state.selectedSpot.comment.text}</li>
//                   <li>Rating: {this.state.selectedSpot.comment.rating}</li>
//                   <li>Wave form: {this.state.selectedSpot.wave_form}</li>
//                   <li>{this.state.selectedSpot.wave_direction}</li>
//                   <li>{this.state.selectedSpot.weather} weather</li>
//                   <li>Period: {this.state.selectedSpot.period} s</li>
//                   <li>{this.state.selectedSpot.break_type}</li>
//                   <li>{this.state.selectedSpot.level} level</li>
//                   <li> {this.state.selectedSpot.vibe} vibe</li>
//                 </ul>
//                 <Gmaps
//                   className="map"
//                   coordinates={this.state.selectedSpot.location.coordinates}
//                 />
//               </div>
//               <div className="forecast-info">
//                 <div className="Morning">
//                   <div className="upRow">
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons">brightness_7</i>
//                           {this.state.forecast.hours[4].airTemperature[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[12].airTemperature[0].value.toFixed()}
//                           ºC
//                         </li>
//                       )}
//                     </ul>
//                     <p>Morning 05-11h</p>
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons">opacity</i>
//                           {this.state.forecast.hours[4].waterTemperature[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[12].waterTemperature[0].value.toFixed()}
//                           ºC
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                   <div className="midRow">
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="fas fa-water"></i>
//                           {this.state.forecast.hours[4].waveHeight[0].value.toFixed(
//                             1
//                           )}{" "}
//                           -
//                           {this.state.forecast.hours[12].waveHeight[0].value.toFixed(
//                             1
//                           )}{" "}
//                           m
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                   <div className="downRow">
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons"> autorenew</i>
//                           {this.state.forecast.hours[4].wavePeriod[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[12].wavePeriod[0].value.toFixed()}{" "}
//                           s
//                         </li>
//                       )}
//                     </ul>
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons"> arrow_upward</i>
//                           {this.state.forecast.hours[4].windSpeed[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[12].windSpeed[0].value.toFixed()}{" "}
//                           kph
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="Midday">
//                   <div className="upRow">
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons">brightness_7</i>
//                           {this.state.forecast.hours[12].airTemperature[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[18].airTemperature[0].value.toFixed()}
//                           ºC
//                         </li>
//                       )}
//                     </ul>

//                     <p>Midday 11-17h</p>

//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons">opacity</i>
//                           {this.state.forecast.hours[12].waterTemperature[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[18].waterTemperature[0].value.toFixed()}
//                           ºC
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                   <div className="midRow">
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="fas fa-water"></i>
//                           {this.state.forecast.hours[12].waveHeight[0].value.toFixed(
//                             1
//                           )}{" "}
//                           -
//                           {this.state.forecast.hours[18].waveHeight[0].value.toFixed(
//                             1
//                           )}{" "}
//                           m
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                   <div className="downRow">
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons"> autorenew</i>
//                           {this.state.forecast.hours[12].wavePeriod[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[18].wavePeriod[0].value.toFixed()}{" "}
//                           s
//                         </li>
//                       )}
//                     </ul>
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons"> arrow_upward</i>
//                           {this.state.forecast.hours[12].windSpeed[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[18].windSpeed[0].value.toFixed()}{" "}
//                           kph
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="Evening">
//                   <div className="upRow">
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons">brightness_7</i>
//                           {this.state.forecast.hours[18].airTemperature[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[24].airTemperature[0].value.toFixed()}
//                           ºC
//                         </li>
//                       )}
//                     </ul>
//                     <p>Evening 17-23h</p>

//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons">opacity</i>
//                           {this.state.forecast.hours[18].waterTemperature[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[24].waterTemperature[0].value.toFixed()}
//                           ºC
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                   <div className="midRow">
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="fas fa-water"></i>
//                           {this.state.forecast.hours[18].waveHeight[0].value.toFixed(
//                             1
//                           )}{" "}
//                           -
//                           {this.state.forecast.hours[24].waveHeight[0].value.toFixed(
//                             1
//                           )}{" "}
//                           m
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                   <div className="downRow">
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons"> autorenew</i>
//                           {this.state.forecast.hours[18].wavePeriod[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[24].wavePeriod[0].value.toFixed()}{" "}
//                           s
//                         </li>
//                       )}
//                     </ul>
//                     <ul>
//                       {!!this.state.forecast.hours && (
//                         <li>
//                           <i class="material-icons"> arrow_upward</i>
//                           {this.state.forecast.hours[18].windSpeed[0].value.toFixed()}{" "}
//                           -
//                           {this.state.forecast.hours[24].windSpeed[0].value.toFixed()}{" "}
//                           kph
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {this.props.spots.map((spot, index) => (
//             <React.Fragment>
//               <OneSpot key={index} spot={spot} />
//             </React.Fragment>
//           ))}
//         </div>
//       );
//     }
//   }
// }
// }
