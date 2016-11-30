(function (window, define, undefined) {

    define(
        ['jquery'],
        function ($) {
            return {

                ready: function (element, options) {
                    var self = this;

                    this.sm = new SoundcloudManager();
                    this.sm.init();

                    this._controlElement = $('.control-element');
                    this._wave = $('.wave');
                    this._stream = $('.stream');
                    this._progress = $('.progress');

                    this.trackID = $(this).attr('song_id');
                    this.sm.createStream(trackID, $(this), function () {
                        var streamID = sm.getLastStreamID();
                        $(self).attr('stream_id', streamID);
                        $(self).bind('click', control);
                        $(self).unbind('click', init);
                        $(self).trigger('click');
                    });
                    $(this).unbind('click', init);
                },

                events: function () {
                    _stream.bind('click', this.changePosition.bind(this));
                    _stream.bind('mousemove', this.tempChangePosition.bind(this));
                    _stream.bind('mouseleave', {percent: 0}, this.tempChangePosition.bind(this));
                    _controlElement.bind('click', init);
                    $('.album-art').bind('click', toggleAlbumFold);
                    $('.album-art-copy').bind('click', toggleAlbumFold);
                },

                control: function (element, options) {
                    var streamID = $(this).attr('stream_id');
                    if ($(this).hasClass('play')) {
                        this.sm.pauseStreams();
                        this.sm.playStream(streamID);

                        $('.pause').each(function () {
                            $(this).removeClass('pause');
                            $(this).removeClass('fa-pause');
                            $(this).addClass('play');
                            $(this).addClass('fa-play');
                        });
                        $(this).removeClass('play');
                        $(this).removeClass('fa-play');
                        $(this).addClass('pause');
                        $(this).addClass('fa-pause');
                    } else {
                        this.sm.pauseStream(streamID);
                        $(this).removeClass('pause');
                        $(this).removeClass('fa-pause');
                        $(this).addClass('play');
                        $(this).addClass('fa-play');
                    }
                },

                changePosition: function (event) {
                    _controlElement = $(this).parent().find('.control-element');
                    var streamID = _controlElement.attr('stream_id');
                    if (streamID) {
                        var xpos;
                        if (event.offsetX) {
                            xpos = event.pageX - $(this).offset().left;
                        } else {
                            xpos = event.offsetX;
                        }
                        var percent = 100 / $(this).width() * xpos;
                        var duration = $(this).find('.progress').attr('duration');
                        milliseconds = duration / 100 * percent;
                        var stream = sm.getStreamByID(streamID);
                        sm.setPosition(stream, milliseconds);
                    } else {
                        _controlElement.trigger('click');
                    }
                },

                tempChangePosition: function (event) {
                    var percent;
                    if (event.data && event.data.percent) {
                        percent = event.data.percent;
                    } else {
                        var xpos;
                        if (event.offsetX) {
                            xpos = event.pageX - $(this).offset().left;
                        } else {
                            xpos = event.offsetX;
                        }
                        percent = 100 / $(this).width() * xpos;

                    }
                    $(this).find('.progress_temp').css('width', percent + '%');
                },

                toggleAlbumFold: function () {
                    var albumArtCopy;
                    if ($(this).hasClass('.album-art-copy')) {
                        albumArtCopy = $(this).parent().find('.album-art-copy');
                    }

                    if (albumArtCopy && albumArtCopy.hasClass('fold')) {
                        albumArtCopy.removeClass('fold').addClass('unfold');
                    } else {
                        albumArtCopy.removeClass('unfold').addClass('fold');
                    }
                }
            };
        });
})(this.window, this.define, undefined);

var SoundcloudManager = function () {
    this.streams = [];

    this.init = function () {
        SC.initialize({
            'client_id': 'e74416cc321ec6ef77bccc2fb7b35216'
        });
    };

    this.addStream = function (stream) {
        this.streams.push(stream);
    };

    this.removeStreamByElement = function (element) {
        var self = this;
        this.stream.forEach(function (stream, id) {
            if (stream.sID !== element.id) {
                stream.destroy();
                self.streams.splice(id, 1);
            }
        });
    };

    this.createStream = function (trackID, element, cb) {
        var self = this;
        var options = {
            whileplaying: function () {
                var progressElement = $('#' + trackID).find('.progress');
                var percent = ( 100 / progressElement.attr('duration') * this.position );
                progressElement.css(
                    'width', percent + '%'
                );
            }
        };

        SC.stream(trackID, options, function (sound) {
            sound.domElement = element;
            self.addStream(sound);
            cb();
        });
    };

    this.playStream = function (sID) {
        this.streams.forEach(function (stream) {
            if (stream.sID === sID) {
                SC.whenStreamingReady(function () {
                    stream.play();
                });
            }
        });
    };

    this.pauseStream = function (sID) {
        this.streams.forEach(function (stream) {
            if (stream.sID === sID) {
                SC.whenStreamingReady(function () {
                    stream.pause();
                });
            }
        });
    };

    this.pauseStreams = function () {
        this.streams.forEach(function (stream) {
            stream.pause();
        });
    };

    this.stopStreams = function () {
        this.streams.forEach(function (stream) {
            stream.stop();
        });
    };

    this.setPosition = function (stream, position) {
        if (position >= 0 && position <= stream.durationEstimate) {
            stream.setPosition(position);
        }
    };

    this.getStreamByID = function (sID) {
        var _stream = '';
        this.streams.forEach(function (stream) {
            if (stream.sID === sID) {
                _stream = stream;
            }
        });
        return _stream;
    };

    this.getLastStreamID = function () {
        if (this.streams.length > 0) {
            return this.streams[this.streams.length - 1].sID;
        }
    };
};
