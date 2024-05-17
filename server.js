const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3306"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

const db = require("./app/models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
        require("./app/routes/product.routes.js")(app);
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

require("./app/routes/product.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});