( function( window, define, undefined ) {
    define( [],
        function() {
            return {
                fetch: function( url ) {
                    var headers = new Headers();
                    headers.append('cache-control', ' no-cache, no-store, must-revalidate');
                    headers.append('pragma', 'no-cache, no-store, must-revalidate');

                    return fetch( url, {
                        method: 'get',
                        headers: headers
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
                    var valid = true;

                    if ( res.status != '200' ) {
                        valid = false;
                    }
                    return valid;
                },

                error: function( error ) {
                    return this.fetch( 'error.html' );
                }
            };
        }
    );
} )( this, this.define );
