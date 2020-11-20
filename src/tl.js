$('document').ready(function(){

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
					mode:
					{
						required: true
					},
					date:
					{
						required: true


					},
					time:
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
					info1:
					{
						required: true


					},
					info2:
					{
						required: true


					},
					info3:
					{
						required: true


					},
					item:
					{
						required: true
					}

				}

			});





			$('.saveInformation').click( function(e) {

				e.preventDefault()
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


			var form = $(".erocs");
			form.validate();
			form.on("submit", function (e) {
				if(!form.valid()) {
					return false;
				}
				e.preventDefault();
				$('#eRocModal').modal('hide')
			});



			$(".datepicker").datepicker({
				container:'#eRocModal',
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
			$(".timepicker").datetimepicker({
				format: "LT",
				icons: {
					up: "fa fa-chevron-up",
					down: "fa fa-chevron-down"
				}
			});




			$("#result").change(function() {

				if ($(this).val() == 'ten') {
					$('.erocs .lightGrayBox').show()
				}


			})

			$('.disabledSave').attr('disabled','disabled')

			$('.informationForm .form-control').keydown(function (event) {
				if (!$('.form-control').val() == '')  {


				}

				if ($('.informationForm .form-control').val() == '')  {

					$('.saveInformation').removeClass('lightGrayBox').addClass('greenButton')
					$('.disabledSave').removeAttr('disabled','disabled')

				}

			})

			// document.querySelector(".saveInformation").addEventListener("click", function() {
			// 	swal({
			// 		title: "Are you sure you want to save?",
			//
			// 		showCancelButton: true,
			// 		confirmButtonText: "SAVE",
			// 		confirmButtonColor: "#00843D",
			// 		cancelButtonColor: "#999999",
			// 		reverseButtons: true,
			// 		focusConfirm: true,
			// 		focusCancel: false
			// 	});
			// });
			//
			//
			// $('.swal2-confirm swal2-styled').click(function() {
			//
			// })

			var removeError = function() {

				if($(".mode .error").is(':visible')) {

					$(".mode .error").hide()

				}

				if ($(".mode .error").is(':hidden')){

				}

			}

			$('.mode .btn').keypress(
				removeError

			).click(
				removeError
			);





			// $(window).bind('beforeunload', function() {
			//     	if ($('.form-control').val() == '')  {
			//   						return 'Are you sure you want to leave?';
			//
			// 				}
			//
			// });



			// window.onbeforeunload = function(e) {
			//
			// };


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


		})
