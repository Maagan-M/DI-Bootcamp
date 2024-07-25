const express = require('express');
const app = express();
const posts = require('./data.js');

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:postID', (req, res) => {
  const id = Number(req.params.postID);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.json(post);
});

app.get('/api/search', (req, res) => {
  const title = req.query.title.toLowerCase();
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(title)
  );

  if (filteredPosts.length < 1) {
    return res.status(200).send("No posts matched your search");
  }
  res.json(filteredPosts);
});
