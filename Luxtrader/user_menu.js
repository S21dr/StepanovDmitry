$(document).ready(function(){
	$('.user_icon').click(function (event) {
		$('.user_menu').toggleClass('user_menu_active');
	});
	$('.Lux_header_submenu__region').click(function (event) {
		$('.language').toggleClass('Lux_header_submenu__region_active');
	});
	$('.language_1').click(function (event) {
		$('.Lux_header_submenu__region_link.language_active').text('ru');
	});
	$('.language_2').click(function (event) {
		$('.Lux_header_submenu__region_link.language_active').text('en');
	});
	
});
 $(document).ready(function(){
  $("a[href*=#]").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
});
