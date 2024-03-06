const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

// connexion à la DB
connectDB();

const app = express();

// Request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/webtoons", require("./routes/webtoon.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
