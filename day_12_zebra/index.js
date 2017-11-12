$(function() {
	let notes = {
		c1: null,
		c1s: null,
		d1: null,
		d1s: null,
		e1: null,
		f1: null,
		f1s: null,
		g1: null,
		g1s: null,
		a1: null,
		a1s: null,
		b1: null,
		c2: null
	};

	for(note in notes) {
		notes[note] = new Audio("https://raw.githubusercontent.com/pffy/mp3-piano-sound/master/mp3/" + note +".mp3");
	};

	$(".keys").on("click", function() {
		if(!$(".tale, .note_image").hasClass("dancing"))
			$(".tale, .note_image").addClass("dancing");

		$("#note").text(this.id.toUpperCase());

		notes[this.id].play();

		setTimeout(function() {
			$(".tale, .note_image").removeClass("dancing");
		}, 5000);
	});

});
