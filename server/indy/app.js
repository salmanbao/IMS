const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const config = require('./config');
const indyHandler = require('./indy/src/handler')({ defaultHandlers: true, eventHandlers: [] }); // () executes the function so that we can potentially have multiple indy handlers;
const indexRouter = require('./ui/routes/index');
const apiRouter = require('./ui/routes/api');

const app = express();

app.options('*', cors());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.post('/indy', indyHandler.middleware);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
