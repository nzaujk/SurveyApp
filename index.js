const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ 'Hi': 'Welcome to Opinion'})
});

const PORT = process.env.PORT;

app.listen(PORT);
