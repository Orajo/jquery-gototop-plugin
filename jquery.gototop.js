/**
 * jQuery GoToTop plugin
 * 
 * This plugin generates link, which allows jump to top of the page.
 * Optionally uses https://github.com/flesler/jquery.scrollTo plugin to smooth scroll
 * 
 * @example <caption>Basic usage</caption>
 * $('#linktotop').gototop();
 * 
 * @example <caption>Custom position and slow showing</caption>
 * $('#linktotop').gototop({
 *     fadeInDelay: 1000,
 *     css: {
 *       bottom: '10ev',
 *     }
 * });
 * 
 * @version 1.0
 * @see https://github.com/Orajo/jquery-gototop-plugin Home page
 * @see demo.html Demo page and example how to use it.
 * @see https://github.com/flesler/jquery.scrollTo
 */

(function ($) {
	'use strict';

	var defaults = {
		/**
		 * @param int dist Distance from top after link to top will shown 
		 */
		dist: 200,
		/**
		 * @param int fadeInDelay Time to show link in ms
		 */
		fadeInDelay: 400,
		/**
		 * @param int fadeOutDelay time to hide link in ms
		 */
		fadeOutDelay: 400,
		/**
		 * @param int scrollSpeed time to jump to top of the page in ms
		 */
		scrollSpeed: 400,
		/**
		 * @param string easingType type of transition, {see https://github.com/flesler/jquery.scrollTo}
		 */
		easingType: 'linear',
		/**
		 * @param Object css list of Css properties for link positioning: top, bottom, left, right 
		 */
		css: {
			'top': null,
			'bottom': '30px',
			'left': null,
			'right': '30px',
		}
	};

	/**
	 * @param Object options Initialization options; See {@link defaults} for list of avaliabel options.
	 */
	$.fn.gototop = function(options) {
		var settings = $.extend(true, {}, defaults, options);

		// indicates whether button is visible or not 
		var isToTopVisible = false;

		return this.each(function() {
			var _this = $(this);

			// CSS initialization
			$(this).css('display', 'none').css('position', 'fixed');
			for (var key in settings.css) {
				if (key !== null && key !== undefined) {
					$(this).css(key, settings.css[key])
				}
			}

			$(this).click(function (e) {
				e.preventDefault();
				// if jquery.scrollTo plugin is installed
				if ($.scrollTo !== undefined) {
					$.scrollTo(0, settings.scrollSpeed, {
						easing: settings.easingType
					});
				}
				else {
					$('html, body').animate({
						scrollTop: $(this).scrollTop()
					}, settings.scrollSpeed);
				}
			});
			
			$(window).scroll(function () {
				var sd = $(this).scrollTop();
				if (sd > settings.dist && !isToTopVisible) {
					_this.fadeIn(settings.fadeInDelay);
					isToTopVisible = true;
				} else if (sd <= settings.dist && isToTopVisible) {
					_this.fadeOut(settings.fadeOutDelay);
					isToTopVisible = false;
				}
			});			
		});
	}
}( jQuery ));
