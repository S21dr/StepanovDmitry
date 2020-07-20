$(document).ready(function(){
	$('.slider_btn').click(function (event) {
		$('.slider_btn').toggleClass('slider_btn_active');
		$('.slider_btn_text').toggleClass('slider_btn_active');
		$('.swiper-container').toggleClass('slider_btn_active');
	});
});