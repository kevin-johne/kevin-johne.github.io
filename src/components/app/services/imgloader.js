( function( window, define, undefined ) {
    'use strict';

    define([],
        function() {
            return {
                isGlobal: true,

                ready: function() {
                    this.load();
                },

                load: function() {
                    var onLoadImage = function () {
                        this.removeAttribute('data-src');
                        this.classList.add('img--loaded');
                    };

                    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
                        img.setAttribute('src', img.getAttribute('data-src'));
                        img.onload = onLoadImage;
                    });
                }
            };
        }
    );
} )( this, this.define );
