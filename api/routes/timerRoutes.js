'use strict';

module.exports = function(app) {
  var timer = require('../controllers/timerController');

  // todoList Routes
  app.route('/timers')
    .get(timer.listTimers);


  app.route('/timers/:timerId')
    .get(timer.getTimerSettings)
    .put(timer.setTimerSettings);
};
