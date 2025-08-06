const express = require('express');
const userRouter = express.Router();

userRouter.get("/",(req, res, next) => {
    res.send(`
        <h3>Welcome to Arbnb</h3>
        <a href="/add-home">Add Home</a> 
        `);
});

module.exports = userRouter;