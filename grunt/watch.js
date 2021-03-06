/**
 * Grunt Watch plugin
 * https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = {
    options: {
        nospawn: false,
        livereload: '<%= liveReloadPort %>'
    },
    sass: {
        files: [
            '<%= srcPath %>**/*.scss'
        ],
        tasks: [
            'sass:development'
        ],
        options: {
            atBegin: true
        }
    },

    js: {
        files: [
            '<%= srcPath %>**/*.js'
        ],
        tasks: [
            'copy:js'
        ],
        options: {
            atBegin: true
        }
    },

    html: {
        files: [
            '<%= srcPath %>components/**/*.njs'
        ],
        tasks: [
            'nunjuckr:development'
        ],
        options: {
            atBegin: true
        }
    },

    img: {
        files: [
            '<%= srcPath %>img/**/*'
        ],
        tasks: [
            'copy:img',
            'nunjuckr:development'
        ],
        options: {
            atBegin: true
        }
    },

    data: {
        files: [
            '<%= srcPath %>data/**/*'
        ],
        tasks: [
            'nunjuckr:development'
        ],
        options: {
            atBegin: true
        }
    }

};
