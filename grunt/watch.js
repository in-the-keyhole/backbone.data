module.exports = {
    src: {
        files: [
            'src/**'
        ],
        tasks: [
            'build'
        ],
        options: {
            spawn: false
        }
    },
    test: {
        files: [
            'test/**'
        ],
        tasks: [
            'build'
        ],
        options: {
            spawn: false
        }
    }
};