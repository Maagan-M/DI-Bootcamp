const http = require('http');

const json = {
    "menu": {
        "firstCourse": "Vegetable Soup",
        "mainCourse": "Hamburger",
        "dessert": "Fruit salad"
    }
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(json));
});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening at localhost on port 3000');
});
