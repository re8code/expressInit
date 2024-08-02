const express = require('express');

const PORT = 4000;

const app = express ();

app.get ('/:1st/:2nd', (req, res) => {
    res.send (req.params);
});

app.listen (PORT, () => {
    console.log (`Running on port ${PORT}`);
});