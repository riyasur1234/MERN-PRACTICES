const express = require('express');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const notes =[]

// Basic route to test the server
app.post('/notes', (req, res) => {
    console.log(req.body)
})

module.exports = app
