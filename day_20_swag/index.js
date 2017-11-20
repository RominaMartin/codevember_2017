$(function() {

	$("#swag_on").on("click", function() {
		$("#letter_s").delay(1200).fadeIn();
		$("#letter_w").delay(1400).fadeIn();
		$("#letter_a").delay(1600).fadeIn();
		$("#letter_g").delay(1800).fadeIn();
		$("#moustache").delay(2000).fadeIn();
		$(this).toggle();
		$("#swag_off").toggle();
	});

	$("#swag_off").on("click", function() {
		$(".letter").hide();
		$("#moustache").hide();
		$(this).toggle();
		$("#swag_on").toggle();
	});
});