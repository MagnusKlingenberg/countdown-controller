'use strict';

exports.listTimers = function(req, res) {
  res.json([{"timerId": 1}, {"timerId": 2}]);
};

exports.getTimerSettings = function(req, res) {
  res.json(req.params);
};

exports.setTimerSettings = function(req, res) {
  res.json(req.params);
};
