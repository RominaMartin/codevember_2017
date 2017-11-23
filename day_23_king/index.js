$(function() {
	const HOUSES = {
		STARK:      {COLOR: "#FEFEFE", BCOLOR: "#494949", MOTTO: "WINTER IS COMING", PICTURE: "./img/stark.png"},
		LANNISTER:  {COLOR: "#e4ad0c", BCOLOR: "#6e0901", MOTTO: "HEAR ME ROAR", PICTURE: "./img/lannister.png"},
		TARGARYEN:  {COLOR: "#f03017", BCOLOR: "#000000", MOTTO: "FIRE AND BLOOD", PICTURE: "./img/targaryen.png"}
	}

	function createCards() {
		for(let house in HOUSES) {
			$("#container").append(
				"<div id=" + house + " class='card'>\
					<div class='front' style='background-color:" + HOUSES[house].BCOLOR +"'>\
						<h2 style='color:" + HOUSES[house].COLOR + "'>HOUSE</h2>\
						<h2 style='color:" + HOUSES[house].COLOR + "'>" + house + " </h2>\
						<h3>" + HOUSES[house].MOTTO + "</h3>\
						<img src=" + HOUSES[house].PICTURE + ">\
					</div>\
					<div class='back' style='background-color:" + HOUSES[house].BCOLOR +"'>\
						<h2>VOTES</h2>\
						<h2 class='votes'>" + getVotes() + "<\h2>\
					</div>\
				</div>");
		}
	}

	function getVotes() {
		return Math.floor((Math.random() * 200) + 1);
	}

	$("#container").on("click", ".card", function() {
		if($(this).hasClass("flipped"))
			$(".card").removeClass("flipped");
		else {
			$(".card").removeClass("flipped");
			$(this).toggleClass("flipped");
		}
	})

	createCards();
});