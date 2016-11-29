( function(  window, define, undefined ) {
    define( [],
        function() {
            return {
                /**
                 *
                 * @param {Node} dom
                 * @param {string} newContent
                 */
                render: function( dom, newContent ) {
                    if ( dom && newContent ) {
                        dom.innerHTML = newContent;
                    }
                }
            };
        }
    );
} )( this, this.define );
