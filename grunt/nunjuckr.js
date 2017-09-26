/**
 * Grunt nunjuckr plugin
 * https://github.com/denkwerk/grunt-nunjuckr
 */

module.exports = function( grunt, options ) {
    var ComponentsLoader = require( './nunjucks/components-loader.js' );

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
            iterator: function( render, options ) {
                this.files.forEach(function( sources ) {
                    sources.src.forEach(function(file) {
                        var ext = sources.ext || options.ext || '.html';
                        var data = options.data;
                        var dest = sources.dest;

                        render( file, dest, ext, data );
                    }, this);
                }, this);

                options.data.articles.forEach(function( article ) {
                    render(
                        options.globals.basePath + 'site/dataPage/article.njs',
                        'dist/blog/' + article.title + '.html',
                        options.ext,
                        article
                    )
                }, this);

                options.data.projects.forEach(function( project ) {
                    render(
                        options.globals.basePath + 'site/dataPage/project.njs',
                        'dist/project/' + project.title + '.html',
                        options.ext,
                        project
                    )
                }, this);
            },
            loader: new ComponentsLoader( options.srcPath ),
            ext: '.html',
            data: {
                articles: grunt.file.readJSON('src/data/articles.json'),
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
