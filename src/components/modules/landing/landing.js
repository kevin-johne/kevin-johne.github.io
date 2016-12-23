( function( window, define ) {
    define(
        [ 'utils/helper', 'scrollMagic' ],
        function( helper, sMagic ) {
            return {
                classes: {
                    logoHolder: 'site-logo-holder',
                    logo: 'landing-logo',
                    aboutHolder: 'what-i-am-holder',
                    buttonHolder: 'button-holder',
                    scrollDown: 'scroll-down'
                },

                default: function() {
                    return {

                    };
                },

                ready: function( element, options ) {
                    this.options = helper.extend( this.default, options );
                    this.element = element;
                    this.elements = helper.mapClassesToElements( this.classes, element );

                    this.controller = new sMagic.Controller();

                    // create a scene
                    this.scene = new sMagic.Scene( {
                        duration: '100%',
                        offset: 0
                    } ).addTo( this.controller );
                },

                events: function( element, options ) {
                    var that = this;
                    this.scene.on( 'progress', function( event ) {
                        that.animateLogo( event.progress );
                        that.animateOpacity( event.progress );
                        that.animateHeight( event.progress );
                    } );
                },

                animateLogo: function( progress ) {
                    progress = progress * 1.5; // make the animation faster
                    var holder = this.elements.logoHolder;
                    var logo = this.elements.logo;
                    holder.style.height = this.linearTransition( 50, 100, progress ) + 'vh';
                    holder.style.top = this.linearTransition( 0, 145, progress ) + 'px';
                    logo.style.width = this.linearTransition( 300, 140, progress ) + 'px';

                },

                animateHeight: function( progress ) {
                    this.elements.aboutHolder.style.height = this.linearTransition( 20, 0, progress ) + 'vh';
                    this.elements.buttonHolder.style.height = this.linearTransition( 20, 0, progress ) + 'vh';
                    this.elements.scrollDown.style.height = this.linearTransition( 10, 0, progress ) + 'vh';
                },

                animateOpacity: function( progress ) {
                    var fadeinOutElements = [
                        this.elements.aboutHolder,
                        this.elements.buttonHolder,
                        this.elements.scrollDown
                    ];
                    var opacity = this.linearTransition( 1, -1, progress );

                    fadeinOutElements.forEach( function( element ) {
                        element.style.opacity = opacity;
                    } );
                },

                linearTransition: function( from, to, progress ) {
                    if ( progress < 0 ) {
                        progress = 0;
                    }

                    if ( progress > 1 ) {
                        progress = 1;
                    }
                    return from + ( ( to - from ) * progress );
                }

            };
        }
    );
} )( this.window, this.define );
