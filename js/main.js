$(document).ready(function(){

	/* For navbar fixing after scroll */
	$(document).scroll(function(){

		var elem = $('.subnav');

		if (!elem.attr('data-top')) {
			if (elem.hasClass('navbar-fixed-top')) {
				return;
			}
			var offset = elem.offset();
			elem.attr('data-top', offset.top);
		}

		if (elem.attr('data-top') - elem.outerHeight() <= $(this).scrollTop() - $(elem).outerHeight()) {
			elem.addClass('navbar-fixed-top');
			$('#home').addClass('live');
		}
		else {
			elem.removeClass('navbar-fixed-top');
		}

	});

	$('#home').click(function(){
		$('#slider').delay(300).fadeOut(300);
		$('#wheel').delay(600).fadeIn(300);
		$('#home').removeClass('live');
	});

	$('#foodloop, #loop').click(function(){
		$('#wheel').delay(300).fadeOut(300);
		$('#slider').delay(600).fadeIn(300);
		$('#home').addClass('live');
	});

	$('.kate').hover(function(){
		$('.photo img').animate({ marginLeft: -10 }, 200);
	}, function(){
		$('.photo img').animate({ marginLeft: 0 }, 200);
	});

	$('.liz').hover(function(){
		$('.photo img').animate({ marginLeft: 10 }, 200);
	}, function(){
		$('.photo img').animate({ marginLeft: 0 }, 200);
	});

	$('#content-slider').royalSlider({
		autoHeight: false,
		arrowsNav: true,
		arrowsNavAutoHide: false,
		autoScaleSlider: true,
		autoScaleSliderWidth: 1000,
		autoScaleSliderHeight: 600,
		fadeinLoadedSlide: false,
		imageScaleMode: 'fill',
		imageAlignCenter:false,
		globalCaption:true,
		loop: true,
		numImagesToPreload: 6,
		keyboardNavEnabled: true,
		usePreloader: false,
		sliderDrag: false,
		navigateByClick: false
	});

	$('#navgraphic').cycle({
		fx: 'fade',
		speed: 'fast',
		timeout: 0,
		next: '.rsArrowRight',
		prev: '.rsArrowLeft'
	});


	if (document.location.href.indexOf('#slider') > -1) {
		$('#wheel').delay(300).fadeOut(300);
		$('#home').addClass('live');
	}

	if (document.location.href.indexOf('#about') > -1) {
		$('#home').addClass('live');
	}

	if (document.location.href.indexOf('compost.html') > -1) {
		$('#home').addClass('live');
	}

//	if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1)) {
	/* if its iphone, do some stuff */
//	} else {

	$(function(){
		$('#intro, #wheel').css({'height': ( $(window).height() - 56 )});
		//$('#intro h1').css({'top': (($(window).height()) /2-140)}).css({'left': (($(window).width()) /2-300)});

		$('#wheel h1').css({'margin-top': ( ($(window).height() / 3 ))});

		$(window).bind('resize', function(){
			$('#intro, #wheel').css({'height': ( $(window).height() - 56 )});
			//$('#intro h1').css({'top': (($(window).height()) /2-140)}).css({'left': (($(window).width()) /2-300)});
			$('#wheel h1').css({'margin-top': ( $(window).height() / 3 )});
		});
	});

	if($('body').hasClass('compost')){


	} else {
		$.localScroll({
			duration: 400
		});
	}




		/*
		$('body').mousemove(function(e){
			var mousePos = e.pageX;
			console.log(mousePos);

		});
		*/

//	}

});