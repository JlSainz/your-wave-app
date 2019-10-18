// import React, { Component } from "react";
// import "./Profile.css";
// export default class Profile extends Component {
//   constructor(props) {
//     super();
//   }
//   render() {
//     return (
//       <div className="container-profile">
//         <form>
//           <label>
//             Wave form
//             <select name="wave_form">
//               <option value="" selected="">
//                 Select wave form
//               </option>
//               <option value="Fat" selected="Fat">
//                 Fat
//               </option>
//               <option value="Hollow" selected="Hollow">
//                 Hollow
//               </option>
//             </select>
//           </label>

//           <label>
//             Wave height
//             {/* <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIwNy41NzcgMjA3LjU3NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjA3LjU3NyAyMDcuNTc3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cG9seWdvbiBwb2ludHM9IjEwNS45MzQsMTk5LjM3OCAxMDUuOTM0LDguMTk2IDEzOC44ODEsNDEuMTQ2IDE0MS45MDksMzguMTE1IDEwMy43OSwwIDY1LjY2OCwzOC4xMTUgICAgNjguNjkyLDQxLjE0NiAxMDEuNjQ3LDguMTk2IDEwMS42NDcsMTk5LjM3OCA2OC43LDE2Ni40MjcgNjUuNjY4LDE2OS40NTkgMTAzLjc5LDIwNy41NzcgMTQxLjkwOSwxNjkuNDU5IDEzOC44ODQsMTY2LjQyNyAgIiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" /> */}
//             <select>
//               <option value="" selected="">
//                 Wave height
//               </option>
//               <option value="0.5" selected="0.5">
//                 0.5 mtrs
//               </option>
//               <option value="1" selected="1">
//                 1 mtrs
//               </option>
//               <option value="1.5" selected="1.5">
//                 1.5 mtrs
//               </option>
//               <option value="2" selected="2">
//                 2 mtrs
//               </option>
//               <option value="3" selected="3">
//                 3 mtrs
//               </option>
//               <option value="4" selected="4">
//                 4 mtrs
//               </option>
//               <option value="5" selected="5">
//                 5 mtrs
//               </option>
//             </select>
//           </label>

//           <label>
//             Wave Direction
//             <select name="wave_direction">
//               <option value="" selected="">
//                 Select wave direction
//               </option>
//               <option value="Left" selected="Left">
//                 Left
//               </option>
//               <option value="A-Frame" selected="A-Frame">
//                 A-Frame
//               </option>
//               <option value="Right" selected="">
//                 Right
//               </option>
//             </select>
//           </label>

//           <fieldset>
//             <label>Country</label>
//             <input
//               type="text"
//               name="country"
//               value="country"
//               placeholder="Country..."
//             />
//           </fieldset>

//           <label>
//             Weather
//             <select name="weather">
//               <option value="" selected="">
//                 Select weather
//               </option>
//               <option value="Cold" selected="Cold">
//                 Cold
//               </option>
//               <option value="Mild" selected="Mild">
//                 Mild
//               </option>
//               <option value="Hot" selected="Hot">
//                 Hot
//               </option>
//             </select>
//           </label>

//           <label>
//             Break type
//             <select name="break_type">
//               <option value="" selected="">
//                 Select Break type
//               </option>
//               <option value="Beach break" selected="Beach break">
//                 Beach break
//               </option>
//               <option value="Point break" selected="Point break">
//                 Point break
//               </option>
//               <option value="Reef break" selected="Reef break">
//                 Reef break
//               </option>
//               <option value="Rivermouth break" selected="Rivermouth break">
//                 Rivermouth break
//               </option>
//             </select>
//           </label>

//           <label>
//             Level
//             <select name="level">
//               <option value="" selected="">
//                 Select level
//               </option>
//               <option value="Beginner" selected="Beginner">
//                 Beginner
//               </option>
//               <option value="Intermediate" selected="Intermediate">
//                 Intermediate
//               </option>
//               <option value="Advanced" selected="Advanced">
//                 Advanced
//               </option>
//             </select>
//           </label>

//           <label>
//             Vibe
//             <select name="vibe">
//               <option value="" selected="">
//                 Select vibe
//               </option>
//               <option value="Friendly" selected="Friendly">
//                 Friendly
//               </option>
//               <option value="Unfriendly" selected="Unfriendly">
//                 Unfriendly
//               </option>
//             </select>
//           </label>
//           <input type="button" value="Find your waves!" />
//         </form>
//       </div>
//     );
//   }
// }
