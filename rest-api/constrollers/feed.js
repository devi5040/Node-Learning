exports.getPosts = (req, res, next) => {
  res
    .status(200)
    .json({ post: [{ title: "First Post", content: "This is a post" }] });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "post created successfully",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
