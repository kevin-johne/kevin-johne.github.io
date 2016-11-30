( function( window, define, undefined ) {
    'use strict';

    define(
        [
            'fetcher',
            'route',
            'renderer',
            'utils/event'
        ],
        function( fetcher, route, renderer, event ) {
            return {
                isGlobal: true,
                
                ready: function() {
                    this.setRoutes();

                    this.contentContainer = document.querySelector( '.site-page' );
                    route.start( true );
                },

                setRoutes: function() {
                    var that = this;
                    route( '/', function( collection ) {
                        that.root = 'projects';
                        fetcher.fetch( 'projects.html' ).then( function( res ) {
                            renderer.render( that.contentContainer, res );
                        } );

                        that.triggerRouteUpdate();
                    } );

                    route( '/*', function( collection ) {
                        that.root = collection;
                        fetcher.fetch( collection + '.html' ).then( function( res ) {
                            renderer.render( that.contentContainer, res );
                        } );

                        that.triggerRouteUpdate();
                    } );

                },

                triggerRouteUpdate: function() {
                    event.trigger( 'route/update', [this.getRoot()] );
                },

                getRoot: function() {
                    return this.root;
                }
            };
        }
    );
} )( this, this.define );
