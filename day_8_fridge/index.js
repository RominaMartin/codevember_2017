$(function() {
	let mixer = [];
	let currentColor = "";

	const COLORS = {
		yellow: "#fff048",
		orange: "fb9354",
		purple: "e03881",
		red: "fb5046",
		green: "9ebf92"
	}

	$("#fridge").on("click", function() {
		$("#open_fridge").show();
	});

	$("#open_fridge").on("click", function(e) {
		e.stopPropagation();
		$(this).hide();
	});

	$(".fruit").on("click", function(e) {
		e.stopPropagation();

		$("#instructions").hide();
		$("#arrow").hide();

		mixer.push(COLORS[$(this).prop("classList")[0]])
		$(this).hide();
	});

	$("#turn_on").on("click", function(e) {
		$("#shake_on").show();
		$("#shake_off").hide();
		$(".shake").addClass("shaking");
		$("#juice").css({fill: "#4ae3f6"})

		setTimeout(function() {
			currentColor = mixer[Math.floor(Math.random()*mixer.length)];
			$("#shake_on").hide();
			$("#shake_off").show();
			$(".fruit").show();
			$(".shake").removeClass("shaking");
			$("#juice").css({fill: currentColor});

			mixer = [];
		}, 3000);
	});
});