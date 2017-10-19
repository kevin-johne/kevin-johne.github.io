var projectApp = {
    renderDefaultPage: function(render, options, files) {
        files.forEach(function( sources ) {
            sources.src.forEach(function(file) {
                var ext = sources.ext || '.html';
                var data = options.data;
                var dest = sources.dest;

                render( file, dest, ext, data );
            }, this);
        }, this);
    },

    renderProjectDetailPage: function(render, options) {
        var projects = options.data.projects;
        var projectIndex = 0;
        var project;
        for(; projectIndex < projects.length; projectIndex++) {
            project = projects[projectIndex];
            if(projectIndex !== 0 && projects[0] instanceof Object) {
                project.previous = projects[projectIndex - 1];
            }

            if(projectIndex !== projects.length -1) {
                project.next = projects[projectIndex + 1]
            }

            render(
                options.globals.basePath + 'site/dataPage/work-detail.njs',
                'dist/work/' + project.title.toLowerCase() + '.html',
                options.ext,
                project
            )
        }
    }
};

module.exports = projectApp;
