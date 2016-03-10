$(document).ready(function(){

	var percentageElement = $('.percentage-amount');
	var radioButtons = $(".lender-form input:radio");
	radioButtons.change(function(){
		var percentage = $(this).attr('data-percentage');
		percentageElement.html(percentage);
	});

	$( '.help-icon' ).tooltip({
		position: { my: "right top", at: "right+7 bottom+10" }
	});

});