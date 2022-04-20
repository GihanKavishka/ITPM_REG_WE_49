const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/food-routes");

const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/foods", router); // localhost:5000/foods



mongoose
  .connect(
    "mongodb+srv://itpm:1234@cluster0.8vdch.mongodb.net/foods?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
  

//Routes

