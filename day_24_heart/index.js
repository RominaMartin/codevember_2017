$(function() {
  let WIDTH = window.innerWidth;
  let HEIGHT = window.innerHeight;
  let FPS = 60;

  var hearts = [];

  let canvas = $("#screen")[0];

  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  let ctx = canvas.getContext("2d");

  var heartImage = new Image();
  heartImage.src = "./img/heart.png";

  function heart(I) {
    I = {};
    I.x = Math.random() * WIDTH;
    I.y = 0;

    I.size = Math.random() * (25 - 15) + 15;

    I.draw = function() {
      ctx.drawImage(heartImage, this.x, this.y, this.size, this.size);
    };

    I.update = function() {
      I.y += 0.5;
    };

    return I;
  };

  function update() {
    hearts.forEach(function(heart) {
      heart.update();
    });

    if(Math.random() < 0.05)
      hearts.push(heart());
  }

  function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    hearts.forEach(function(heart) {
      heart.draw();
    });
  }

  function initialize() {
    setInterval(function() {
      update();
      draw();
    }, 1000/FPS);
  }

  initialize();
});