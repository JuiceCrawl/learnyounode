var net = require('net');

var date = js_yyyy_mm_dd_hh_mm_ss();
var server = net.createServer(function (socket) {
  socket.end(date);
})
//add plus to covert to number but works wtihout "+" too.
server.listen(+process.argv[2]);

//date function for "YYYY-MM-DD hh:mm" format
function js_yyyy_mm_dd_hh_mm_ss () {
  now = new Date();
  year = "" + now.getFullYear();
  month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
  day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
  hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
  minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }

  return year + "-" + month + "-" + day + " " + hour + ":" + minute + '\n';
}

//or
// var net = require('net')

// function zeroFill(i) {
//  return (i < 10 ? '0' : '') + i
// }

// function now () {
//  var d = new Date()
//  return d.getFullYear() + '-'
//    + zeroFill(d.getMonth() + 1) + '-'
//    + zeroFill(d.getDate()) + ' '
//    + zeroFill(d.getHours()) + ':'
//    + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//  socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))