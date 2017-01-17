( function( window, define ) {
    define(
        [ 'utils/helper', 'scrollMagic', 'TweenLite', 'ScrollTo' ],
        function( helper, sMagic, TweenLite ) {
            return {
                classes: {
                    logoHolder: 'site-logo-holder',
                    logo: 'landing-logo',
                    aboutHolder: 'what-i-am-holder',
                    buttonHolder: 'button-holder',
                    scrollDown: 'scroll-down',
                    showLater: 'show-later'
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

                    that.activateOpacity = false;

                    //fixed number of animation
                    //@TODO add class to svg an animate with css instead SMIL
                    setTimeout( function() {
                        that.activateOpacity = true;
                        that.animateOpacity( that.scene.progress() );
                        that.elements.showLater.forEach( function( element ) {
                            //remove showLater class after animation is finished
                            setTimeout( function() {
                                element.classList.remove( that.classes.showLater );
                            }, 1000 );
                            //console.log( element.style.transitionDuration );
                        } );
                    }, 1800 );

                    this.scene.on( 'progress', function( event ) {
                        that.animateLogo( event.progress );
                        if ( that.activateOpacity ) {
                            that.animateOpacity( event.progress );
                        }
                        that.animateHeight( event.progress );
                    } );

                    this.elements.scrollDown.addEventListener( 'click', this.scrollToHeader );
                    this.elements.logo.addEventListener( 'click', this.scrollToHeader );
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
                    var that = this;

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
                },

                scrollToHeader: function() {
                    TweenLite.to( window, 0.5, { scrollTo: window.innerHeight } );
                }

            };
        }
    );
} )( this.window, this.define );
