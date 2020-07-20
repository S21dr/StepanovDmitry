$(document).ready(function(){
	$('.burger').click(function (event) {
		$('.burger,.menu_m').toggleClass('active');
		$('body').toggleClass('lock');
	});
});