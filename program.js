var http = require('http')
var url = require('url');

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var date = new Date(parsedUrl.query.iso)
  var time;
  switch (parsedUrl.pathname) {
    case '/api/parsetime':
    time = parsetime(date)
    break;
    case '/api/unixtime':
    time = unixtime(date)
    break;
    default:
  }
  if (time) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(time))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(process.argv[2])

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}
