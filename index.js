var Server = require('./server');
var Row = require('./display');
var TimerModel = require('./api/models/timerModel');

var row_1 = new Row(0x70, 0x71, 0x72, 1);
var row_2 = new Row(0x73, 0x74, 0x75, 1);
var server = new Server(3000);


function timeDiff(config) {
  var now = Math.floor(Date.now() / 1000);
  if (config.mode == 'upfrom') {
    return now - config.startAt;
  } else if (config.mode == 'downto') {
    return config.startAt - now;
  } else {
    return 0;
  }
};

var interval = setInterval( function() {
    row_1.writeTime(timeDiff(TimerModel.timerList[0]));
}, 200);

