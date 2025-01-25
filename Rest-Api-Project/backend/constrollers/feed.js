const { validationResult } = require("express-validator");
const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: 12345,
        title: "First Post",
        content: "This is a post",
        imageUrl: "images/nature.jpeg",
        creator: {
          name: "hell",
        },
        createdAt: new Date().toISOString(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is invalid",
      errors: error.array(),
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    creator: {
      name: "devi",
    },
    imageUrl: "images/nature.jpeg",
  });
  post
    .save()
    .then((result) => {
      res.status(201).json({
        message: "post created successfully",
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
