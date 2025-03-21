const express = require ('express');
const router = express.Router ();
const authController = require ('../controller/auth');

router.get ('/', authController.getHomePage);
router.get ('/register', authController.getRegisterPage);
router.get ('/login', authController.getLoginPage);
router.post ('/add-user', authController.addUser);
router.post ('/login', authController.login);

module.exports = router;
