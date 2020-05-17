var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tmpRouter = require('./routes/temperature');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3075,
    bodyParser = require('body-parser');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/temperature', tmpRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// catch 404 and forward to error handler

app.listen(port);

console.log('menezes-service API Server started on: ', port);
