var Server = require('./server');
var Row = require('./display');

var row_1 = new Row(0x70, 0x71, 0x72, 1);
var row_2 = new Row(0x73, 0x74, 0x75, 1);
var server = new Server(3000);

var now = Math.floor(Date.now() / 1000);
var interval = setInterval( function() {
    row_1.writeTime(Math.floor(Date.now() / 1000) - now);
}, 200);

