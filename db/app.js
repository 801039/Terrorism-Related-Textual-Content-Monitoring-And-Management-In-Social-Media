const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");


require("dotenv/config");

//const api = process.env.API_URL;
// Middleware =>
// when frontend send json object, we need something for backend
// to understand thi is an json object( we use express as the middleware)
app.use(express.json());
app.use(morgan("tiny"));

//Routers
const productsRouter = require('./routers/products');
app.use(cors())
app.use(`/`, productsRouter);

//cors =>provides a middleware for handling Cross-Origin Resource Sharing (CORS) in Node.js.


//Conection to the database is adding before starting the server(Good practice)
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connection is ready 🪐🪐🪐");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3005, () => {
  console.log("Server is running in htte://localhost:3005 🚀🚀🚀");
});
