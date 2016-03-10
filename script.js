$(document).ready(function(){

	var percentageElement = $('.percentage-amount');
	var radioButtons = $(".lender-form input:radio");
	radioButtons.change(function(){
		var percentage = $(this).attr('data-percentage');
		percentageElement.html(percentage);
	});

	$( document ).tooltip({
		position: { my: "right top", at: "right+10 bottom+10" }
	});

});