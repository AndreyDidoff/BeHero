// Requires
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
// Variables
const app = express();
// Execulting
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
