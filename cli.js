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
	return [args[2]];
});
