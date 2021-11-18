const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// init bdd
const db = require("./app/models");
db.sequelize.sync(force = true);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));


// load media routes
require("./app/routes/media.routes")(app);


// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to My application."});
});

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
