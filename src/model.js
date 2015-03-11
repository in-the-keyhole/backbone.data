// Dependencies
var Backbone = require('backbone');

// Definition
var Model = Backbone.Model.extend({

    /**
     * Child classes can override this method to return an object of associations.
     *
     * @protected
     * @returns {Object} Key is the name of the field in the raw data to pull the association's data from, the value is the constructor for the model or collection in the association.
     */
    _getAssociations: function () {
        return {};
    },

    /**
     * Override the default backbone set, and replace the value if it's set to be the association.
     *
     * @param key
     * @param value
     */
    set: function (key, value) {
        if (typeof(key) === 'object') {
            for (k in key) {
                key[k] = this._checkSetKeyValue(k, key[k]);
            }
        }
        else if (typeof(key) === 'string') {
            value = this._checkSetKeyValue(key, value);
        }

        return Model.__super__.set.apply(this, arguments);
    },

    /**
     * For each key/value sent to set, check to see if the key is in the associations.
     * If it is, then replace it with the instance.
     * The return value should be used as the new value.
     *
     * @param {String} key
     * @param {Mixed} value
     * @private
     * @returns {Mixed}
     */
    _checkSetKeyValue: function (key, value) {
        var associations = this._getAssociations();
        var association;

        association = associations[key];

        if (association) {
            value = new association(value);
        }

        return value;
    },

    /**
     * Intercept the call for toJSON, and add on associations.
     */
    toJSON: function () {
        var json = Model.__super__.toJSON.apply(this, arguments);
        var associations = this._getAssociations();

        for (var key in associations) {
            json[key] = json[key].toJSON();
        }

        return json;
    }
});

// Exports
module.exports = Model;