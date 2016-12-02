
( function( window, define ) {
    define( [ 'soundcloud' ],
        function( sc ) {
            function SoundcloudManager() {
                this.streams = [];
                sc.initialize( {
                    'client_id': 'e74416cc321ec6ef77bccc2fb7b35216'
                } );

                window.App.SoundcloudManager = this;
            }

            SoundcloudManager.prototype.addStream = function(stream) {
                this.streams.push(stream);
            };

            SoundcloudManager.prototype.removeStreamByElement = function( id ) {
                var self = this;
                this.stream.forEach( function( stream, id ) {
                    if ( stream.sID !== id ) {
                        stream.destroy();
                        self.streams.splice( id, 1 );
                    }
                } );
            };

            SoundcloudManager.prototype.createStream = function( trackID, element, cb ) {
                sc.stream( trackID, {}, function( sound ) {
                    sound.domElement = element;
                    this.addStream( sound );
                    cb( sound );
                }.bind( this ) );
            };

            SoundcloudManager.prototype.playStream = function( newStream ) {
                var that = this;
                var stream = that.getStreamByID( newStream.sID );

                sc.whenStreamingReady( function() {
                    if ( Boolean( !stream.playState ) ) {
                        stream.play();
                    } else {
                        stream.resume();
                    }
                } );
            };

            SoundcloudManager.prototype.pauseStream = function( newStream ) {
                var stream = this.getStreamByID( newStream.sID );

                sc.whenStreamingReady( function() {
                    stream.pause();
                } );
            };

            SoundcloudManager.prototype.pauseStreams = function() {
                this.streams.forEach( function( stream ) {
                    stream.pause();
                } );
            };

            SoundcloudManager.prototype.stopStreams = function() {
                this.streams.forEach( function( stream ) {
                    stream.stop();
                } );
            };

            SoundcloudManager.prototype.setPosition = function( stream, position ) {
                stream.setPosition( position );
            };

            SoundcloudManager.prototype.getStreamByID = function( sID ) {
                var _stream;
                this.streams.some( function( stream ) {
                    if ( stream.sID === sID ) {
                        _stream = stream;
                    }
                } );
                return _stream;
            };

            SoundcloudManager.prototype.getLastStreamID = function() {
                if ( this.streams.length > 0 ) {
                    return this.streams[ this.streams.length - 1 ].sID;
                }
            };

            return new SoundcloudManager();
        }
    );
} )( this.window, this.define );
