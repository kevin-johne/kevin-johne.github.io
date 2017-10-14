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
                    route.base('#');
                    route.start( true );
                },

                setRoutes: function () {
                    var that = this;

                    route('/*/*', function(root, page) {
                        that.root = root;
                        fetcher.fetch(root + '/' + page + '.html').then(function (res) {
                            renderer.render(that.contentContainer, res);
                        });

                        that.triggerRouteUpdate();
                        that.notifyAnalitics();
                    });

                    route('/*', function (collection) {
                        that.root = collection;
                        fetcher.fetch(collection + '.html').then(function (res) {
                            renderer.render(that.contentContainer, res);
                        });

                        that.triggerRouteUpdate();
                        that.notifyAnalitics();
                    });

                },

                triggerRouteUpdate: function() {
                    event.trigger( 'route/update', [ this.getRoot() ] );
                },

                getRoot: function() {
                    return this.root;
                },

                notifyAnalitics: function() {
                    if( typeof(window.ga) === 'function') {
                        window.ga('send','pageview');
                    }
                }
            };
        }
    );
} )( this, this.define );
