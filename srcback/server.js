var express = require('express');
var colors = require('colors');
var app = express();

var cliLogger = function (req, res, next) {
  console.log(req.originalUrl.yellow);
  next();
};

app.use(cliLogger);

app.use(express.static('binfront'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.C9_PORT, function () {
  console.log('__dirname:' + __dirname);
  console.log('Express server listening on port '+ process.env.C9_PORT +'!');
});