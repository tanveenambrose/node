const path = require('path');
const express = require('express');
const contactRouter = express.Router();
const rootDir = require('../utils/pathUtil');

contactRouter.use(express.urlencoded());
contactRouter.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
})

const registeredHomes = [];

contactRouter.post('/contact-us', (req, res, next) => {
    registeredHomes.push({
        name: req.body.name,
        email: req.body.email,
    });
    res.sendFile(path.join(rootDir, 'views', 'contact-success.html'));
});

module.exports = contactRouter;
exports.registeredHomes = registeredHomes; 