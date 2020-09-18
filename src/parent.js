$(document).ready(function () {


	$("a, button, input, [tabIndex='0']").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabIndex='0']").on('focusout', function() {
		$(this).css('outline', 'none')
	})


	$(" :checkbox").change(function() {
		if (!$('.consent').val() == ''  &&  $('#consentGiven input').is(':checked'))   {
			$('#consent-button').css({
				'background': '#00843D',
				'color' :'white'

			});

		}

		else {

			$('#consent-button').css({
				'background': '#d1d3d4',
				'color' :'#6F6F6F'

			});

		}


		if (!$('.no-consent').val() == '' &&  $('#no-consent-given input').is(':checked'))    {
			$('#noConsent-button').css({
				'background': '#00843D',
				'color' :'white'

			});

		}

		else {

			$('#noConsent-button').css({
				'background': '#d1d3d4',
				'color' :'#6F6F6F'

			});

		}
	});
	$('body').keydown(function (event) {

		if (!$('.consent').val() == ''  &&  $('#consentGiven input').is(':checked'))   {
			$('#consent-button').css({
				'background': '#00843D',
				'color' :'white'

			});

		}

		else {

			$('#consent-button').css({
				'background': '#d1d3d4',
				'color' :'#6F6F6F'

			});

		}


		if (!$('.no-consent').val() == '' &&  $('#no-consent-given input').is(':checked'))    {
			$('#noConsent-button').css({
				'background': '#00843D',
				'color' :'white'

			});

		}

		else {

			$('#noConsent-button').css({
				'background': '#d1d3d4',
				'color' :'#6F6F6F'

			});

		}

	});

	var negative = -$(".box-outer").width()

	console.log(negative)

	$(".grayBox.second").css('right', negative)


	var negative2 = -$(".box-outer").outerHeight()

	console.log(negative2)

	$(".grayBox.third").css('bottom', negative2)

	$('#optOut1').click(function(){

		$('.grayBox.first').addClass('flexing-scroll')

		$(".grayBox.first").animate({
			"left": -$(".box-outer").width()
		}, 400);


		setTimeout(function(){

			$('.grayBox.second').addClass('animated slideInRight').show();

			$(".grayBox.second").animate({
				"right": 0
			}, 200);

		}, 100);

		if ($(document).innerWidth() <= 1024) {
			setTimeout(function(){
				var divPosition = $('#anchorPoint').offset();
				$('html, body').animate({scrollTop: divPosition.top}, 1000);

			},1000)

		}

	})

	$('#return-noConsent').click(function(){

		$('.grayBox.consent1').addClass('flexing-scroll')




		$(".grayBox.consent1").animate({
			"left": -$(".box-outer").width()
		}, 400);


		setTimeout(function(){

			$('.grayBox.second').addClass('animated slideInRight').show();

			$(".grayBox.second").animate({
				"right": 0
			}, 200);

		}, 100);

		$('#return1').click(function(){
			$('.grayBox.first').addClass('animated slideInDown slow')

			$(".grayBox.first").animate({
				"top": 0
			}, 600);



		})

		$('#consent-button').click(function(e){

			e.preventDefault()
			$(".grayBox.first").animate({
				"top": negative2
			}, 400);

			$(".grayBox.consent1").addClass('animated slideInLeft')
			// $(".grayBox.consent1").removeClass('flexing-scroll')
			//
			$(".grayBox.consent1").animate({
				"left": 0
			}, 600);


		});




	})


	$('#return1').click(function(){
		console.log(negative)
		setTimeout(function(){
			$('.grayBox.first').removeClass('flexing-scroll')

			$(".grayBox.first").animate({
				"left": 0
			}, 500);



		}, 300);

		setTimeout(function(){
			$('.grayBox.second').removeClass('animated slideInRight').hide();
		}, 400);

		$(".grayBox.second").animate({
			"right": negative
		}, 600);


	})

	//allowing for to still submit

	$('#no-consent-given').on('submit',function(event){
		event.preventDefault();
		event.currentTarget.submit();
	});


	$('#noConsent-button').click(function(e){
		e.preventDefault()

		var yourFormElement2 = $("#no-consent-given")[0];
		yourFormElement2.checkValidity();
		yourFormElement2.reportValidity();

		if (!$('.no-consent').val() == '' &&  $('#no-consent-given input').is(':checked'))    {

			$(".grayBox.second").animate({
				"top": negative2
			}, 400);


			setTimeout(function(){
				$('.grayBox.third').addClass('animated slideInUp').show();

				$(".grayBox.third").animate({
					// "bottom": 0,
					"top":0
				}, 400);


			}, 0);

			if ($(document).innerWidth() <= 1024) {

				var divPosition = $('#anchorPoint').offset();
				$('html, body').animate({scrollTop: divPosition.top}, 1000);

			}

		}


	})

	//allowing for to still submit

	$('#consentGiven').on('submit',function(event){
		event.preventDefault();
		event.currentTarget.submit();
	});



	$('#consent-button').click(function(e){
		e.preventDefault()

		var yourFormElement1 = $("#consentGiven")[0];
		yourFormElement1.checkValidity();
		yourFormElement1.reportValidity();
		if (!$('.consent').val() == ''  &&  $('#consentGiven input').is(':checked'))   {
			$(".grayBox.first").animate({
				"top": negative2
			}, 400);


			setTimeout(function(){
				$('.grayBox.consent1').addClass('animated slideInUp').show();

				$(".grayBox.consent1").animate({
					// "bottom": 0,
					"top":0
				}, 400);


			}, 0);

			if ($(document).innerWidth() <= 1024) {

				var divPosition = $('#anchorPoint').offset();
				$('html, body').animate({scrollTop: divPosition.top}, 1000);

			}

		}
	});



	$('#finishOptOut').click(function(e){
		e.preventDefault()

		$('.box-outer').animate({
			"height" : 138
		}, 500);

		$('.longGreyBox').animate({
			"height" : 0
		}, 500).hide();

		$('.grayBox.third .top-consent-text').remove()
		$('#finishOptOut').remove()

		$('.box-outer').addClass('none')
		$(".moreInfo").fadeIn()

		$('.grayBox.third').css('padding', '2em')


		$('.parent-survey .d-flex p').removeClass('transparent-opacity')



		setTimeout(function(){

			$('.grayBox.third').append('<div class="across"><img src="images/red-check.svg" class="img-responsive"><p class="purple larger">Consent <span class="strong">Not</span> Provided</p></div>')

		}, 600)

		if ($(document).innerWidth() <= 1024) {

			setTimeout(function(){
				var divPosition = $('#anchorPoint').offset();
				$('html, body').animate({scrollTop: divPosition.top}, 1000);

			},600)

		}

		$('li[data-target="#survey"]').addClass('redConsent')
		$('li[data-target="#contact"]').removeClass('grayedOut')



	})


	$('#give-consent').click(function(e){
		e.preventDefault()

		$('.box-outer').animate({
			"height" : 138
		}, 500);

		$('.longGreyBox').animate({
			"height" : 0
		}, 500).hide();

		$('.grayBox.consent1').css('padding', '2em')

		$('.grayBox.consent1').children().fadeOut()


		$('.box-outer, .grayBox.consent1').addClass('given')
		$(".moreInfo").fadeIn()

		$('.parent-survey .d-flex p').removeClass('transparent-opacity')



		setTimeout(function(){

			$('.grayBox.consent1').append('<div class="across"><img src="images/green-check.svg" class="img-responsive consent-green"><h6 class="green">Consent Given</h6></div>')

		}, 600)

		if ($(document).innerWidth() <= 1024) {

			var divPosition = $('#anchorPoint').offset();
			$('html, body').animate({scrollTop: divPosition.top}, 1000);

		}

		$('li[data-target="#contact"]').removeClass('grayedOut')

		$('li[data-target="#survey"]').addClass('greenConsent')

	})


	//allowing for to still submit

	$('#informationForm').on('submit',function(event){
		event.preventDefault();
		event.currentTarget.submit();
	});


	var email = document.getElementById("email1").value
	var confemail = document.getElementById("email2").value

	$('body').keydown(function (event) {
		if (email == confemail) {
			$('.invalid-tooltip').hide()

		}
	})

	$('#update').click(function(e){
		e.preventDefault()
		var yourFormElement = $("#informationForm")[0];
		yourFormElement.checkValidity();
		yourFormElement.reportValidity();


		function confirmEmail() {
			var email = document.getElementById("email1").value
			var confemail = document.getElementById("email2").value
			if(email != confemail) {
				$('.invalid-tooltip').show()


			}


			let valid = true;
			$('#informationForm [required]').each(function() {
				if ($(this).is(':invalid') || !$(this).val()) valid = false;
			})
			if (!valid) {

			}
			else if (valid && (email == confemail)) {


				$('.lightGrayBox').animate({
					"height": "auto",
					"min-height": "200",
					"width": "100%"
				}, 800);

				$('#informationForm').stop().animate({
					height: "0px",
				}, 700,
				function () {
					$(this).hide()
				});

				$('.lightGrayBox').addClass('given')


				setTimeout(function(){
					$('.lightGrayBox').append('<div class="completed d-flex flex-column align-items-center"><div class="across"><img src="images/green-check.svg" class="img-responsive"><h6 class="green">Completed</h6></div><p class="charcoal text-center">Thank you for submitting your contact information. If anything changes, you may update your information at any time.</p><button class="btn btn-info" id="update-again" tabindex="0" aria-hidden="false" role="button" aria-describedby="Update information again">UPDATE AGAIN</button></div>')

					// $('.completed').css('display' ,'flex !important')
				},700)


				$('#feedback, li[data-target="#feedback"]').show()
				$('#feedback').css({
					height:'auto',
					width:'100%'
				})

				$('.hideWhenComplete').fadeOut()


				// if ($(document).innerWidth() <= 1024) {

					var divPosition = $('#anchorPoint2').offset();
					$('html, body').animate({scrollTop: divPosition.top}, 700);

				// }


			}


		}

		confirmEmail()


	})


	$("body").on("click","#update-again",function(){
		$('.hideWhenComplete').fadeIn()

		$('#informationForm').stop().animate({
			height: "100%",
		}, 400,
		function () {
			$(this).fadeIn()
		});


		$('.lightGrayBox').animate({
			"height": "100%",
			"width": "100%"
		}, 600);


		setTimeout(function(){
			$('.lightGrayBox').removeClass('given')

			$('.completed').remove()

		},400)


	})


	$('.spanish').click(function() {
		$('.purpleBlocks').css('min-height', '18em')
	$('.slideForm .radio-inline').css('font-size', '11px')
	$('li[data-target="#survey"]').addClass('spanishAfter')
	$('li[data-target="#overview"]').addClass('spanishAfter')
	$('li[data-target="#feedback"]').addClass('spanishAfter')
	$('li[data-target="#contact"]').addClass('spanishAfter')
	$('li[data-target="#parentSurvey"]').addClass('spanishAfter')
		$('li[data-target="#info"]').addClass('spanishAfter')

	})


})
