const express = require('express')

const route = express.Router();

route.get('/', function(req,res){
    res.send('welcome to my API!')
})

route.get('/greetings', function(req,res){
    res.send('Welcome, anonymus!')
})

module.exports = route;