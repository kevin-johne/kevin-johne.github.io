( function( window, define, undefined ) {
    define( [],
        function() {
            return {
                fetch: function( url ) {
                    return fetch( url, {
                        method: 'get'
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
                    console.log( 'this is a error #{error}' );
                }
            };
        }
    );
} )( this, this.define );
