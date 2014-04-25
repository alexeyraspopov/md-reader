var fs = require('fs'),
	marked = require('marked'),
	opn = require('opn'),
	tempfile = require('tempfile'),
	path = require('path'),
	stylesheet = '<link rel="stylesheet" href="' + path.join(__dirname, 'styles/github.css') + '">';

module.exports = function(filename){
	var content = fs.readFileSync(filename, 'utf-8'),
		temp = tempfile('.html');

	content = stylesheet + marked(content);
	fs.writeFileSync(temp, content);
	opn(temp);
};
