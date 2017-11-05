'use strict';

var timers = require('../models/timerModel');


exports.listTimers = function(req, res) {
  res.json([timers.timerList]);
};

exports.getTimerSettings = function(req, res) {
  res.json(timers.timerList[req.params.timerId]);
};

exports.setTimerSettings = function(req, res) {
	//TODO validate input
	timers.timerList[req.params.timerId] = req.body;
  res.json([req.params, req.body, timers.timerList[req.params.timerId]]);
};
