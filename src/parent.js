$(document).ready(function () {

  // var canvas = document.getElementById("signature");
  //  var signaturePad = new SignaturePad(canvas);
  //
  //  $('#clear-signature').on('click', function(){
  //      signaturePad.clear();
  //  });
  //

  $('body').keydown(function (event) {

		if (!$('.your-signature').val() == '' )   {
		$('.lightGrayColor').css({
			'background': '#00843D',
			'color' :'white'

		});

  }

  else {

    $('.lightGrayColor').css({
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
    }, 600);


    setTimeout(function(){

      $('.grayBox.second').addClass('animated slideInRight').show();

      $(".grayBox.second").animate({
        "right": 0
      }, 300);

    }, 0);

    console.log(negative)

  })


  $('#return1').click(function(){
    console.log(negative)
    setTimeout(function(){
      $('.grayBox.first').removeClass('flexing-scroll')

      $(".grayBox.first").animate({
        "left": 0
      }, 600);



    }, 100);

    setTimeout(function(){
      $('.grayBox.second').removeClass('animated slideInRight').hide();
    }, 500);

    $(".grayBox.second").animate({
      "right": negative
    }, 600);





  })


})
