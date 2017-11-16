var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function Server(port) {
  var app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());

  var routes = require('./api/routes/timerRoutes'); //importing route
  routes(app); //register the route


  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

  app.listen(port);
}

module.exports = Server;
