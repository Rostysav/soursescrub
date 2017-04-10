$(document).ready(function(){

	/*heder fixed*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0){  
   			$('.navigation').addClass("scroll-nav");
  		}else{
 		   $('.navigation').removeClass("scroll-nav");
 		}
	});



	/*nav-btn*/

	$('.burger-menu').click(function(){
		$('.nav-list').slideToggle();
		$('.login-btn').slideToggle();
	});

	/*page scroll*/

	$("#myMenu a").mPageScroll2id({
		highlightSelector:"#myMenu a"
	});

	$(".introducing-item a").mPageScroll2id({
		highlightSelector:".introducing-item a"
	});


	/*Modal*/

	 $('.modal-footer button').click(function(){
		var button = $(this);

		if ( button.attr("data-dismiss") != "modal" ){
			var inputs = $('form input');
			var title = $('.modal-title');
			var progress = $('.progress');
			var progressBar = $('.progress-bar');

			inputs.attr("disabled", "disabled");

			button.hide();

			progress.show();

			progressBar.animate({width : "100%"}, 100);

			progress.delay(1000)
					.fadeOut(600);

			button.text("Close")
					.removeClass("btn-primary")
					.addClass("btn-success")
    				.blur()
					.delay(1600)
					.fadeIn(function(){
						title.text("Log in is successful");
						button.attr("data-dismiss", "modal");
					});
		}
	});

	$('#myModal').on('hidden.bs.modal', function (e) {
		var inputs = $('form input');
		var title = $('.modal-title');
		var progressBar = $('.progress-bar');
		var button = $('.modal-footer button');

		inputs.removeAttr("disabled");

		title.text("Log in");

		progressBar.css({ "width" : "0%" });

		button.removeClass("btn-success")
				.addClass("btn-primary")
				.text("Ok")
				.removeAttr("data-dismiss");
                
	});


});

