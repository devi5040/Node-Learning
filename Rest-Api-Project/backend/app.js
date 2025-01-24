const express = require("express");
const feedRoute = require("./routes/feed");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoute);
mongoose
  .connect(
    "mongodb+srv://user:dvUO1PWtcouK9rgQ@cluster0.h33qo.mongodb.net/messages?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(8080))
  .catch((err) => console.log("error:", err));
