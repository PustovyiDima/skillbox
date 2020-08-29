$(function(){

	$('.show__order__form').on('click',function(){
		$('.form__layout').css('display','flex');
	});

	$('.close__button').on('click',function(){
		$('.form__layout').css('display','none');
	});

});