const express = require('express')

const route = express.Router();

route.get('/home',function(req, res) {
    if (req.query.name) {
        res.send(`Home ${req.query.name}`);
    } else{
        res.send('Home Welcome')
    }
});

module.exports = route;