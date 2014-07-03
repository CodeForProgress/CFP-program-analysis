var http = require('http'),
    mongojs = require("mongojs");

var uri = "mongodb://aliya:Popcorn13@ds035348.mongolab.com:35348/cfp_program_evaluation",
    db = mongojs.connect(uri, ["badges_self_report"]);


http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Up and running.\n');
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
