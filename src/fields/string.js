// Dependencies
var Field = require('../field');

// Definition
var String = Field.extend({
    name: 'string',

    parse: function (value) {
        return value + '';
    },

    toJSON: function (value) {
        return value;
    }
});

// Exports
module.exports = String;