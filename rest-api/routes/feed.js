const express = require("express");
const feedController = require("../constrollers/feed");
const router = express.Router();

router.get("/posts", feedController.getPosts);
router.post("/posts", feedController.createPost);

module.exports = router;
