$(function() {
  let WIDTH = 650;
  let HEIGHT = 400;
  let START_X = 325;
  let START_Y = 400;
  let FPS = 30;
  let gameOn;
  let time = 0;
  var meteors = [];

  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };

  let canvas = document.getElementById('board');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  let ctx = canvas.getContext("2d");

  var playerImage = new Image();
  var meteorImage = new Image();

  playerImage.src = "./img/rocket.png";
  meteorImage.src = "./img/meteor.png";

  var player = {
    x: START_X,
    y: START_Y,
    width: 48,
    height: 64,
    draw: function() {
      ctx.drawImage(playerImage, this.x, this.y, this.width, this.height);
    },
    gameOver: function() {
      this.active = false;
      clearInterval(gameOn);
      console.log(time);
    }
  };

  function Meteor(I) {
    I = {};

    I.active = true;
    I.age = Math.floor(Math.random() * 128);
    I.x = WIDTH / 4 + Math.random() * WIDTH / 2;
    I.y = 0;
    I.xVelocity = 0
    I.yVelocity = 2;

    I.width = 32;
    I.height = 32;

    I.inBounds = function() {
      return I.x >= 0 && I.x <= WIDTH &&
        I.y >= 0 && I.y <= HEIGHT;
    };

    I.draw = function() {
      ctx.drawImage(meteorImage, this.x, this.y, this.width, this.height);
    };

    I.update = function() {
      I.x += I.xVelocity;
      I.y += I.yVelocity;
      I.xVelocity = 2 * Math.sin(I.age * Math.PI / 64);
      I.age++;
    };

    return I;
  };

  function update() {
    if (keydown.left)
      player.x -= 5;

    if (keydown.right)
      player.x += 5;

    if(keydown.up)
      player.y -= 5;

    if(keydown.down)
      player.y += 5;

    player.x = player.x.clamp(0, WIDTH - player.width);
    player.y = player.y.clamp(0, HEIGHT - player.height);

    meteors.forEach(function(meteor) {
      meteor.update();
    });

    meteors = meteors.filter(function(meteor) {
      return meteor.active;
    });

    if(Math.random() < 0.1) {
      meteors.push(Meteor());
    }
    time++;
    handleCollisions();
  }

  function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    player.draw();
    meteors.forEach(function(meteor) {
      meteor.draw();
    });
  }

  function collides(a, b) {
    return a.x < b.x + (b.width - 5) &&
           a.x + (a.width - 15) > b.x &&
           a.y < b.y + (b.height - 20) &&
           a.y + (a.height - 15) > b.y;
  }

  function handleCollisions() {
    meteors.forEach(function(meteor) {
      if (collides(meteor, player)) {
        player.gameOver();
        $("#time").text((time * 0.03).toFixed(2) + " secs")
        $("#game_over").show();
      }
    });
  }

  window.keydown = {};
  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }
  
  $(document).bind("keydown", function(event) {
    keydown[keyName(event)] = true;
  });
  
  $(document).bind("keyup", function(event) {
    keydown[keyName(event)] = false;
  });

  function startGame() {
    gameOn = setInterval(function() {
      update();
      draw();
    }, 1000/FPS);
  }

  $("#restart").on("click", function () {
    meteors = [];
    player.x = START_X;
    player.y = START_Y;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    time = 0;
    $("#game_over").hide();
    startGame();
  });

  startGame();
});