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
                        this.loadImages();
                        window.App.loader.initModules( dom );
                    }
                },

                loadImages: function() {
                    var onLoadImage = function() {
                        this.removeAttribute('data-src');
                    };

                    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
                        img.setAttribute('src', img.getAttribute('data-src'));
                        img.onload = onLoadImage;
                    });
                }
            };
        }
    );
} )( this, this.define );
