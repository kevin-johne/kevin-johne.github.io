( function( window, define, require, undefined ) {
    'use strict';

    define( [], function() {
        return {

            /**
             * The extend helper
             *
             * This helper extends an existing object with new properties or override
             * properties specified.
             *
             * @param  {Object} baseObject   The object that has to be extended
             * @param  {Object} extendObject The object extending the base object
             * @return {Object}              The base object including extensions
             */
            extend: function( baseObject, extendObject ) {
                for ( var key in extendObject ) {
                    if ( extendObject.hasOwnProperty( key ) ) {
                        baseObject[ key ] = extendObject[ key ];
                    }
                }
                return baseObject;
            },

            /**
             * The once helper
             *
             * This helper creates a function, which can be called just once
             *
             * @param  {Function}   fn      The function to be wrapped
             * @param  {Object}     context The context in which the function should be called
             * @return {Function}           The once wrapper
             */
            once: function( fn, context ) {
                var result;

                return function() {
                    if ( fn ) {
                        result = fn.apply( context || this, arguments );
                        fn = null;
                    }

                    return result;
                };
            },

            /**
             * Map from a module given Class List to the Same name of Elements
             * if more than one element is found than it is a NodeList
             *
             * @param {object} classes
             * {
                    controlElement: 'control-element',
                    wave: 'wave'
               }
             * @param {Node} context
             *
             * @return {object} of nodes
             * {
             *      controlElement: Node,
             *      wave: NodeList
             * }
             */
            mapClassesToElements: function( classes, context ) {
                var elements = {};
                for ( var _class in classes ) {
                    elements[ _class ] = context.querySelectorAll( '.' + classes[ _class ] );
                    if ( elements[ _class ].length == 1 ) {
                        elements[ _class ] = elements[ _class ][ 0 ];
                    }
                }
                return elements;
            }
        };
    } );

}( this, this.define, this.require ) );
