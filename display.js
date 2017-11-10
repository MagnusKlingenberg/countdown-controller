var SevenSegment = require('ht16k33-sevensegment-display');


function Row(addr_1, addr_2, addr_3, bus) {
  this.disp_1 = new SevenSegment(addr_1, bus);
  this.disp_2 = new SevenSegment(addr_2, bus);
  this.disp_3 = new SevenSegment(addr_3, bus);
}

Row.prototype.writeTimeDiff = function(timestamp) {
  var negative = 0;
  if (timestamp < 0) {
    timestamp = Math.abs(timestamp);
    negative = 0xff;
  }
  var date = new Date(timestamp * 1000);
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours   = date.getHours();
  var days    = date.getDate() - 1;
  var months  = date.getMonth();
  var years   = date.getFullYear();

  this.disp_1.writeDigit(4, seconds % 10);
  this.disp_1.writeDigit(3, (seconds - (seconds % 10)) / 10);

  this.disp_1.writeDigit(1, minutes % 10);
  this.disp_1.writeDigit(0, (minutes - (minutes % 10)) / 10);

  this.disp_2.writeDigit(4, hours % 10);
  this.disp_2.writeDigit(3, (hours - (hours % 10)) / 10);

  this.disp_2.writeDigit(1, days % 10);
  this.disp_2.writeDigit(0, (days - (days % 10)) / 10);

  this.disp_3.writeDigit(4, months % 10);
  this.disp_3.writeDigit(3, (months - (months % 10)) / 10);

  this.disp_3.writeDigit(1, years % 10);
  this.disp_3.writeDigitRaw(0, negative & 0x40);
}

Row.prototype.writeTime = function(timestamp) {
  var date = new Date(timestamp * 1000);
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours   = date.getHours();
  var days    = date.getDate();
  var months  = date.getMonth() + 1 ;
  var years   = date.getFullYear();

  this.disp_1.writeDigit(4, seconds % 10);
  this.disp_1.writeDigit(3, (seconds - (seconds % 10)) / 10);

  this.disp_1.writeDigit(1, minutes % 10);
  this.disp_1.writeDigit(0, (minutes - (minutes % 10)) / 10);

  this.disp_2.writeDigit(4, hours % 10);
  this.disp_2.writeDigit(3, (hours - (hours % 10)) / 10);

  this.disp_2.writeDigit(1, days % 10);
  this.disp_2.writeDigit(0, (days - (days % 10)) / 10);

  this.disp_3.writeDigit(4, months % 10);
  this.disp_3.writeDigit(3, (months - (months % 10)) / 10);

  this.disp_3.writeDigit(1, years % 10);
  this.disp_3.writeDigit(0, ((years % 100) - (years %10)) / 10);
}

module.exports = Row;
