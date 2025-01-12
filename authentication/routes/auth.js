const express = require("express");
const { check, body } = require("express-validator");
const User = require("../models/user");
const authController = require("../controllers/auth");

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .withMessage("Email ID is invalid")
      .normalizeEmail(),
    check("password")
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim()
      .withMessage("Invalid Password"),
  ],
  authController.postLogin
);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("entered email is not valid")
      .custom((value, { req }) => {
        // if (value === "test@test.com") {
        //   throw new Error("this email is forbidden");
        // }
        // return true;
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "Email id already exists, Please pick another email"
            );
          }
        });
      })
      .normalizeEmail(),
    body(
      "password",
      "Please enter a valid password with minimum 5 characters and alphanumeric"
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
    body("confirmPassword")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Password does not match");
        }
        return true;
      })
      .trim(),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);
router.post("/reset", authController.postReset);
router.get("/reset/:token", authController.getNewPassword);
router.post("/new-password", authController.postNewPassword);

module.exports = router;
