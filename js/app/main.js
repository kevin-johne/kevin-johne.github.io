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
            text:               'vendor/plugins/text',
            ScrollTo:           'vendor/plugins/ScrollToPlugin.min',

            // Libraries
            lodash:             'vendor/lodash',
            soundcloud:         'vendor/soundcloud-sdk',
            scrollMagic:        'vendor/ScrollMagic',
            TweenLite:          'vendor/TweenLite.min',

            route:              'vendor/amd.route',
            renderer:           'services/renderer',
            fetcher:            'services/fetcher',
            router:             'services/router',

            // If it is not necessary to support IE8 its recommended to
            // use jQuery 2.X.X
            jquery:             'vendor/jquery-2.1.3',

            //Polyfills
            fetch:              'vendor/polyfills/fetch'

        },

        shim: {
            jquery: {
                exports:        '$'
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
            'load!services/router:init'

            // Extend with global dependencies
        ], function( config ) {

            if ( config.dev ) {

                // Allow access to App object via global scope in dev mode
                window.App = App;
            }

            App.init();

        } );
    } );

}( this, this.define, this.require ) );