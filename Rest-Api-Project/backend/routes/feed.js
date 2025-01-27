const express = require("express");
const feedController = require("../constrollers/feed");
const router = express.Router();
const { check } = require("express-validator");

const isAuth = require("../middleware/is-auth");

router.get("/posts", isAuth, feedController.getPosts);
//validation for post request is added
router.post(
  "/post",
  isAuth,
  [
    check("title").trim().isLength({ min: 5 }),
    check("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

router.get("/post/:postId", isAuth, feedController.getPost);

router.put(
  "/post/:postId",
  isAuth,
  [
    check("title").trim().isLength({ min: 5 }),
    check("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);

router.delete("/post/:postId", isAuth, feedController.deletePost);

router.get("/user-status", isAuth, feedController.getUserStatus);

router.put("/update-status", isAuth, feedController.updateStatus);

module.exports = router;
