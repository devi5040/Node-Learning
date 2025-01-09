const user = require("../models/user");

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie") === "true";

  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login Page",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader("Set-cookie", "loggedIn=true;HttpOnly"); //loggedIn=true; Max-Age=10; Secure;HttpOnly  //Secure=> Only creates cookie if it's a https page. HttpOnly will not allow client side js to access it
  user
    .findById("677de2d97d179b2025ce5d5b")
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
exports.postLogout = (req, res, next) => {
  // res.setHeader("Set-cookie", "loggedIn=true;HttpOnly"); //loggedIn=true; Max-Age=10; Secure;HttpOnly  //Secure=> Only creates cookie if it's a https page. HttpOnly will not allow client side js to access it
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
