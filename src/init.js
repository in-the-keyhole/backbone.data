// Pre-dependencies
var Backbone = require('backbone');

// Definition
Backbone.Data = Backbone.Data || {};

if (window.Backbone) {
    window.Backbone.Data = Backbone.Data;
}

// Exports
module.exports = Backbone.Data;

// Dependency Exports
Backbone.Data.Model = require('./model');
Backbone.Data.Field = require('./field');
Backbone.Data.Field.String = require('./fields/string');