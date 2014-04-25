var fs = require('fs'),
	marked = require('marked'),
	opn = require('opn'),
	tempfile = require('tempfile');

module.exports = function(filename){
	var content = fs.readFileSync(filename, 'utf-8'),
		temp = tempfile('.html');

	content = marked(content);
	fs.writeFileSync(temp, content);
	opn(temp);
};
