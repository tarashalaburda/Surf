$(function () {
	$(".header__slider").slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow right">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow_right.svg" alt="Arrow right">',
		asNavFor: '.slider-dotshead'


	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
		responsive: [
			{
				breakpoint: 961,
				settings: "unslick"
			},
		]

	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow right">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow_right.svg" alt="Arrow right">',
		asNavFor: '.slider-map',
		responsive: [
			{
				breakpoint: 1210,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				}
			}
		]
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1103,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			}
		]

	});

	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow right">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow_right.svg" alt="Arrow right">',
	});


	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="star"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="star"></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function () {
		var spinner = jQuery(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});



	$('.quantity-button').on('click', function () {
		let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
		$('.summ').html('$' + summ);
	});

	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
	$('.summ').html('$' + summ);

	$('.surfboard-box__circle').on('click', function () {
		$(this).toggleClass('active')
	});

	$('.menu-btn').on('click', function () {
		$('.menu').toggleClass('active');
	});

	let wow = new WOW(
		{
			boxClass: 'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0,          // distance to the element when triggering the animation (default is 0)
			mobile: false,       // trigger animations on mobile devices (default is true)
			live: true,       // act on asynchronously loaded content (default is true)
			callback: function (box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		}
	);
	wow.init();


});  