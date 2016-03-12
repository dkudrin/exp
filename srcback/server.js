var express = require('express');
var app = express();

var cliLogger = function (req, res, next) {
  console.log(JSON.stringify(req));
  next();
};

app.use(cliLogger);

app.use(express.static('../binfront'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.C9_PORT, function () {
  console.log('Express server listening on port '+ process.env.C9_PORT +'!');
});