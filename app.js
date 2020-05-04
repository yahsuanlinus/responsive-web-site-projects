var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  console.log("request was made:" + req.url);
  res.writeHead(200, { "Content-type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
});

server.listen(300, "127.0.0.1");
console.log("yo dawgs, now listening to port 3000");
