var Server = require('./server');
var Row = require('./display');
var TimerModel = require('./api/models/timerModel');

var row_0 = new Row(0x70, 0x71, 0x72, 1);
var row_1 = new Row(0x73, 0x74, 0x75, 1);
var server = new Server(3000);


function displayConfig(config, row) {
  var now = Math.floor(Date.now() / 1000);
  if (config.mode == 'upfrom') {
    row.writeTimeDiff(now - config.startAt);
  } else if (config.mode == 'downto') {
    row.writeTimeDiff(config.startAt - now);
  } else if (config.mode == 'static') {
    row.writeTime(config.startAt);
  } else {
    row.writeTime(now);
  }
};

var interval = setInterval( function() {
    displayConfig(TimerModel.timerList[0], row_0);
    displayConfig(TimerModel.timerList[1], row_1);
}, 200);

