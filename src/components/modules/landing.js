$( document ).ready( function() {
    $( '.site-logo svg' ).css( 'opacity', 1 );
} );

$( window ).load( function() {
    $( '.show-later' ).addClass( 'deactivate' );
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
} );
