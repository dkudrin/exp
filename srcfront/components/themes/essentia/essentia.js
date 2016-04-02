require('./essentia.scss')
require('jquery')
require('./js/isotope.js')
require('./js/jquery.imagesloaded.js')
require('./js/bootstrap.min.js')
require('./js/flexslider.js')
require('./js/carousel.js')
require('./js/fancybox.js')
require('./js/twitter.js')
require('./js/modernizr.custom.79639.js')
require('./js/jquery.ba-cond.min.js')
require('./js/jquery.slitslider.js')

require('./js/excanvas.js')
require('./js/jquery.flot.min.js')
require('./js/jquery.flot.pie.min.js')
require('./js/jquery.flot.stack.js')
require('./js/jquery.flot.resize.min.js')

require('./js/custom.js')

	$(function() {
	
		var Page = (function() {

			var $navArrows = $( '#nav-arrows' ),
				$nav = $( '#nav-dots > span' ),
				slitslider = $( '#slider' ).slitslider( {
					onBeforeChange : function( slide, pos ) {

						$nav.removeClass( 'nav-dot-current' );
						$nav.eq( pos ).addClass( 'nav-dot-current' );

					}
				} ),

				init = function() {

					initEvents();
					
				},
				initEvents = function() {

					// add navigation events
					$navArrows.children( ':last' ).on( 'click', function() {

						slitslider.next();
						return false;

					} );

					$navArrows.children( ':first' ).on( 'click', function() {
						
						slitslider.previous();
						return false;

					} );

					$nav.each( function( i ) {
					
						$( this ).on( 'click', function( event ) {
							
							var $dot = $( this );
							
							if( !slitslider.isActive() ) {

								$nav.removeClass( 'nav-dot-current' );
								$dot.addClass( 'nav-dot-current' );
							
							}
							
							slitslider.jump( i + 1 );
							return false;
						
						} );
						
					} );

				};

				return { init : init };

		})();

		Page.init();
	
	});