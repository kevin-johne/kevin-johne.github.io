( function( window, define, undefined ) {
    define(
        [ 'fetcher', 'route', 'renderer' ],
        function( fetcher, route, renderer ) {
            return {
                ready: function() {
                    this.setRoutes();

                    this.contentContainer = document.querySelector( '.site-page' );
                    route.start( true );
                },

                setRoutes: function() {
                    var that = this;
                    route( '/', function() {
                        fetcher.fetch( 'projects.html' ).then( function( res ) {
                            renderer.render( that.contentContainer, res );
                        } );
                    } );

                    route( '/*', function( id ) {
                        fetcher.fetch( id + '.html' ).then( function( res ) {
                            renderer.render( that.contentContainer, res );
                        } );
                    } );
                }
            };
        }
    );
} )( this, this.define );
