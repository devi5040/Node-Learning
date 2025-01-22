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
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "post created successfully",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: {
        name: "devi",
      },
      createdAt: new Date(),
    },
  });
};
