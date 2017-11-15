$(function() {
	const song = new Audio("https://ia801905.us.archive.org/6/items/DSOTM/02%20-%20Breathe.mp3");
	song.play();

	$("#arm").on("click", function() {
		$(this).toggleClass("moveArm");
		if($("#disc").hasClass("rollDisc")) {
			$("#disc").one('animationiteration', function() {
				song.pause();
        $(this).removeClass("rollDisc");
    	});
		} else {
			song.play();
			$("#disc").toggleClass("rollDisc");
		}
	});
});