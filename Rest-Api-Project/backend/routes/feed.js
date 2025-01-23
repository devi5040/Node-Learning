const express = require("express");
const feedController = require("../constrollers/feed");
const router = express.Router();
const body = require("express-validator");

router.get("/posts", feedController.getPosts);
//validation for post request is added
router.post(
  "/post",
  body("title").trim().isLength({ min: 5 }),
  body("content").trim().isLength({ min: 5 }),
  feedController.createPost
);

module.exports = router;
