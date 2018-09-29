(function ($) {
	"use strict";

	//======= PRELOADER ========//
	$(window).on('load', function () {
		$('body').delay(550).css({
			'overflow': 'visible'
		});
	});

	//======= SITE NAVBAR ========//
	var navMenu = $('.nav-menu')
	navMenu.onePageNav();
	$(window).on('scroll resize', function () {
		var homeH = $('.home-section').height() - 90;
		if ($(this).scrollTop() > homeH) {
			$('nav').fadeIn(400);
			navMenu.onePageNav();
		} else {
			$('nav').fadeOut(200);
		}
		preventDefault();
	});

	//======= RESPONSIVE MENU ========//
	$('.mobile-bar').on('click', function () {
		$(this).toggleClass('active');
		$('.nav-menu').toggleClass('active');
		preventDefault();
	});

	//======= SMOOTH SCROLL ========//
	$('.nav-menu li a,.down').on('click', function () {
		var anchor = $(this);
		if (anchor == 'undefined' || anchor == null || anchor.attr('href') == '#') {
			return;
		}
		if (anchor.attr('href').indexOf('#') === 0) {
			if ($(anchor.attr('href')).length) {
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 70
				}, 750);
			}
			preventDefault();
		}
	});

	//======= PROGRESS BAR  ========//
	$('.progress-bar-style').each(function () {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		} else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});

})(jQuery);