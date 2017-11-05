const POSITIONS = {
  A: {top: "25%", left: "27%"},
  B: {top: "25%", left: "77%"},
  C: {top: "60%", left: "27%"},
  D: {top: "60%", left: "77%"}
}
var origin = "default";
var rocket = $("#rocket");

$(".planet").on("click", function(e) {
  let element =  $(this)[0].id;

  setRocketOrientation(element);

  rocket[0].addEventListener("transitionend", function(event) {
    rocket.css({"top": POSITIONS[element].top, "left": POSITIONS[element].left});
  }, false);
});

function setRocketOrientation (destination) {
  let orientation = null;

  switch(destination) {
    case "A":
      if(origin === "default" || origin === "D")
        orientation = "-45deg"
      else if(origin === "B")
        orientation = "-90deg"
      else if(origin === "C")
        orientation = "360deg"
      break;
    case "B":
      if(origin === "default" || origin === "C")
        orientation = "45deg"
      else if(origin === "A")
        orientation = "90deg"
      else if(origin === "D")
        orientation = "360deg"
      break;
    case "C":
      if(origin === "default" || origin === "B")
        orientation = "-120deg"
      else if(origin === "A")
        orientation = "-180deg"
      else if(origin === "D")
        orientation = "-90deg"
      break;
    case "D":
      if(origin === "default" || origin === "A")
        orientation = "120deg"
      else if(origin === "B")
        orientation = "180deg"
      else if(origin === "C")
        orientation = "90deg"
      break;
  }
  rocket.css({"transform": "rotate(" + orientation + ")"});
}