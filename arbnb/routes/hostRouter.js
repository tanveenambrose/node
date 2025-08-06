const express = require('express');
const hostRouter = express.Router();

hostRouter.use(express.urlencoded());

hostRouter.get("/add-home",(req, res, next) => {
    res.send(`
        <h3>Register your home here :</h3>
        <form action="/add-home" method="POST">
        <input type="text" name="houseName" placeholder="Enter Your House Name" required>
        <input type="text" name="houseLocation" placeholder="Enter Your House Location" required>
        <input type="Submit" />
        </form>
        `);
});

hostRouter.post("/add-home",(req, res, next) => {
    console.log(req.body);
    res.send(`
        <h3>Your Home is Registered Successfully</h3>
        <a href="/">Go to Home</a>
        `);
});


module.exports = hostRouter;