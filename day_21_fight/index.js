$(function() {
	$("#fight").on("click", function() {
			$("#calm_down").toggle();

			$("#android_buble").delay(1200).fadeIn();
			$("#apple_buble").delay(1600).fadeIn();
			$("#windows_buble").delay(2200).fadeIn();

			$(".arm").addClass("animate");

			$(this).toggle();
	});

	$("#calm_down").on("click", function() {
		$(this).toggle();
		$("#fight").toggle();
		$(".arm").removeClass("animate");
		$(".buble").hide();
	});

});