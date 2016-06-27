#### Media & static asset streaming module for node.js http(s) server

#### Compatibility
(Tested on IE 6+, FF, Chrome, Mobile Safari - IE/Edge - Chrome and Brave)

#### Installation
```npm install mediaserver```

#### Application Sample
Visit `sample` folder for sample application.

#### Sample Usage
```
var http = require('http'),
    ms = require('mediaserver');

http.createServer(function (req, res) {

    ms.pipe(req, res, "music.mp3");

}).listen(1337, '127.0.0.1');
```

from the client side

```
<audio controls>
    <source src="http://127.0.0.1:1337/" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

#### express
```
app.get('/music.mp3', function(req, res){
  ms.pipe(req, res, "/music.mp3");
});
```

#### API

`.noCache` (true/false) enable/disable caching `file stat` results (default enabled)

`.mediaTypes` Dictionary of media types and their corresponding media identifiers (i.e. "mp4" => "video/mpeg")

`.pipe(request, response, path, extension or media identifier)` pipe a file from file system to browser


#### LICENSE
MIT
