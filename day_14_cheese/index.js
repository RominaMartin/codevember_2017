$(function() {
	const ITEMS = ["pizza", "cheese", "burger", "sandwhich"];
	const COLORS = ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"];
	const PIN_COLORS = ["#2386c9", "#f68e1f", "#ee5452", "#853a95"];

	let currentColor = "";
	let currentImage = "";
	const PRINT_AUDIO = new Audio("https://www.soundjay.com/mechanical/sounds/polaroid-camera-take-picture-02.mp3");

	$("#camera").on("click", function() {
		if($("#picture").hasClass("print_picture")) {
			removePicture();
		} else {

			PRINT_AUDIO.play();
			currentColor = COLORS[Math.floor(Math.random()*COLORS.length)];
			currentImage = ITEMS[Math.floor(Math.random()*ITEMS.length)];
			$("#capture").css({fill: currentColor});
			$("#" + currentImage).show();
			$("#picture").addClass("print_picture");
		}
	});

	$("#picture").on("click", function(e) {
		e.stopPropagation();
		removePicture();
		$("#pictures_container").append
		("<div class='photo'>\
				<div class='grap' style='background-color:"+ PIN_COLORS[Math.floor(Math.random()*PIN_COLORS.length)] +"'></div>\
				<div class='food_image' style='background-image:url(./images/" + currentImage + ".png)'></div>\
				<div class='capture' style='background-color:" + currentColor + "'></div>\
			</div>"
		);
	});

	function removePicture() {
		$("#picture").removeClass("print_picture");
		$(".food").hide();
	};
});