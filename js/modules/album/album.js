( function( window, define, undefined ) {
    define(
        [
            'jquery',
            'soundcloud',
            'services/soundcloud-manager',
            'utils/helper'
        ],
        function( $, sc, scm, helper ) {

            return {
                elements: {},
                classes: {
                    play: 'play',
                    wave: 'wave',
                    stream: 'stream',
                    progress: 'progress',
                    tempProgress: 'progress_temp',
                    coverCopy: 'album-art-copy',
                    cover: 'album-art'
                },

                defaults: function() {
                    return {
                    };
                },

                ready: function( element, options ) {
                    var streamRect;

                    this.options = helper.extend( this.defaults(), options );
                    this.elements = helper.mapClassesToElements( this.classes, element );

                    streamRect = this.elements.stream.getBoundingClientRect();
                    this.streamWidth = streamRect.right - streamRect.left;
                },

                events: function( element, options ) {
                    if ( this.options.id ) {
                        scm.createStream( this.options.id, element, this.onStreamCreated.bind( this ) );
                    }

                    this.elements.stream.addEventListener( 'mousemove', this.onHoverProgress.bind( this ) );

                    this.elements.stream.addEventListener( 'mouseleave', this.onLeaveProgress.bind( this ) );

                    this.elements.stream.addEventListener( 'click', this.onClickProgress.bind( this ) );

                    this.elements.play.addEventListener( 'click', this.onClickPlay.bind( this ) );

                    this.elements.coverCopy.addEventListener( 'click', this.toggleAlbumFold.bind( this ) );

                    this.elements.cover.addEventListener( 'click', this.toggleAlbumFold.bind( this ) );
                },

                onClickPlay: function() {
                    scm.playStream( this.stream );
                },

                onClickProgress: function( event ) {
                    var percentage = 100 / this.streamWidth * event.layerX;
                    this.changePosition( this.elements.progress, percentage );

                    percentage = event.layerX / this.streamWidth * this.options.duration;

                    scm.playStream( this.stream );
                    scm.setPosition( this.stream, percentage );
                },

                onHoverProgress: function( event ) {
                    var percentage = 100 / this.streamWidth * event.layerX;
                    this.changePosition( this.elements.tempProgress, percentage );
                },

                onLeaveProgress: function() {
                    this.changePosition( this.elements.tempProgress, 0 );
                },

                onStreamCreated: function( stream ) {
                    var that = this;
                    this.stream = stream;

                    this.stream._whileplaying = function( position ) {
                        var percentage = 100 / this.duration * position;
                        that.changePosition( that.elements.progress, percentage );
                    };
                },

                changePosition: function( element, position ) {
                    element.style.width = position + '%';
                },

                toggleAlbumFold: function() {
                    this.elements.coverCopy.classList.toggle( 'fold' );
                }
            };
        } );
} )( this.window, this.define, undefined );
