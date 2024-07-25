const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
];

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).send('Title and content are required');
  }
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title, content } = req.body;
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).send('Post not found');
  }
  if (!title || !content) {
    return res.status(400).send('Title and content are required');
  }
  posts[index] = { id, title, content };
  res.status(200).json(posts[index]);
});

app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).send('Post not found');
  }
  posts.splice(index, 1);
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
