var SevenSegment = require('ht16k33-sevensegment-display');


function Row(addr_1, addr_2, addr_3, bus) {
  this.disp_1 = new SevenSegment(addr_1, bus);
  this.disp_2 = new SevenSegment(addr_2, bus);
  this.disp_3 = new SevenSegment(addr_3, bus);
}

Row.prototype.writeTime = function(timestamp) {
  var date = new Date(timestamp * 1000);
  this.disp_1.writeDigit(4, date.getSeconds() % 10);
  this.disp_1.writeDigit(3, (date.getSeconds() - (date.getSeconds() % 10)) / 10);

  this.disp_1.writeDigit(1, date.getMinutes() % 10);
  this.disp_1.writeDigit(0, (date.getMinutes() - (date.getMinutes() % 10)) / 10);

  this.disp_2.writeDigit(4, date.getHours() % 10);
  this.disp_2.writeDigit(3, (date.getHours() - (date.getHours() % 10)) / 10);

  this.disp_2.writeDigit(1, date.getDate() % 10);
  this.disp_2.writeDigit(0, (date.getDate() - (date.getDate() % 10)) / 10);

  this.disp_3.writeDigit(4, date.getMonth() % 10);
  this.disp_3.writeDigit(4, (date.getMonth() - (date.getMonth() % 10)) / 10);

  this.disp_3.writeDigit(1, date.getFullYear() % 10);
  this.disp_3.writeDigit(0, (date.getFullYear() - (date.getFullYear() % 10)) / 10);
}

module.exports = Row;
