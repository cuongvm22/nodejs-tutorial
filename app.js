var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var http = require('http');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const dbConfig = require('./configurations/database')
const auth = require('./middlewares/basicAuthentication')

var app = express();

// config express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// reg router
app.use('/', indexRouter);
app.use(auth.isAuth, usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// config db server
var server = http.createServer(app);
mongoose.connect(dbConfig.uri).then(
  () => {
    server.listen(3000);
    server.on('error', (error) => {
      console.log("db error:", error)
    });
    // server.on('listening', onListening);
  }
)
