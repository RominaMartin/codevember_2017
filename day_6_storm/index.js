$(function() {
	let sound = new Audio('https://www.soundjay.com/nature/rain-04.mp3');
	let isPaused = false;

	let canvas = document.getElementById('canvas');
	let width = window.innerWidth;
	let height = window.innerHeight;
	canvas.width  = width;
	canvas.height = height;

  let ctx = canvas.getContext('2d');

	let DROP_WIDTH = 1;

	let drops = [];

	let request;

	for (i = 0; i < width; i++) {
		drops.push({ x: Math.random()*width, y: Math.round(Math.random()* height), s: Math.random() + 2, height: Math.random() * 15 + 1});
	}

	function startRainning() {
		ctx.clearRect(0, 0, width, height);

		for (var i = 0; i < width; i++) {
				ctx.fillStyle = "#D8EBEC";
				ctx.fillRect(drops[i].x, drops[i].y, DROP_WIDTH, drops[i].height);
				drops[i].x -= Math.random()*1 + 0.5;
				drops[i].y += Math.pow(drops[i].s, 2) + 1;

			if (drops[i].y > height) {
				drops[i].x = Math.random()*width + 25;
				drops[i].y = 0;
			}
		}

		request = requestAnimationFrame(startRainning);
	}

	$("#toggle_sound").on("click", function () {
		if(isPaused)
			sound.play();
		else
			sound.pause();

		$(".sound").toggle();
		isPaused = !isPaused;
	});

	startRainning();
	sound.play();
});