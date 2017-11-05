$(".letter").on("click", function() {
  let selected = prompt("Please enter name:", "Name");
  if(selected !== "")
    $(this).text(selected[0].toUpperCase());
})