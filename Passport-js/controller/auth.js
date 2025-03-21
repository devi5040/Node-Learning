const Auth = require ('../models/auth');
const path = require ('path');
const bcrypt = require ('bcryptjs');
const passport = require ('passport');

exports.getRegisterPage = (req, res, next) => {
  res.sendFile (path.join (__dirname, '..', 'public', 'register.html'));
};

exports.getLoginPage = (req, res, next) => {
  res.sendFile (path.join (__dirname, '..', 'public', 'login.html'));
};
exports.getHomePage = (req, res, next) => {
  res.sendFile (path.join (__dirname, '..', 'public', 'index.html'));
};

exports.addUser = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    const existingAuth = await Auth.findOne ({email});
    if (existingAuth) {
      console.log ('User already exists with email ' + email);
      return res.redirect ('/register');
    }
    const hashedPassword = await bcrypt.hash (password, 12);
    const newUser = new Auth ({email, password: hashedPassword});
    await newUser.save ();
    res.redirect ('/login');
  } catch (error) {
    console.log ('Error:', error);
  }
};

exports.login = passport.authenticate ('local', {
  successRedirect: '/',
  failureRedirect: '/login',
});
