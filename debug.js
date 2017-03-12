const = d = {};
const fs = require ('fs');
function debug (text) {
if (process.env.DEBUG) {
console.log(text);
fs.appendFile("./logs/logs.txt", text + '\n',
function(err) {
	if(err) {
	console.log(err);
	}
	})
	}
	}
	d.debug = debug;
	module.exports. = d;
	