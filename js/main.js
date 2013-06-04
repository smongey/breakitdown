$(document).ready(function(){

	/* For navbar fixing after scroll */
	$(document).scroll(function(){

		var elem = $('.subnav');

		if (!elem.attr('data-top')) {
			if (elem.hasClass('navbar-fixed-top'))
				return;
			var offset = elem.offset();
			elem.attr('data-top', offset.top);
		}

		if (elem.attr('data-top') - elem.outerHeight() <= $(this).scrollTop() - $(elem).outerHeight())
			elem.addClass('navbar-fixed-top');

		else
			elem.removeClass('navbar-fixed-top');

	});

	if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1)) {
	/* if its iphone, do some stuff */
	} else {

		$(function(){
			$('#intro').css({'height': ( $(window).height() - 56 )});
			//$('#intro h1').css({'top': (($(window).height()) /2-140)}).css({'left': (($(window).width()) /2-300)});

			$(window).bind('resize', function(){
				$('#intro').css({'height': ( $(window).height() - 56 )});
				//$('#intro h1').css({'top': (($(window).height()) /2-140)}).css({'left': (($(window).width()) /2-300)});
			});
		});

		$.localScroll({
			duration: 400
		});

	}

});