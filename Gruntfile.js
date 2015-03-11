// Dependencies
var loadGruntConfig = require('load-grunt-config');

// Definition
function initGrunt (grunt) {
    loadGruntConfig(grunt);

    grunt.loadTasks('grunt');

    grunt.registerTask('build', ['clean', 'browserify']);
    grunt.registerTask('default', ['build', 'express', 'watch']);
}

// Exports
module.exports = initGrunt;