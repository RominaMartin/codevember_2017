$(function() {
  let currentSelected = null;
  let finished = false;
  
  setDeckRandomly();
  
  setTimeout(function() {
    $(".card").removeClass("active");
  }, 1500);

  $(".card").on("click", function() {
    if(!finished && !isCompleted($(this))) {
      if(currentSelected === null) {
        currentSelected = $(this);
        $(this).addClass("active");
      } else if (isMatching($(this))) {
          $(this).addClass("completed active");
          currentSelected.addClass("completed");
          currentSelected = null;
      } else {
          $(this).removeClass("active");
          currentSelected.removeClass("active");
          currentSelected = null;
      }

      if($(".active").length === 6) {
        finished = true;
        $("#restart").css({opacity: 1});
      }
    }
  });
  
  $("#restart").on("click", function() {
    $('.card').attr('class','card');
    setDeckRandomly();
    $(this).css({opacity: 0});
    finished = false;
    setTimeout(function() {
      $(".card").removeClass("active");
    }, 1500);
  })

  function isMatching(element) {
    let currentClass = currentSelected[0].classList[1];
    return element.hasClass(currentClass);
  }

  function isCompleted(element) {
    return element.hasClass("completed");
  }
  
  function setDeckRandomly() {
    let deck = $(".card");

    for(let i = 1; i < 4; i++) {
      let firstCard = getRandomValue(deck);
      deck.splice($.inArray(firstCard, deck), 1);
      let secondCard = getRandomValue(deck);
      deck.splice($.inArray(secondCard, deck), 1);

      firstCard.classList.add("type_" + i);
      secondCard.classList.add("type_" + i);
    }
  }

  function getRandomValue(values) {
    return values[Math.floor(Math.random() * values.length)];
  }
});