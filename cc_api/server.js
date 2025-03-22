const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
    res.send('Hello from CareConnect API!');
});

// Example POST route
app.post('/data', (req, res) => {
    console.log('Received:', req.body);
    res.json({ status: 'OK', received: req.body });
});

// Start server
app.listen(port, () => {
    console.log(`CareConnect API listening at http://localhost:${port}`);
});
