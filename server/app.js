require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");

const { DBURL } = process.env;
mongoose.Promise = Promise;
mongoose
  .connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Monguer ");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

var whitelist = ["http://localhost:3000", "https://your-wave.herokuapp.com/"];
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());

app.use(
  session({
    secret: "angular auth passport secret shh",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 2419200000
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

require("./passport")(app);

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.locals.title = "Server";

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.use((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/logout", function(req, res) {
  req.logOut();
  req.session.destroy(function(err) {
    res.redirect("/"); //Inside a callback… bulletproof!
  });
});

module.exports = app;
