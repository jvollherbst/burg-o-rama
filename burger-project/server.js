'use strict'
var console = require('console');
var path           = require('path');
var express        = require('express');
var request        = require('request');
var logger         = require('morgan');
var methodOverride = require('method-override');
var bodyParser     = require('body-parser');
var db             = require('./db/pg');
var dotenv         = require ('dotenv');
var app            = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
dotenv.load();

// override with POST having ?_method=XXXX
/* e.g. If we need to make a PUT,
we'll POST to a url appended with ?_method=put */
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, './public/')))
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('pages/home.ejs');
});







app.use('/burgers', require(path.join(__dirname, '/routes/burgers')));
app.use('/burgers', require(path.join(__dirname, '/routes/meats')));
app.use('/burgers', require(path.join(__dirname, '/routes/toppings')));
app.use('/burgers', require(path.join(__dirname, '/routes/buns')));
app.use('/burgers', require(path.join(__dirname, '/routes/cheese')));

var port = process.env.PORT || 3000; //allows user to select their own port, does not fix a port
var server = app.listen(port);
