const express = require ('express');
const router = express.Router ();
const authController = require ('../controller/auth');

router.get ('/', authController.getHomePage);
router.get ('/register', authController.getRegisterPage);
router.get ('/login', authController.getLoginPage);
router.get ('/auth/google', authController.googleLogin);
router.get ('/auth/google/callback', authController.googleCallback);
router.post ('/add-user', authController.addUser);
router.post ('/login', authController.login);
router.get ('/auth/facebook', authController.facebookLogin);
router.get ('/auth/facebook/callback', authController.facebookCallback);

module.exports = router;
