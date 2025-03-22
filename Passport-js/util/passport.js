const LocalStrategy = require ('passport-local').Strategy;
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const FacebookStrategy = require ('passport-facebook').Strategy;
const bcrypt = require ('bcryptjs');
const Auth = require ('../models/auth');

module.exports = function (passport) {
  passport.use (
    new LocalStrategy (
      {usernameField: 'email'},
      async (email, password, done) => {
        try {
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

  // google auth
  passport.use (
    new GoogleStrategy (
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await Auth.findOne ({googleId: profile.id});
          if (!user) {
            user = new Auth ({
              googleId: profile.id,
              email: profile.emails[0].value,
              name: profile.displayName,
              avatar: profile.photos[0].value,
            });
            await user.save ();
          }
          return done (null, user);
        } catch (error) {
          return done (error, null);
        }
      }
    )
  );

  //Facebook auth
  passport.use (
    new FacebookStrategy (
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'emails'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await Auth.findOne ({facebookId: profile.id});
          if (!user) {
            user = new Auth ({
              facebookId: profile.id,
              email:profile.emails?profile.emails[0]?.value:null,
              name:profile.displayName
            });
            await user.save()
          }
          return done(null,user)
        } catch (error) {
          return done(error)
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
