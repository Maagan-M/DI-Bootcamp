const express = require('express');
const app = express();
const PORT = 5003;

app.use(express.json());

const dataService = require('./data/dataService');

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
        console.log('Data successfully retrieved and sent.');
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
