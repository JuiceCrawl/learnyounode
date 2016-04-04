var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true),
      pathname = urlObj.pathname,
      time = urlObj.query.iso,
      result;

  if (pathname === '/api/unixtime') {
     result = getUnixTimestamp(time);
  }
  else if (pathname === '/api/parsetime') {
    result = getTimeObj(time);
  }

  if(result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }
  else {
    res.writeHead(404);
    res.end();
  }
  
}).listen(process.argv[2]);


function getUnixTimestamp(time) {
  return {
    unixtime: getTimestamp(time)
  };  
}

function getTimestamp(time) {
  return Date.parse(time);
}

function getTimeObj(time) {
  var date = new Date(getTimestamp(time));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

//or 
//var http = require('http')
// var url = require('url')

// function parsetime (time) {
//  return {
//    hour: time.getHours(),
//    minute: time.getMinutes(),
//    second: time.getSeconds()
//  }
// }

// function unixtime (time) {
//  return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//  var parsedUrl = url.parse(req.url, true)
//  var time = new Date(parsedUrl.query.iso)
//  var result

//  if (/^\/api\/parsetime/.test(req.url))
//    result = parsetime(time)
//  else if (/^\/api\/unixtime/.test(req.url))
//    result = unixtime(time)

//  if (result) {
//    res.writeHead(200, { 'Content-Type': 'application/json' })
//    res.end(JSON.stringify(result))
//  } else {
//    res.writeHead(404)
//    res.end()
//  }
// })
//server.listen(Number(process.argv[2]))

// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?iso=2016-04-04T21:44:46.112Z',
//   query: { iso: '2016-04-04T21:44:46.112Z' },
//   pathname: '/api/parsetime',
//   path: '/api/parsetime?iso=2016-04-04T21:44:46.112Z',
//   href: '/api/parsetime?iso=2016-04-04T21:44:46.112Z' }