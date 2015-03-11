describe('model', function () {
    // Example models
    var Head = Backbone.Model.extend();

    var Person = Backbone.Data.Model.extend({
        _getAssociations: function () {
            var associations = {};

            associations.head = Head;

            return associations;
        }
    });

    // Specs
    it('association exists', function () {
        var person = new Person();

        expect(person.get('head')).toBe(undefined);

        var personWithHead = new Person({
            head: {}
        });

        expect(personWithHead.get('head')).not.toBe(undefined);
    });

    it('toJSON returns data', function () {
        var personWithHead = new Person({
            head: {}
        });
        var json = personWithHead.toJSON();

        expect(json.head).toEqual(personWithHead.get('head').toJSON());
    });
});