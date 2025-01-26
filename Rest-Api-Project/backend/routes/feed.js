const express = require("express");
const feedController = require("../constrollers/feed");
const router = express.Router();
const { check } = require("express-validator");

router.get("/posts", feedController.getPosts);
//validation for post request is added
router.post(
  "/post",
  [
    check("title").trim().isLength({ min: 5 }),
    check("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

router.get("/post/:postId", feedController.getPost);

router.put(
  "/post/:postId",
  [
    check("title").trim().isLength({ min: 5 }),
    check("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);

router.delete("/post/:postId", feedController.deletePost);

module.exports = router;
