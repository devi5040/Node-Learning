const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
require ('dotenv').config ();
const session = require ('express-session');
const passport = require ('passport');
const path = require ('path');
require ('./util/passport') (passport);

const app = express ();
const PORT = process.env.PORT || 5000;

app.use (session ({secret: 'secret', resave: false, saveUninitialized: false}));
app.use (passport.initialize ());
app.use (passport.session ());

app.use (bodyParser.urlencoded ({extended: true}));
const authRoutes = require ('./routes/auth');
app.use ('/', authRoutes);
app.use (express.static (path.join (__dirname, 'public')));

mongoose
  .connect (process.env.MONGO_URI)
  .then (() => {
    app.listen (PORT, () => {
      console.log (`server started at port ${PORT}`);
    });
  })
  .catch (error => console.log (`Some error has occured::${error}`));
