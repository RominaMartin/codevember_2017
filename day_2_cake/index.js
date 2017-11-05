$(function() {
	let selectedGroup;
  
  $("#i_name").on("input", function(e) {
    if($(this).val().length !== 0)
      $("#name").text($(this).val())
  }); 

	$("#custom").spectrum({ color: "#50b5ff" }); 

	$(".pancake, .filling, .cream, .frosting, .filling").on("click", function() {
		selectedGroup = $(this)[0].classList[0];
	});

	$(".pancake, .filling, .cream, .frosting, .filling").spectrum({
    color: "#dd3333",
    change: setColor,
    move: setColor,
    show: function() {},
    hide: function() {}
  });

  function setColor(color) {
  	 $("." + selectedGroup).css({fill: color.toHexString()})
  }
});