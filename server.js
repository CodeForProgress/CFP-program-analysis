var http = require('http'),
    mongojs = require("mongojs"),
    jade = require('jade');

var uri = "mongodb://aliya:Popcorn13@ds035348.mongolab.com:35348/cfp_program_evaluation",
    db = mongojs.connect(uri, ["badges_self_report"]);

// var fn = jade.compile(jadeTemplate);
var htmlOutput = 'Badges self-report, July 7, 2014';


http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(htmlOutput);
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
