const express = require('express');
const app = express(); // init server
const port = 3000;

app.get("/", (req, res) => {
    res.send("Samelkom");
});

app.listen(port);