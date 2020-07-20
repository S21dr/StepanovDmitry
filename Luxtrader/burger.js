$(document).ready(function(){
	$('.Lux_header_menu__burger').click(function (event) {
		$('.Lux_header_menu__burger,.Lux_header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});