const express = require("express");
const cors = require("cors");
require('dotenv').config();
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", resumeRoutes);

module.exports = app;
