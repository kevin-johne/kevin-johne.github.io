/**
 * Grunt JSHint plugin
 * https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = {
    frontend: {
        options: {
            'esnext': true
        },
        files: {
            src: [
              '<%= srcPath %>**/*.js'
            ]
        }
    },
    grunt: [
        '<%= gruntPath %>**/*.js',
        'Gruntfile.js'
    ],
    ci: {
        options: {
            force: true,
            reporter: 'jslint',
            reporterOutput: '<%= testResultPath %>jshint-lint-report.jslint.xml'
        },
        files: {
            src: [
                '<%= srcPath %>**/*.js',
                '<%= gruntPath %>**/*.js',
                'Gruntfile.js'
            ]
        }
    }
};
