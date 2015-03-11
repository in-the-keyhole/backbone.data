describe('field string', function () {
    it('name', function () {
        var field = new Backbone.Data.Field.String();

        expect(field.name).toBe('string');
    });
});