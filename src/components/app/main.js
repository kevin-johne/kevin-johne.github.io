( function( window, define, require, undefined ) {

    require.config( {
        enforceDefine: false,
        optimize: 'uglify2',
        waitSeconds: 0,

        paths: {

            // Config will be switched on build
            config:             'config/development',

            // App
            vendor:             'vendor',
            utils:              'utils',
            services:           'services',

            // Components
            components:         '../',
            modules:            '../modules',
            patterns:            '../patterns',
            site:               '../site',

            // Plugins
            load:               'vendor/plugins/load',
            tns:                'vendor/tiny-slider',
            route:              'vendor/amd.route',
            renderer:           'services/renderer',
            fetcher:            'services/fetcher',
            router:             'services/router',

            //Polyfills
            fetch:              'vendor/polyfills/fetch'

        },

        shim: {
            tns: {
                exports: 'tns'
            }
        }
    } );

    define( [
        'utils/core'
    ], function( App ) {

        // Scope for load plugin
        require.config( {
            globalScope: App
        } );

        require( [
            'config',
            'load!utils/breakpoints:init',
            'load!services/router:init',
            'load!services/imgloader:init',
            'load!services/url-transform:init'

            // Extend with global dependencies
        ], function( config ) {
            window.App = App;

            App.init();

        } );
    } );

}( this, this.define, this.require ) );
