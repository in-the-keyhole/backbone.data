describe('field', function () {
    // Reusable Definitions
    var fieldName = 'field';
    var Field = Backbone.Data.Field.extend({
        name: fieldName
    });
    var field;

    // Before each
    beforeEach(function () {
        field = new Field();
    });

    // Specs
    it('name', function () {
        expect(field.name).toBe(fieldName);
    });

    it('parse', function () {
        try {
            field.parse();
        }
        catch (e) {
            expect(true).toBe(true);
        }
    });

    it('toJSON', function () {
        try {
            field.toJSON();
        }
        catch (e) {
            expect(true).toBe(true);
        }
    });
});