
( function( window, define ) {
    define( [ 'soundcloud' ],
        function( sc ) {
            function SoundcloudManager() {
                this.streams = [];
                sc.initialize( {
                    'client_id': 'e74416cc321ec6ef77bccc2fb7b35216',
                    'redirect_uri': 'http://example.com/callback'
                } );

                //console.log( sc.get('/users/877972/favorites'));

                window.App.SoundcloudManager = this;
            }

            SoundcloudManager.prototype.addStream = function( stream ) {
                this.streams.push( stream );
            };

            SoundcloudManager.prototype.removeStreamByElement = function( id ) {
                var stream = this.getStreamByID( id );

                stream.destroy();
                this.streams.splice( id, 1 );
            };

            SoundcloudManager.prototype.createStream = function( trackID ) {
                return sc.stream( '/tracks/' + trackID ).then( function( player ) {
                    this.addStream( player );
                    return player;
                }.bind( this ) )
                .catch( function( error ) {
                    console.log( 'ERROR:' + error );
                } );
            };

            SoundcloudManager.prototype.playStream = function( newStream ) {
                var stream = this.getStreamByID( this.getId( newStream ) );

                if ( Boolean( !stream.state ) ) {
                    stream.play();
                } else {
                    stream.resume();
                }
            };

            SoundcloudManager.prototype.pauseStream = function( newStream ) {
                var stream = this.getStreamByID( this.getId( newStream ) );

                stream.pause();
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
                stream.play();
                stream.seek( position );
            };

            SoundcloudManager.prototype.getStreamByID = function( sID ) {
                var _stream;
                this.streams.some( function( stream ) {
                    if ( this.getId( stream ) === sID ) {
                        _stream = stream;
                    }
                }.bind( this ) );
                return _stream;
            };

            SoundcloudManager.prototype.getLastStreamID = function() {
                if ( this.streams.length > 0 ) {
                    return this.getId( this.streams[ this.streams.length - 1 ] );
                }
            };

            SoundcloudManager.prototype.getId = function( stream ) {
                return stream.options.soundId;
            };

            return new SoundcloudManager();
        }
    );
} )( this.window, this.define );
