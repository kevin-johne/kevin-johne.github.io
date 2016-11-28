/*
$( document ).ready( function() {
} );

$( window ).load( function() {

    if ( document.querySelector( '.site-landing' ) ) {
        return;
    }

    var body = $( 'body' );
    var link = $( '.stretch[data-text=\'Web\']:first' );

    body.animate( {
        scrollTop: body.offset().top
    }, function() {
        window.addEventListener( 'scroll', animateLanding );
    } );

    var animateLanding = function( event ) {
        fakeLogo.unbind( 'click' );
        scrollBtn.unbind( 'click' );
        scrollBtn.parent().empty();
        window.removeEventListener( 'scroll', animateLanding );
        $( 'html,body' ).animate( {
            scrollTop: body.offset().top
        } );
        var _url = link.parent().attr( 'href' );
        event.preventDefault();
        $( '.site-landing' ).toggleClass( 'shrink' );
        window.history.pushState(
          { url: _url },
          document.title,
          _url
        );
        $( this ).unbind( 'click' );

        setTimeout( function() {
              $( realLogo ).css( 'opacity', 1 );
              $( '.site-landing' ).empty();
          },
          3000 );
    };

    var realLogo = $( '.site-header .logo svg' );
    var fakeLogo = $( '.site-logo' );
    var scrollBtn = $( '.scroll-down i' );
    realLogo.css( 'opacity', 0 );

    link.parent().addClass( 'current' );

    fakeLogo.bind( 'click', animateLanding );
    scrollBtn.bind( 'click', animateLanding );
} );*/

( function( window, define, require, undefined ) {
    'use strict';

    define( [ 'jquery' ],
      function($) {

        return {
            ready: function( element, options ) {
                var link;
                
                this.link = document.querySelector( '.stretch' );
                this.realLogo = element.querySelector( '.site-header .logo svg' );
                this.fakeLogo = element.querySelector( '.site-logo' );
                this.fakeLogoSVG = element.querySelector( '.site-logo svg' );
                this.showLater = element.querySelectorAll( '.show-later' );
                this.scrollBtn = element.querySelector( '.scroll-down i' );
                this.sideLanding = element;
                
                this.fakeLogoSVG.style.opacity = 1;
                for( link of this.showLater ) {
                    link.classList.add('deactivate');
                }
            },

            events: function( element, options ) {
                window.addEventListener( 'scroll', this.animateLanding.bind( this ) );
            },

            animateLanding: function( event ) {
                event.preventDefault();
                window.removeEventListener( 'scroll', this.animateLanding.bind( this ) );
                var _url = this.link.parentNode.attributes.href.value;

                this.fakeLogo.addEventListener( 'click', this.preventClick );
                this.scrollBtn.addEventListener( 'click', this.preventClick );
                this.scrollBtn.parentNode.removeChild( this.scrollBtn );


                $( 'html,body' ).animate( {
                    scrollTop: document.body.getBoundingClientRect().bottom
                } );

                this.sideLanding.classList.toggle( 'shrink' );
                window.history.pushState(
                  { url: _url },
                  document.title,
                  _url
                );
                $( this ).unbind( 'click' );

                setTimeout(
                  function() {
                      this.realLogo.style.opacity = 1;
                      this.sideLanding.parentNode.removeChild( this.sideLanding );
                  }.bind( this ),
                  3000
                );
            },

            preventClick: function( event ) {
                event.preventDefault();
            }
        };
    } );

}( this, this.define, this.require ) );
