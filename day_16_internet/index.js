$(function() {
	const COLORS = ["#1d4999","#11ca11","#fb8072","#9b1d37","#fdb462"];

	$(".picture").on("click", function() {
		$("#instructions_group").hide();
		let id = $(this)[0].id;
		let element = $("#me_" + id)[0];
		let len = element.getTotalLength();

		$("#received_text").hide();
		$(".received, .sent").hide();
		$("#" + id + "_sent").show();
		$("#sent_text").show();

		element.style.transition = 'none';
		element.style.strokeDasharray = len + ' ' + len;
		element.style.strokeDashoffset = id === "boyfriend" || id === "brother_in_law" ? -len : len;
		element.getBoundingClientRect();
		element.style.transition = 'stroke-dashoffset 2s ease-in-out';
		element.style.stroke = COLORS[Math.floor(Math.random()*COLORS.length)];
		element.style.strokeDashoffset = '0';

		setTimeout(function() {
			$("#received_text").show();
			$("#" + id + "_received").show();
		}, 2200);
	});
});