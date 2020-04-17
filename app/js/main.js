$(function () {
	$(".header__slider").slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow right">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow_right.svg" alt="Arrow right">',
		asNavFor: '.slider-dots'


	});

	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider'
	});




});