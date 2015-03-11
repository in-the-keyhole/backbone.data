// Dependencies
var express = require('express');

// Definition
var app = express();

app.use(express.static(__dirname + '/build'));
app.use('/dependencies', express.static(__dirname + '/node_modules'));
app.use('/test', express.static(__dirname + '/test'));

// Exports
module.exports = app;