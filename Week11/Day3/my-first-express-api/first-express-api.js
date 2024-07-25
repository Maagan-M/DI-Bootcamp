const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/api/greetings', (req, res) => {
    res.json({ message: 'Hello, welcome to my first API!' });
});
