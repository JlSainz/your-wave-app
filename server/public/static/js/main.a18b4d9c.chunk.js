(this["webpackJsonpyour-wave-app"]=this["webpackJsonpyour-wave-app"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),c=(a(49),a(8)),i=a(1),s=a(2),u=a(4),m=a(3),p=a(5),d=(a(50),a(14)),h=a(11),v=a(16),E=a.n(v),b=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,a,n,r){return t.service.post("/signup",{username:e,lastname:a,email:n,password:r}).then((function(e){return e.data}))},this.login=function(e,a){return t.service.post("/login",{email:e,password:a}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/currentUser").then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=E.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).API_URL,withCredentials:!0})},f=(a(68),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"search-form",id:"test"},r.a.createElement("input",{className:"input",type:"search",name:"search"})))}}]),t}(n.Component)),g=(a(69),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.state={loggedInUser:null},a.service=new b,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.loggedInUser?r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:"./images/logo.png",alt:"logo"})),r.a.createElement(f,{className:"search-bar"}),r.a.createElement("div",{className:"container-navbar"},r.a.createElement(h.b,{onClick:this.handleLogout},"LOG OUT"),r.a.createElement("img",{className:"usuario",src:"./images/usuario.svg",alt:"logo"}),r.a.createElement("p",null,this.props.loggedInUser?this.props.loggedInUser.username:null))):r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("img",{src:"./images/logo.png",alt:"logo"}),r.a.createElement(f,{className:"search-bar"}),r.a.createElement("div",{className:"container-navbar"},r.a.createElement(h.b,{to:"/signup"},"SIGN UP"),"|",r.a.createElement(h.b,{to:"/login"},"LOG IN")))}}]),t}(n.Component)),y=(a(74),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.lastname,r=a.state.email,l=a.state.password;a.service.signup(t,n,r,l).then((function(e){a.setState({username:"",lastname:"",email:"",password:""}),a.props.getUser(e.user)})).catch((function(e){a.setState({username:t,lastname:n,email:r,password:l,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(c.a)({},n,r))},a.state={username:"",lastname:"",email:"",password:""},a.service=new b,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("h3",null,"Create your account!"),r.a.createElement("fieldset",null,r.a.createElement("label",{className:"label"},"Username"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)},placeholder:"Name...",required:!0})),r.a.createElement("fieldset",null,r.a.createElement("label",{className:"label"},"Lastname"),r.a.createElement("input",{type:"text",name:"lastname",value:this.state.lastname,onChange:function(t){return e.handleChange(t)},placeholder:"Last name...",required:!0})),r.a.createElement("fieldset",null,r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)},placeholder:"Email...",required:!0})),r.a.createElement("fieldset",null,r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},placeholder:"Password...",required:!0})),r.a.createElement("div",{className:"fatherbtn"},r.a.createElement("input",{className:"button",type:"submit",value:"Sign up"}))),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component)),O=(a(75),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password;a.service.login(t,n).then((function(e){a.setState({email:t,password:n,error:!1}),a.props.getUser(e)})).catch((function(e){a.setState({email:t,password:n,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(c.a)({},n,r))},a.state={email:"",password:""},a.service=new b,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-login"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("h3",null,"Sign in!"),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)},placeholder:"email...",required:!0})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},placeholder:"Password",required:!0})),r.a.createElement("div",{className:"fatherbtn"},r.a.createElement("input",{className:"button",type:"submit",value:"Log in"}))),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component)),j=(a(76),a(17)),w=a.n(j),C=(a(96),function(e){var t=e.color,a=e.name;e.id;return r.a.createElement("div",null,r.a.createElement("div",{className:"pin bounce",style:{backgroundColor:t,cursor:"pointer"},title:a}),r.a.createElement("div",{className:"pulse"}))}),k=(a(41),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={center:{lng:a.props.coordinates[0],lat:a.props.coordinates[1]},zoom:10},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"map"},r.a.createElement(w.a,{bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_KEY},defaultCenter:this.state.center,defaultZoom:this.state.zoom},r.a.createElement(C,{lat:this.state.center.lat,lng:this.state.center.lng,name:"My Marker",color:"black"})))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getMeteo=function(){console.log("GETTING FORECAST...");var e=a.state.spot.location.coordinates[0],t=a.state.spot.location.coordinates[1];fetch("https://api.stormglass.io/v1/weather/point?lat=".concat(t,"&lng=").concat(e),{headers:{Authorization:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_KEY}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},a.state={spot:{}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_KEY);var e=this.state.spot;return r.a.createElement("div",{className:"spot"},r.a.createElement("h1",null,"Name: ",e.name),r.a.createElement("img",{src:e.imageURL,alt:"Photo"}),r.a.createElement("p",null,"Country: ",e.country),r.a.createElement("ul",null,r.a.createElement("li",null,"Nearby: ",e.nearby),r.a.createElement("li",null,"Consistence: ",e.consistence),r.a.createElement("li",null,"Commment: ",e.comment.text),r.a.createElement("li",null,"Rating: ",e.comment.rating),r.a.createElement("li",null,"Wave form: ",e.wave_form),r.a.createElement("li",null,"Wave direction: ",e.wave_direction),r.a.createElement("li",null,"Weather: ",e.weather),r.a.createElement("li",null,"Period: ",e.period),r.a.createElement("li",null,"Break type: ",e.break_type),r.a.createElement("li",null,"Level: ",e.level),r.a.createElement("li",null,"Vibe: ",e.vibe),r.a.createElement("li",null,"Lng: ",e.location.coordinates[0]),r.a.createElement("li",null,"Lat: ",e.location.coordinates[1])),r.a.createElement(k,{coordinates:e.location.coordinates}),r.a.createElement("button",{onClick:this.getMeteo},"Get Forecast!"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){t.spot=e.spot}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={spots:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-spot"},this.props.spots.map((function(e,t){return r.a.createElement(S,{key:t,spot:e})})))}}]),t}(n.Component),N=(a(97),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-profile"},r.a.createElement("form",null,r.a.createElement("label",null,"Wave form",r.a.createElement("select",{name:"wave_form"},r.a.createElement("option",{value:"",selected:""},"Select wave form"),r.a.createElement("option",{value:"Fat",selected:"Fat"},"Fat"),r.a.createElement("option",{value:"Hollow",selected:"Hollow"},"Hollow"))),r.a.createElement("label",null,"Wave height",r.a.createElement("select",null,r.a.createElement("option",{value:"",selected:""},"Wave height"),r.a.createElement("option",{value:"0.5",selected:"0.5"},"0.5 mtrs"),r.a.createElement("option",{value:"1",selected:"1"},"1 mtrs"),r.a.createElement("option",{value:"1.5",selected:"1.5"},"1.5 mtrs"),r.a.createElement("option",{value:"2",selected:"2"},"2 mtrs"),r.a.createElement("option",{value:"3",selected:"3"},"3 mtrs"),r.a.createElement("option",{value:"4",selected:"4"},"4 mtrs"),r.a.createElement("option",{value:"5",selected:"5"},"5 mtrs"))),r.a.createElement("label",null,"Wave Direction",r.a.createElement("select",{name:"wave_direction"},r.a.createElement("option",{value:"",selected:""},"Select wave direction"),r.a.createElement("option",{value:"Left",selected:"Left"},"Left"),r.a.createElement("option",{value:"A-Frame",selected:"A-Frame"},"A-Frame"),r.a.createElement("option",{value:"Right",selected:""},"Right"))),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Country"),r.a.createElement("input",{type:"text",name:"country",value:"country",placeholder:"Country..."})),r.a.createElement("label",null,"Weather",r.a.createElement("select",{name:"weather"},r.a.createElement("option",{value:"",selected:""},"Select weather"),r.a.createElement("option",{value:"Cold",selected:"Cold"},"Cold"),r.a.createElement("option",{value:"Mild",selected:"Mild"},"Mild"),r.a.createElement("option",{value:"Hot",selected:"Hot"},"Hot"))),r.a.createElement("label",null,"Break type",r.a.createElement("select",{name:"break_type"},r.a.createElement("option",{value:"",selected:""},"Select Break type"),r.a.createElement("option",{value:"Beach break",selected:"Beach break"},"Beach break"),r.a.createElement("option",{value:"Point break",selected:"Point break"},"Point break"),r.a.createElement("option",{value:"Reef break",selected:"Reef break"},"Reef break"),r.a.createElement("option",{value:"Rivermouth break",selected:"Rivermouth break"},"Rivermouth break"))),r.a.createElement("label",null,"Level",r.a.createElement("select",{name:"level"},r.a.createElement("option",{value:"",selected:""},"Select level"),r.a.createElement("option",{value:"Beginner",selected:"Beginner"},"Beginner"),r.a.createElement("option",{value:"Intermediate",selected:"Intermediate"},"Intermediate"),r.a.createElement("option",{value:"Advanced",selected:"Advanced"},"Advanced"))),r.a.createElement("label",null,"Vibe",r.a.createElement("select",{name:"vibe"},r.a.createElement("option",{value:"",selected:""},"Select vibe"),r.a.createElement("option",{value:"Friendly",selected:"Friendly"},"Friendly"),r.a.createElement("option",{value:"Unfriendly",selected:"Unfriendly"},"Unfriendly"))),r.a.createElement("input",{type:"button",value:"Find your waves!"})))}}]),t}(n.Component)),U=(a(98),function e(){var t=this;Object(i.a)(this,e),this.allSpots=function(){return t.service.get("/api/spots").then((function(e){return e.data}))},this.createSpots=function(e,a,n,r,l,o,c,i,s,u,m,p,d,h,v,E){return t.service.post("/api/spots/create",{name:e,location:a,nearby:n,rating:r,text:l,wave_form:o,wave_direction:c,country:i,weather:s,period:u,break_type:m,level:p,desired_height:d,vibe:h,consistence:v,imageURL:E}).then((function(e){return e.data}))},this.addPicture=function(e){var a=new FormData;return a.append("photo",e),t.service.post("/api/spots/create/photo",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data})).catch(t.errHandler)},this.service=E.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).API_URL,withCredentials:!0})}),_=a(18),L=a.n(_),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){Object(_.geocodeByAddress)(e).then((function(e){return Object(_.getLatLng)(e[0])})).then((function(e){return a.props.getCoordinates(e)})).catch((function(e){return console.error("Error",e)}))},a.state={address:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,l=e.loading;return r.a.createElement("div",null,r.a.createElement("input",t({placeholder:"Search Places ...",className:"location-search-input"})),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Loading..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",n(e,{className:t,style:a}),r.a.createElement("span",null,e.description))}))))}))}}]),t}(n.Component);a(103);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={lng:a.props.coordinates[0],lat:a.props.coordinates[1],zoom:11},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getCoordinates",value:function(e){var t=this;this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.state,{lng:e.lng,lat:e.lat}),(function(){t.props.getLocation(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"map"},r.a.createElement(R,{className:"location-search-input",getCoordinates:function(t){return e.getCoordinates(t)}}),r.a.createElement(w.a,{bootstrapURLKeys:{key:"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDUeQXCyJDlhOtCB8JwWAk8zCxpjk6k-jo&libraries=places"},center:this.state,defaultZoom:this.state.zoom},r.a.createElement(C,{lat:this.state.lng,lng:this.state.lat,name:"My Marker",color:"black"})))}}]),t}(n.Component);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).getLocation=function(t){var a={coordinates:[t.lng,t.lat],type:"Point"};e.setState(D({},e.state,{location:a}))},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state.name,n=e.state.location,r=e.state.nearby,l=e.state.rating,o=e.state.text,c=e.state.wave_form,i=e.state.wave_direction,s=e.state.country,u=e.state.weather,m=e.state.period,p=e.state.break_type,d=e.state.level,h=e.desired_height,v=e.state.vibe,E=e.state.consistence,b=e.state.imageURL;e.props.createSpots(a,n,r,l,o,c,i,s,u,m,p,d,h,v,E,b),e.setState({name:"",location:"",image:"",nearby:"",rating:"",text:"",wave_form:"",wave_direction:"",country:"",weather:"",period:"",break_type:"",level:"",desired_height:"",vibe:"",consistence:"",imageURL:""})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(c.a)({},n,r))},e.state={coordinates:[115.838236,-8.739984],name:"x",location:"",image:"",nearby:"x",rating:"3",text:"r",wave_form:"Fat",wave_direction:"A-Frame",country:"France",weather:"Hot",period:"13",break_type:"Beach break",level:"Advanced",vibe:"Friendly",consistence:"Yes",imageURL:""},e.service=new U,e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onPhotoChange",value:function(e){e.target.value;this.setState(D({},this.state,{image:e.target.files[0]}))}},{key:"upload",value:function(){var e=this;this.service.addPicture(this.state.image).then((function(t){e.setState(D({},e.state,{imageURL:t}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleFormSubmit(t,"image")}},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,placeholder:"Name...",required:!0,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Text"),r.a.createElement("input",{type:"text",name:"text",value:this.state.text,onChange:function(t){return e.handleChange(t)},placeholder:"Comment",required:!0})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Country"),r.a.createElement("input",{type:"text",name:"country",value:this.state.country,onChange:function(t){return e.handleChange(t)},placeholder:"Country...",required:!0})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Nearby"),r.a.createElement("input",{type:"text",name:"nearby",value:this.state.nearby,onChange:function(t){return e.handleChange(t)},placeholder:"Nearby...",required:!0})),r.a.createElement("label",null,"Consistence",r.a.createElement("select",{name:"consistence",onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"",selected:""===this.state.consistence},"Select consistence"),r.a.createElement("option",{value:"Yes",selected:"Yes"===this.state.consistence},"Yes"),r.a.createElement("option",{value:"No",selected:"No"===this.state.consistence},"No"))),r.a.createElement("label",null,"Wave Form",r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"wave_form"},r.a.createElement("option",{value:"",selected:""===this.state.wave_form},"Select wave form"),r.a.createElement("option",{value:"Fat",selected:"Fat"===this.state.wave_form},"Fat"),r.a.createElement("option",{value:"Hollow",selected:"Hollow"===this.state.wave_form},"Hollow"))),r.a.createElement("label",null,"Wave Direction",r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"wave_direction"}," ",r.a.createElement("option",{value:"",selected:""===this.state.wave_direction},"Select wave direction"),r.a.createElement("option",{value:"Left",selected:"Left"===this.state.wave_direction},"Left"),r.a.createElement("option",{value:"A-Frame",selected:"A-Frame"===this.state.wave_direction},"A-Frame"),r.a.createElement("option",{value:"Right",selected:"Right"===this.state.wave_direction},"Right"))),r.a.createElement("label",null,"Weather",r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"weather"},r.a.createElement("option",{value:"",selected:""===this.state.weather},"Select weather"),r.a.createElement("option",{value:"Cold",selected:"Cold"===this.state.weather},"Cold"),r.a.createElement("option",{value:"Mild",selected:"Mild"===this.state.weather},"Mild"),r.a.createElement("option",{value:"Hot",selected:"Hot"===this.state.weather},"Hot"))),r.a.createElement("label",null,"Period",r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"period"},r.a.createElement("option",{value:"",selected:""===this.state.period},"Select period"),r.a.createElement("option",{value:"10",selected:"10"===this.state.period},"10"),r.a.createElement("option",{value:"11",selected:"11"===this.state.period},"11"),r.a.createElement("option",{value:"12",selected:"12"===this.state.period},"12"),r.a.createElement("option",{value:"13",selected:"13"===this.state.period},"13"),r.a.createElement("option",{value:"14",selected:"14"===this.state.period},"14"),r.a.createElement("option",{value:"15",selected:"15"===this.state.period},"15"),r.a.createElement("option",{value:"16",selected:"16"===this.state.period},"16"),r.a.createElement("option",{value:"17",selected:"17"===this.state.period},"17"),r.a.createElement("option",{value:"18",selected:"18"===this.state.period},"18"),r.a.createElement("option",{value:"19",selected:"19"===this.state.period},"19"),r.a.createElement("option",{value:"20",selected:"20"===this.state.period},"20"),r.a.createElement("option",{value:"21",selected:"21"===this.state.period},"21"))),r.a.createElement("label",null,"Break type",r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"break_type"},r.a.createElement("option",{value:"",selected:""===this.state.break_type},"Select Break type"),r.a.createElement("option",{value:"Beach break",selected:"Beach break"===this.state.break_type},"Beach break"),r.a.createElement("option",{value:"Point break",selected:"Point break"===this.state.break_type},"Point break"),r.a.createElement("option",{value:"Reef break",selected:"Reef break"===this.state.break_type},"Reef break"),r.a.createElement("option",{value:"Rivermouth break",selected:"Rivermouth break"===this.state.break_type},"Rivermouth break"))),r.a.createElement("label",null,"Level",r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"level"},r.a.createElement("option",{value:"",selected:""===this.state.level},"Select level"),r.a.createElement("option",{value:"Beginner",selected:"Beginner"===this.state.level},"Beginner"),r.a.createElement("option",{value:"Intermediate",selected:"Intermediate"===this.state.level},"Intermediate"),r.a.createElement("option",{value:"Advanced",selected:"Advanced"===this.state.level},"Advanced"))),r.a.createElement("label",null,"Vibe",r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"vibe"},r.a.createElement("option",{value:"",selected:""===this.state.vibe},"Select vibe"),r.a.createElement("option",{value:"Friendly",selected:"Friendly"===this.state.vibe},"Friendly"),r.a.createElement("option",{value:"Unfriendly",selected:"Unfriendly"===this.state.vibe},"Unfriendly"))),r.a.createElement("label",null,"Rating",r.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"rating"},r.a.createElement("option",{value:"",selected:""===this.state.rating},"Rate!"),r.a.createElement("option",{value:"1",selected:"1"===this.state.rating},"1"),r.a.createElement("option",{value:"2",selected:"2"===this.state.rating},"2"),r.a.createElement("option",{value:"3",selected:"3"===this.state.rating},"3"),r.a.createElement("option",{value:"4",selected:"4"===this.state.rating},"4"),r.a.createElement("option",{value:"5",selected:"5"===this.state.rating},"5"))),r.a.createElement("input",{type:"button",value:"Create spot!",onClick:function(t){return e.handleFormSubmit(t)}}),r.a.createElement("label",null,"Upload photo"),this.state.imageURL&&r.a.createElement("img",{src:this.state.imageURL}),r.a.createElement("input",{type:"file",name:"photo",onChange:function(t){return e.onPhotoChange(t)}}),r.a.createElement("input",{type:"button",value:"Upload photo",onClick:function(){return e.upload()}}),r.a.createElement(I,{coordinates:this.state.coordinates,getLocation:this.getLocation})))}}]),t}(n.Component);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={spots:[]},e.spServices=new U,e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.spServices.allSpots().then((function(t){e.setState(H({},e.state,{spots:t.spots}))}))}},{key:"createNewSpot",value:function(e,t,a,n,r,l,o,c,i,s,u,m,p,d,h,v){var E=this;this.spServices.createSpots(e,t,a,n,r,l,o,c,i,s,u,m,p,d,h,v).then((function(e){E.setState(H({},E.state,{spots:e.allSpots}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x,{createSpots:function(t,a,n,r,l,o,c,i,s,u,m,p,d,h,v,E){return e.createNewSpot(t,a,n,r,l,o,c,i,s,u,m,p,d,h,v,E)}}),r.a.createElement(P,{spots:this.state.spots}))}}]),t}(n.Component);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then((function(){a.setState({loggedInUser:null})}))},a.state={loggedInUser:null,spots:[]},a.service=new b,a.fetchUser(),a.spServices=new U,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"componentDidMount",value:function(){var e=this;this.spServices.allSpots().then((function(t){e.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.state,{spots:t.spots}))}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{to:"/"}),r.a.createElement(g,{className:"App-header",loggedInUser:this.state.loggedInUser,logout:this.logout}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.b,{className:"links",to:"/create"},"Create spot!"),r.a.createElement(h.b,{className:"links",to:"/profile"},"Your wave"),r.a.createElement(P,{spots:e.state.spots}),r.a.createElement(d.b,{exact:!0,path:"/profile",render:function(){return r.a.createElement(N,null)}}))}}),r.a.createElement(d.b,{exact:!0,path:"/create",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{className:"links",to:"/profile"},"Your wave"),r.a.createElement(M,null))}}),r.a.createElement(d.b,{exact:!0,path:"/profile",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{className:"links",to:"/"},"Home"),r.a.createElement(N,null))}}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(y,{getUser:e.getUser})}}),r.a.createElement(d.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(O,{getUser:e.getUser})}})),r.a.createElement(P,{spots:this.state.spots})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,a){},44:function(e,t,a){e.exports=a(104)},49:function(e,t,a){},50:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.a18b4d9c.chunk.js.map