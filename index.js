const express = require('express');
const server = express();

const welcomeRoute = require('./welcome');
const homeRoute = require('./home');
const travelRoute = require('./travel');

// app.get('/',function(req,res){
//     res.send('welcome to my API!')
// })

// app.get('/greetings',function(req,res){
//     res.send('Welcome, anonymus!')
// })
server.use('/',welcomeRoute);
server.use('/',homeRoute);
server.use('/travel',travelRoute);


server.listen(8000,function(){
console.log('server run successfull on 8000')
})