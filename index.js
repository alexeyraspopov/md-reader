var fs = require('fs'),
	marked = require('marked'),
	opn = require('opn'),
	tempfile = require('tempfile'),
	path = require('path');

module.exports = function(filename){
	var content = fs.readFileSync(filename, { encoding: 'utf-8' }),
		temp = tempfile('.html'),
		stylesheet = '<link rel="stylesheet" href="' + path.join(__dirname, 'styles/github.css') + '">',
		base = '<base href="' + path.dirname(filename) + '/">';

	content = base + stylesheet + marked(content);
	fs.writeFileSync(temp, content);
	opn(temp);
};
