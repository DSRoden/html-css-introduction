'use strict';

var express = require('express');
var app = express(); //represents a physically running webserver application
var morgan = require('morgan');

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('index');
}); // first parameter is a path (one slash means homepage), second property is a callback function

app.get('/dogs', function(req, res){
  res.render('dogs');
}); // first parameter is a path (one slash means homepage), second property is a callback function

app.get('/cats', function(req, res){
  res.render('cats');
}); // first parameter is a path (one slash means homepage), second property is a callback function

app.get('/ninjas', function(req, res){
  res.render('ninjas');
}); // first parameter is a path (one slash means homepage), second property is a callback function

app.get('/pirates', function(req, res){
  res.render('pirates');
}); // first parameter is a path (one slash means homepage), second property is a callback function

app.listen(3000, function(){
  console.log('Express.js is listening...');
}); //telling express to listen for a request at a port
