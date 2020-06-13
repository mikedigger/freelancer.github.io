
let burger = document.querySelector('.burger');
let popup_main =  document.querySelector('#popup-main');

burger.addEventListener('click', function(){
	popup_main.classList.toggle('active');
	this.classList.toggle('active');
});

// Swipers
const breakpoint = window.matchMedia( '(min-width:769px)' );
let mySwiper;
const breakpointChecker = function() {
	if ( breakpoint.matches === true ) {

	if ( mySwiper !== undefined ) mySwiper1.destroy( true, true );
	return;
		} else if ( breakpoint.matches === false ) {
			return enableSwiper();
		}
};
const enableSwiper = function() {
	mySwiper = new Swiper('.section .swiper-container', {
		speed: 400,
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 3500
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				slidesPerGroup: 2
			}
		}
	});
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();
