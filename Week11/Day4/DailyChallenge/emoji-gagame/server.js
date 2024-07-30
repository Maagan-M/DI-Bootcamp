const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
];

let scores = {};

function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

function getOptions(correctName) {
    const options = [correctName];
    while (options.length < 4) {
        const randomEmoji = getRandomEmoji().name;
        if (!options.includes(randomEmoji)) {
            options.push(randomEmoji);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

app.get('/emoji', (req, res) => {
    const emoji = getRandomEmoji();
    const options = getOptions(emoji.name);
    res.json({ emoji: emoji.emoji, options });
});

app.post('/guess', (req, res) => {
    const { username, emojiName, guess } = req.body;
    if (!scores[username]) scores[username] = 0;

    if (emojiName === guess) {
        scores[username]++;
        res.json({ correct: true, score: scores[username] });
    } else {
        res.json({ correct: false, score: scores[username] });
    }
});

app.get('/leaderboard', (req, res) => {
    const sortedScores = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .map(([username, score]) => ({ username, score }));
    res.json(sortedScores);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
