

$(".informationForm").validate(
	{
		rules:
		{
			phoneNumber:
			{
				required: false,
				maxlength: 10,
				minlength:10,
				digits: true

			},
			email:
			{
				required: false,
				email: true

			}
		}
	});


	$(".erocs").validate(
		{
			rules:
			{
				options:
				{
					required: true


				},
				date:
				{
					required: true


				},
				result:
				{
					required: true


				},
	
				textarea:
				{
					required: true


				},
				info:
				{
					required: true


				}

			}

		});

	//submit form button outside the <form> tag

	$('.saveInformation').click( function(e) {
		$(".informationForm").trigger('submit');
    // e.preventDefault()
	});

  //allowing form to still submit without refreshing page

  $('.saveInformation').submit(function(e) {
      e.preventDefault();
      return false;
   })
  .on('keydown', function(e){
      var $form = $(this);
      var $actionAttr = $form.action;
      var $input = e.target;
      $form.action = $actionAttr + $input.value;
      $form.submit();
   });

	 if (/Mobi/.test(navigator.userAgent)) {
  // if mobile device, use native pickers
  $(".date input").attr("type", "date");
  $(".time input").attr("type", "time");
} else {
  // if desktop device, use DateTimePicker
  $(".datepicker").datepicker({
    useCurrent: false,
		format: "dd/mm/yyyy",
		startDate:"01/01/2021",
		endDate: "30/11/2021",
		clearBtn: false,
		todayBtn: false,
		todayHighlight: false,
    showTodayButton: true,
		orientation: "bottom right",
    icons: {
      next: "fa fa-chevron-right",
      previous: "fa fa-chevron-left",
      today: 'todayText',
    },

  });
  $("#timepicker").datetimepicker({
    format: "LT",
    icons: {
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down"
    }
  });
}


var num = 10;

$('select').on('change', function (e) {
if ($("#result select.select option[value="+num+"]").prop("selected", true)) {
	$('.erocs .lightGrayBox').show()
}

})



  // 	var negative = -$(".box-outer").width()
  //
  //
	// $(function() {
	// 	$('.tlModals').on('shown.bs.modal, loaded.bs.modal', function(e) {
  //
	// 		$(this).data('form-data', $(this).find('form').serialize());
	// 	});
  //
	// 	$('.tlModals').on('hide.bs.modal', function(e) {
	// 		e.preventDefault()
  //
	// 		if($(this).data('form-data') != $(this).find('form').serialize(e)) {
  //
  //
	// 			if(!
	// 				swal({
	// 					title: "You haven’t saved. Are you sure you want to exit?",
	// 					buttons: true
  //
	// 				})
  //
	// 			)
  //
  //
	// 			{
	// 				e.preventDefault();
	// 			}
  //
  //
  //
	// 		}
  //
  //
	// 		$('.swal-button.swal-button--confirm').click(function() {
	// 			 $('.tlModals').unbind();
	// 			 $('.tlModals').modal('hide');
  //        setTimeout(function(){
  //          $('.grayBox.first').removeClass('flexing-scroll')
  //
  //          $(".grayBox.first").animate({
  //            "left": 0
  //          }, 500);
  //
  //        }, 300);
  //
  //        setTimeout(function(){
  //          $('.grayBox.second').removeClass('animated slideInRight').hide();
  //        }, 400);
  //
  //        $(".grayBox.second").animate({
  //          "right": negative
  //        }, 600);
  //
  //          $('.save-floating').hide()
  //
  //
  //          e.stopPropagation()
  //
  //          $( ".slideOutLeft" ).animate({
  //            width: "0",
  //            opacity: '0'
  //          }, 160, function() {
  //
  //          });
  //
  //          $('#slideOutRight').css('z-index', '10')
  //          $('.projects').attr('tabindex', '0')
  //
  //          $('.close-project').attr('tabindex', '-1')
  //          $('.close-project').attr('aria-hidden', 'true')
  //
  //          $( ".box-outer" ).animate({
  //            'margin-left': "0px",
  //            'margin-right': '0px'
  //          }, 160, function() {
  //
  //          });
  //
  //          setTimeout(function() {
  //            $( ".slideOutLeft" ).removeClass('open')
  //          }, 200)
	// 		})
  //
  //
	// 	});
  //
  //
	// });
