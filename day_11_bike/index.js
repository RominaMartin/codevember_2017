$(function() {
	let change = false;

	setInterval(function() {
		if(change) {
  		$("#back_shortened, #front_extended").show();
  		$("#back_extended, #front_shortened").hide();
		} else {
  		$("#back_shortened, #front_extended").hide();
  		$("#back_extended, #front_shortened").show();
		}
		change = !change;
  }, 1000);

});