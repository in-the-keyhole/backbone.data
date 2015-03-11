// Dependencies
var Backbone = require('backbone');
var _ = require('underscore');

// Definition
var Field = function () {};

/**
 * An alias to use when defining the field in a model.
 *
 * @type {String}
 * @readOnly
 * @public
 */
Field.prototype.name = undefined;

/**
 * Extend the field prototype.
 *
 * @public
 * @param {Object} config
 * @returns {*}
 */
Field.extend = Backbone.Model.extend;

/**
 * Child classes are expected to override this method, and convert from a raw value to the parsed value.
 *
 * @public
 * @param {Mixed} value
 * @returns {Mixed}
 */
Field.prototype.parse = function (value) {
    throw 'Child classes are expected to override this method, and convert from a raw value to the parsed value.';
};

/**
 * Child classes are expected to override this method when generating the JSON to send to the server and return the serialized value.
 *
 * @public
 * @param {Mixed} value
 * @returns {Mixed}
 */
Field.prototype.toJSON = function (value) {
    throw 'Child classes are expected to override this method when generating the JSON to send to the server and return the serialized value.';
};

// Exports
    module.exports = Field;