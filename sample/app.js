var http = require('http'),
  ms = require('../index');

var path = require('path');

http.createServer(function (req, res) {

  var _path;
  if(req.url == "/" || req.url == "/index.html"){
    _path = "/index.html";
  } else if (req.url == "/birds.ogg") {
    _path = "/birds.ogg";
  } else {
    res.write("Target Not Found!" );
    res.end();
    return;
  }

  ms.pipe(req, res, path.join(__dirname, _path), path.extname(_path));

}).listen(1337, '127.0.0.1');