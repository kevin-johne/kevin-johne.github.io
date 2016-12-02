( function(  window, define, undefined ) {
    define( [ ],
        function( loader ) {
            return {
                /**
                 *
                 * @param {Node} dom
                 * @param {string} newContent
                 */
                render: function( dom, newContent ) {
                    if ( dom && newContent ) {
                        dom.innerHTML = newContent;
                        window.App.loader.initModules( dom );
                    }
                }
            };
        }
    );
} )( this, this.define );
