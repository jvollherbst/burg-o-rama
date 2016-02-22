'use strict'
var path           = require('path');
var express        = require('express');
var request        = require('request');
var logger         = require('morgan');
var bodyParser     = require('body-parser');
var db             = require('./db/pg');
var methodOverride = require('method-override');
var dotenv         = require ('dotenv');
var app            = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
dotenv.load();

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, './public/')))
app.set('views', './views')
app.set('view engine', 'ejs')








var port = process.env.PORT || 3000; //allows user to select their own port, does not fix a port
var server = app.listen(port);
