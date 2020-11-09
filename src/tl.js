//validate TL info

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

	//save form button outside the <form> tag


	$('.saveInformation').click( function() {

		$(".informationForm").trigger('submit');


	});


  	var negative = -$(".box-outer").width()


	$(function() {
		$('.tlModals').on('shown.bs.modal, loaded.bs.modal', function(e) {
			// set form state
			$(this).data('form-data', $(this).find('form').serialize());
		});

		$('.tlModals').on('hide.bs.modal', function(e) {
			e.preventDefault()
			// check if the form data was changed since the modal was openened
			if($(this).data('form-data') != $(this).find('form').serialize(e)) {


				if(!
					// confirm('Are you sure you want to leave without saving your information?')

					// 	swal('Are you sure you want to leave without saving your information?'), {
					//
					// 		buttons: true,
					// 	  dangerMode: true
					// })



					swal({
						title: "You haven’t saved. Are you sure you want to exit?",
						buttons: true

					})

				)


				{
					e.preventDefault();
				}



			}

      else {
        alert("3333wefiygewb")
      }

			$('.swal-button.swal-button--confirm').click(function() {
				 $('.tlModals').unbind();
				 $('.tlModals').modal('hide');
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

           $('.save-floating').hide()


           e.stopPropagation()

           $( ".slideOutLeft" ).animate({
             width: "0",
             opacity: '0'
           }, 160, function() {

           });

           $('#slideOutRight').css('z-index', '10')
           $('.projects').attr('tabindex', '0')

           $('.close-project').attr('tabindex', '-1')
           $('.close-project').attr('aria-hidden', 'true')

           $( ".box-outer" ).animate({
             'margin-left': "0px",
             'margin-right': '0px'
           }, 160, function() {

           });

           setTimeout(function() {
             $( ".slideOutLeft" ).removeClass('open')
           }, 200)
			})


		});


	});
