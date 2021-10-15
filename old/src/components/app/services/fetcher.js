( function( window, define, undefined ) {
    define( [ 'config', 'fetch' ],
        function( config ) {
            return {
                fetch: function( url ) {
                    var header = {
                        'cache-control': 'max-age=86400'
                    };
                    if ( config.dev ) {
                        header = {
                            'cache-control': 'no-cache, no-store, must-revalidate',
                            'pragma': 'no-cache, no-store, must-revalidate'
                        };
                    }

                    return fetch( url, {
                        method: 'get',
                        headers: header
                    } ).then( function( res ) {
                        if ( this.validateRequest( res ) ) {
                            return res.text();
                        } else {
                            return this.error();
                        }

                    }.bind( this ) ).catch( function( res ) {
                        return this.error( res );
                    }.bind( this ) );
                },

                validateRequest: function( res ) {
                    return res.status !== '404';
                },

                error: function( error ) {
                    return this.fetch( 'error.html' );
                }
            };
        }
    );
} )( this, this.define );
