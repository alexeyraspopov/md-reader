#!/usr/bin/env node
var md = require('./index'),
	clify = require('clify'),
	multiline = require('multiline');

clify(md, {
	version: require('./package').version,
	help: multiline.stripIndent(function(){/*
		Usage:
		  $ md <filename>

		Example:
		  $ md readme.md
	*/})
}, function(args){
	var path = require('path');

	return [path.join(process.cwd(), args[0])];
});
