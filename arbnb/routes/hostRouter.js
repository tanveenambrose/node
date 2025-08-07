const path = require('path');

const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');

hostRouter.use(express.urlencoded());

hostRouter.get("/add-home",(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-home.html'));
});

hostRouter.post("/add-home",(req, res, next) => {
    console.log(req.body);
    res.send(`
        <h3>Your Home is Registered Successfully</h3>
        <a href="/">Go to Home</a>
        `);
});


module.exports = hostRouter;