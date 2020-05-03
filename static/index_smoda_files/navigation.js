/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
    var container, mainMenu, button, menu, body, links, i, len;

    mainMenu = document.getElementById( 'site-navigation' );
    container = document.getElementById( 'side-navigation' );
    body = document.body;
    if ( ! container ) {
        return;
    }

    button = document.getElementById( 'nav-icon' );
    if ( 'undefined' === typeof button ) {
        return;
    }

    container.setAttribute( 'aria-expanded', 'false' );
    if ( -1 === container.className.indexOf( 'menu-wrap' ) ) {
        container.className += ' menu-wrap';
    }

    button.onclick = function() {
        if ( -1 !== container.className.indexOf( 'toggled' ) ) {
            container.className = container.className.replace( ' toggled', '' );
            mainMenu.className = mainMenu.className.replace( ' toggled', '' );
            body.className = body.className.replace( ' noscroll', '' );
            button.className = button.className.replace( ' open', '' );
            button.setAttribute( 'aria-expanded', 'false' );
        } else {
            body.className += ' noscroll';
            container.className += ' toggled';
            mainMenu.className += ' toggled';
            button.className += ' open';
            button.setAttribute( 'aria-expanded', 'true' );
        }
    };

} )();

(function($) {

    $(".lupa").on('click', function() {
        $(this).toggleClass('opensearch');
        $('.search-form').toggleClass('opensearch');
        if( $('#site-navigation').hasClass('toggled') ) {
            $('#site-navigation, #side-navigation').removeClass('toggled');
            $('#nav-icon').removeClass('open');
        }
        return false;
    });

    /**
     * Login box
     */
    $('.avatar').on('click', function(){

        if($('#site-navigation').hasClass('toggled')) {
            $('#site-navigation, #side-navigation').removeClass('toggled');
            $('#nav-icon').removeClass('open');
        }
        $('.search-form, .lupa').removeClass('opensearch');
        $(this).toggleClass('active');
        $('#usuario_header').toggleClass('active');

        return false;
    });

    $('#usuario_header .icon-close').on('click', function(){

        $('.login-toggle, #usuario_header').removeClass('active');

        return false;
    });
})(jQuery);

;( function( $, window, document, undefined )
{
    'use strict';

    var elSelector		= '#site-navigation',
        elClassHidden	= 'is_hidden',
        throttleTimeout	= 500,
        $element		= $( elSelector );

    if( !$element.length ) return true;

    var $window			= $( window ),
        wHeight			= 0,
        wScrollCurrent	= 0,
        wScrollBefore	= 0,
        wScrollDiff		= 0,
        $document		= $( document ),
        dHeight			= 0,

        throttle = function( delay, fn )
        {
            var last, deferTimer;
            return function()
            {
                var context = this, args = arguments, now = +new Date;
                if( last && now < last + delay )
                {
                    clearTimeout( deferTimer );
                    deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
                }
                else
                {
                    last = now;
                    fn.apply( context, args );
                }
            };
        };

    $window.on( 'scroll', throttle( throttleTimeout, function()
    {
        dHeight			= $document.height();
        wHeight			= $window.height();
        wScrollCurrent	= $window.scrollTop();
        wScrollDiff		= wScrollBefore - wScrollCurrent;

        if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
            $element.removeClass( elClassHidden );

        else if( wScrollDiff > 0 && $element.hasClass( elClassHidden ) ) // scrolled up; element slides in
            $element.removeClass( elClassHidden );

        else if( wScrollDiff < 0 ) // scrolled down
        {
            if( wScrollCurrent + wHeight >= dHeight && $element.hasClass( elClassHidden ) ) // scrolled to the very bottom; element slides in
                $element.removeClass( elClassHidden );

            else // scrolled down; element slides out
                if(! $element.hasClass('toggled')) {
                    $element.addClass(elClassHidden);
                }
        }

        wScrollBefore = wScrollCurrent;
    }));

})( jQuery, window, document );