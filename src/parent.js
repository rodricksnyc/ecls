$(document).ready(function () {

  // var canvas = document.getElementById("signature");
  //  var signaturePad = new SignaturePad(canvas);
  //
  //  $('#clear-signature').on('click', function(){
  //      signaturePad.clear();
  //  });
  //

  $('body').keydown(function (event) {

		if (!$('.consent').val() == '' )   {
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


  if (!$('.no-consent').val() == '' )   {
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

    console.log(negative)

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



    }, 100);

    setTimeout(function(){
      $('.grayBox.second').removeClass('animated slideInRight').hide();
    }, 400);

    $(".grayBox.second").animate({
      "right": negative
    }, 400);


  })

  $('#no-consent-given').on('submit',function(event){
    event.preventDefault();
    event.currentTarget.submit();
  });


$('#noConsent-button').click(function(e){
  e.preventDefault()

  var yourFormElement2 = $("#no-consent-given")[0];
   yourFormElement2.checkValidity();
   yourFormElement2.reportValidity();

if (!$('.no-consent').val() == '' )   {

  $(".grayBox.second").animate({
    "top": negative2
  }, 400);


  setTimeout(function(){
    $('.grayBox.third').addClass('animated slideInUp').show();

    $(".grayBox.third").animate({
      "bottom": 0,
      "top":0
    }, 400);


  }, 0);

}


})


$('#consentGiven').on('submit',function(event){
  event.preventDefault();
  event.currentTarget.submit();
});



$('#consent-button').click(function(e){
  e.preventDefault()

var yourFormElement1 = $("#consentGiven")[0];
 yourFormElement1.checkValidity();
 yourFormElement1.reportValidity();
		if (!$('.consent').val() == '' )   {
  $(".grayBox.first").animate({
    "top": negative2
  }, 400);


  setTimeout(function(){
    $('.grayBox.consent1').addClass('animated slideInUp').show();

    $(".grayBox.consent1").animate({
      "bottom": 0,
      "top":0
    }, 400);


  }, 0);


}
});



$('#finishOptOut').click(function(e){
  e.preventDefault()

$('.box-outer').animate({
  "height" : 120
}, 500);

$('.longGreyBox').animate({
  "height" : 0
}, 500).hide();

$('.grayBox.third .top-consent-text').remove()
$('#finishOptOut').remove()

$('.box-outer').addClass('none')
$(".moreInfo").fadeIn()

$('.parent-survey .d-flex p').removeClass('transparent-opacity')

setTimeout(function(){

$('.grayBox.third').append('<div class="across"><img src="images/red-check.svg" class="img-responsive"><p class="purple larger">Consent <span class="strong">Not</span> Provided</p></div>')

}, 600)



})


$('#give-consent').click(function(e){
  e.preventDefault()

$('.box-outer').animate({
  "height" : 138
}, 500);

$('.longGreyBox').animate({
  "height" : 0
}, 500).hide();

$('.grayBox.consent1').children().fadeOut()


$('.box-outer, .grayBox.consent1').addClass('given')
$(".moreInfo").fadeIn()

$('.parent-survey .d-flex p').removeClass('transparent-opacity')

setTimeout(function(){

$('.grayBox.consent1').append('<div class="across"><img src="images/green-check.svg" class="img-responsive"><h6 class="green">Consent Given</h6></div>')

}, 600)



})




$('#informationForm').on('submit',function(event){
  event.preventDefault();
  event.currentTarget.submit();
});


$('#update').click(function(e){
  e.preventDefault()
  var yourFormElement = $("#informationForm")[0];
 yourFormElement.checkValidity();
 yourFormElement.reportValidity();
})


})
