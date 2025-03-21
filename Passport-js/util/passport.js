const LocalStrategy = require ('passport-local').Strategy;
const bcrypt = require ('bcryptjs');
const Auth = require ('../models/auth');

module.exports = function (passport) {
  passport.use (
    new LocalStrategy (
      {usernameField: 'email'},
      async (email, password, done) => {
        console.log ('passport');
        try {
          console.log ('Inside try');
          const userExists = await Auth.findOne ({email});
          if (!userExists)
            return done (null, false, {message: 'User not found'});

          // Compare password
          const isMatch = await bcrypt.compare (password, userExists.password);

          if (!isMatch)
            return done (null, false, {message: 'Incorrect password'});

          return done (null, userExists);
        } catch (error) {
          return done (error);
        }
      }
    )
  );

  passport.serializeUser ((user, done) => done (null, user.id));
  passport.deserializeUser (async (id, done) => {
    try {
      const user = await Auth.findById (id);
      done (null, user);
    } catch (error) {
      done (error);
    }
  });
};
