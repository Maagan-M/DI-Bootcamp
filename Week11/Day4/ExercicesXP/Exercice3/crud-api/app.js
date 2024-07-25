const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();

const PORT = 5003;

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log('Data has been successfully retrieved and sent as a response.');
  } catch (error) {
    res.status(500).send('Error fetching posts');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
