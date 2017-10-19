module.exports = function (grunt, options) {
    var ComponentsLoader = require('./nunjucks/components-loader.js');
    var renderController = require('./nunjucks/render-controller');

    return {
        options: {
            globals: {
                basePath: '<%= srcPath %>components/',
                templatePath: '<%= srcPath %>components/site/layout/',
                modulesPath: '<%= srcPath %>components/modules/',
                patternsPath: '<%= srcPath %>components/patterns/',
                appPath: '<%= srcPath %>components/app/',
                srcPath: '<%= srcPath %>',
                imgPath: '<%= srcPath %>img/',
                production: true
            },
            autoescape: false,
            iterator: function (render, options) {
                renderController.renderDefaultPage(render, options, this.files);
                renderController.renderProjectDetailPage(render, options);
            },
            loader: new ComponentsLoader(options.srcPath),
            ext: '.html',
            data: {
                email: 'hello@kevinjohne.me',
                projects: grunt.file.readJSON('src/data/projects.json')
            }
        },
        production: {
            files: [
                {
                    expand: true,
                    cwd: '<%= srcPath %>components/site/pages/',
                    src: '**/*.njs',
                    dest: '<%= distPath %>',
                    ext: '.html'
                }
            ]
        },
        development: {
            options: {
                globals: {
                    basePath: '<%= srcPath %>components/',
                    templatePath: '<%= srcPath %>components/site/layout/',
                    modulesPath: '<%= srcPath %>components/modules/',
                    patternsPath: '<%= srcPath %>components/patterns/',
                    appPath: '<%= srcPath %>components/app/',
                    srcPath: '<%= srcPath %>',
                    imgPath: '<%= srcPath %>img/',
                    production: false,
                    liveReloadPort: '<%= liveReloadPort %>'
                }
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= srcPath %>components/site/pages/',
                    src: '**/*.njs',
                    dest: '<%= distPath %>',
                    ext: '.html'
                }
            ]
        }
    };
};
