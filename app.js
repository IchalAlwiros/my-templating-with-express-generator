var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config()

// Inital Router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use Router
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Setup Static File
// Bertujuan untuk menampilkan sebuah file
app.use('/assets',express.static('public/images'))

// Middleware Multer
const upload = require('./middleware/multer')
app.post('/upload',upload.single('photo'), (req, res)=>{
    return res.json({
        message : 'upload success'
    })
} )


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
  res.status(err.status || 500).json({
    error: {
      status : err.status, 
      message : err.message
    }
  });
  res.render('error');
});

module.exports = app;
