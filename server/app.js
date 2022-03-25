const express = require('express');
const data = require('./data.json');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('New express server');
});

app.get('/data', (req, res) => {
    res.send(data)
})

module.exports = app;
