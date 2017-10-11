/**
 * Grunt copy plugin
 * https://github.com/gruntjs/grunt-contrib-copy/
 */

module.exports = {

    js: {
        expand: true,
        cwd: '<%= srcPath %>components/',
        src: [
            '**/*.js',
            '!**/*.spec.js'
        ],
        dest: '<%= distPath %>js/'
    },

    img: {
        expand: true,
        cwd: '<%= srcPath %>img/',
        src: [
            '**/*'
        ],
        dest: '<%= distPath %>img/'
    },

    files: {
        expand: true,
        cwd: '<%= srcPath %>files/',
        src: [
            '**/*'
        ],
        dest: '<%= distPath %>files/'
    },

    fonts: {
        expand: true,
        cwd: '<%= srcPath %>fonts/',
        src: [
            '**/*'
        ],
        dest: '<%= distPath %>fonts/'
    }

};
