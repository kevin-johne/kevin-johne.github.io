/*
 * Grunt postcss plugin
 * https://github.com/nDmitry/grunt-postcss
 */
module.exports = function( grunt, options ) {
    return {
        autoprefixer: {
            options: {
                processors: [
                    require( 'autoprefixer' )( {
                        browsers: [ 'last 2 versions' ]
                    } )
                ]
            },
            src: '<%= distPath %>css/**/*.css'
        }
    };
};
