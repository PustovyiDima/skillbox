$(function(){

	$('.show__order__form').on('click',function(){
		$('.form__layout').css('display','flex');
	});

	$('.close__button').on('click',function(){
		$('.form__layout').css('display','none');
	});


	$('.order__form button').on('click',function(){
		let formData = $('.order__form ').serializeArray();
		let request = {};
		for (i in formData) {
			request[formData[i].name] = formData[i].value;
		}
		
		$.post('./api/api.php', request, function(response){
			if (response == "1"){
				$('.form__layout').css('display','none');
			};
		});

		return false;
	});

});