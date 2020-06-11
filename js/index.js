$(document).ready(function () {

	$('[data-toggle=tooltip]').tooltip();

	function scrollfn(e) {
		let $target = $(e),
			offSet = e === "#home" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');


	}


	$('.back-to-top').click(() => {
		scrollfn("#overview");
	})

	$(window).scroll(function () {
		((window.pageYOffset || document.documentElement.scrollTop) > 100) ? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) : $('.back-to-top').css({ opacity: 0, visibility: "hidden" });
	});

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li:not(:last-child)').on('click', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li:not(:last-child)').on('keypress', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});



	$(window).scroll(function () {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
		if (distanceY > 555) {
			$('.btnContact').css({
				top: "92px"
			})

		} else {
			$('.btnContact').css({
				top: "335px"
			})

		}
	});
	//create and append teacher divs with objects

	var teacher = {"teachers": [{
		"teacherId": '9999992-S01',
		"name": 'Zach Tyler',
		"type": "Primary",
		"status": "<i class='fal fa-spinner'></i>In Progress",
		"percentage": 50,
		"date": "3/15/20",
		"launch": "<i class='fas fa-file-export darkBlue'></i>"
	},

	{
		"teacherId": '7999994-S01',
		"name": 'Jack De Sena',
		"type": "Special Ed",
		"status": "Not Started",
		"percentage": 0,
		"date": "--",
		"launch": "<i class='fas fa-file-export darkBlue'></i>"
	},

	{
		"teacherId": '9676994-S01',
		"name": 'Mae Whitman',
		"type": "Primary",
		"status": "Complete",
		"percentage": 100,
		"date": "3/15/20",
		"launch": "<i class='fas fa-check lime'></i>"
	},

	{
		"teacherId": '9676994-S01',
		"name": 'John Smith',
		"type": "Special Ed",
		"status": "<i class='fal fa-spinner'></i>In Progress",
		"percentage": 75,
		"date": "3/15/20",
		"launch": "<i class='fas fa-file-export darkBlue'></i>"
	}

]

};



for(var j in teacher.teachers) {

	$('.teacherBlocks').append(`<div class='teacher newBlocks d-flex align-items-center flex-wrap'><div class="col-lg-2"><p class="black" id="teacherId">${teacher.teachers[j].teacherId}</p></div><div class="col-lg-2"><p class="black" id="teacherName">${teacher.teachers[j].name}</p></div><div class="col-lg-2"><p class="black" id="teacherType">${teacher.teachers[j].type}</p></div><div class="col-lg-2"><p class="black" id="teacherStatus">${teacher.teachers[j].status}</p></div><div class="col-lg-2"><div class="percentageCircle"><p class="black teacherComplete">${teacher.teachers[j].percentage}</p></div></div><div class="col-lg-1 margin2"><p class="black" id="teacherDate">${teacher.teachers[j].date}</p></div><div class="col-lg-1"><div id="launchStatus">${teacher.teachers[j].launch}</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>`)


}


//create and append child divs with objects


var child = {"children": [{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'Mae Whitman',
	"type": "Primary",
	"status": "Complete",
	"percentage": 100,
	"date": "3/15/20",
	"launch": "<i class='fas fa-check lime'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'Mae Whitman',
	"type": "Primary",
	"status": "Complete",
	"percentage": 100,
	"date": "3/15/20",
	"launch": "<i class='fas fa-check lime'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'Mae Whitman',
	"type": "Primary",
	"status": "Complete",
	"percentage": 100,
	"date": "3/15/20",
	"launch": "<i class='fas fa-check lime'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'Mae Whitman',
	"type": "Primary",
	"status": "Complete",
	"percentage": 100,
	"date": "3/15/20",
	"launch": "<i class='fas fa-check lime'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'Mae Whitman',
	"type": "Primary",
	"status": "Complete",
	"percentage": 100,
	"date": "3/15/20",
	"launch": "<i class='fas fa-check lime'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},

{
	"childId": '9676994-S01',
	"name": 'John Smith',
	"type": "Special Ed",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 75,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '9999992-S01',
	"name": 'Zach Tyler',
	"type": "Primary",
	"status": "<i class='fal fa-spinner'></i>In Progress",
	"percentage": 50,
	"date": "3/15/20",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
},
{
	"childId": '7999994-S01',
	"name": 'Jack De Sena',
	"type": "Special Ed",
	"status": "Not Started",
	"percentage": 0,
	"date": "--",
	"launch": "<i class='fas fa-file-export darkBlue'></i>"
}


]

};


for(var j in child.children) {

	$('.childBlocks').append(`<div class='child newBlocks d-flex align-items-center flex-wrap'><div class="col-lg-2"><p class="black" id="childId">${child.children[j].childId}</p></div><div class="col-lg-2"><p class="black" id="childName">${child.children[j].name}</p></div><div class="col-lg-2"><p class="black" id="childType">${child.children[j].type}</p></div><div class="col-lg-2"><p class="black" id="childStatus">${child.children[j].status}</p></div><div class="col-lg-2"><div class="percentageCircle"><p class="black childComplete">${child.children[j].percentage}</p></div></div><div class="col-lg-1 margin2"><p class="black" id="childDate">${child.children[j].date}</p></div><div class="col-lg-1"><div id="launchStatus">${child.children[j].launch}</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>`)

}


//change colors of the percentage circles and progress bars

var Opt01 = "";
$('.teacherComplete , .childComplete').each(function() {
	Opt01 = $(this).html();

if ($(this).html() == 75) {
	$(this).closest('.col-lg-2').find('.percentageCircle').css('background', '#fbb03b')
	$(this).closest('.newBlocks').find('.progressBarFull').css({
		'background' : '#fbb03b',
		'width': '75%'
	})
}

if ($(this).html() == 100) {
	$(this).closest('.col-lg-2').find('.percentageCircle').css('background', '#71d82e')
	$(this).closest('.newBlocks').find('.progressBarFull').css({
		'background' : '#71d82e',
		'width': '100%'
	})
}

if ($(this).html() == 50) {
	$(this).closest('.col-lg-2').find('.percentageCircle').css('background', '#fc7b75')
	$(this).closest('.newBlocks').find('.progressBarFull').css({
		'background' : '#fc7b75',
		'width': '50%'
	})
}

if ($(this).html() == 0) {
	$(this).closest('.col-lg-2').find('.percentageCircle').css( {
		'background': '#f7ebe7',
		'border': '2px solid #fc7b75'
	})
}

});


$('.newBlocks').addClass('hidden')
$(function () {
		x=10
    $('.newBlocks').slice(0, 14).removeClass('hidden')
    $('.loadMore').on('click', function (e) {
        e.preventDefault();

        x = x+14;
        $('.newBlocks').slice(0, x).slideDown('slow').removeClass('hidden');
    });

		$('.loadAll').on('click', function (e) {
				e.preventDefault();
				$('.newBlocks').slideDown('slow').removeClass('hidden');
				$('.loadMore, .flip').hide()
				$('.loadAll p').addClass('all').html('show less')
		});

		$('.loadAll p').click(function() {
			if ($(this).hasClass('all')) {

				  $('.newBlocks').slideUp().addClass('hidden');
					$('.loadAll p').removeClass('all')
			}

		})

});




new WOW().init();

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$('.radio-inline input').on('keyup', function(e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9 ) {
		$('.radio-inline input').change(function (e) {
			setReasonActive();
		})

		function setReasonActive() {
			$('.radio-inline input').each(function () {
				if ($(this).prop('checked')) {
						$(this).parents('.vertical').css('background' ,'#fbb03b');
				} else {
					$(this).parents('.vertical').css( 'background' ,'transparent')
				}
			})
		}
		setReasonActive()
	}
})


$('.radio-inline input').change(function (e) {
	setReasonActive();

})

function setReasonActive() {
	$('.radio-inline input').each(function () {
		if ($(this).prop('checked')) {
			$(this).closest('.vertical').find('.fas , label').css({
				'color':'#071D49',
				'font-weight': '600'
			})
			$(this).parents('.vertical').css('background' ,'#fbb03b');

		} else {
			$(this).parents('.vertical').css( 'background' ,'transparent')
			$(this).closest('.vertical').find('label').css({
				'color': 'white',
				'font-weight': '100'
			})
			$(this).closest('.vertical').find('.fas').css('color', '#fbb03b')
		}
	})
}

setReasonActive()

$('.menu-buttons-floating-list li:eq(0)').addClass('activated')

if ($(document).innerWidth() >= 768) {
	$(window).on('scroll', function() {
		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function() {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if ((screenBottom > elementTop + ($(this).find('.heros').height() / 5 )) && (screenTop < elementBottom)) {
				$('section').removeClass('active')
				$(this).addClass('active')
			}
			else {
				$(this).removeClass('active')
			}
		})


		if ($('.block10').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(0)').addClass('activated')
			$('.menu-buttons-768-list li:eq(0)').addClass('activated')
		}

		else {
			$('.menu-buttons-floating-list li:eq(0)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
		}


		if ($('.block5').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(1)').addClass('activated')
			$('.menu-buttons-768-list li:eq(1)').addClass('activated')
		}

		else {
			$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
		}


		if ($('.block50').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(3)').addClass('activated')
			$('.menu-buttons-768-list li:eq(2)').addClass('activated')
		}

		else {
			$('.menu-buttons-floating-list li:eq(3)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
		}

		// if ($('.block0').hasClass('active')) {
		// 	$('.menu-buttons-floating-list li:eq(0)').removeClass('activated')
		// 	$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
		// 	$('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
		// 	$('.menu-buttons-floating-list li:eq(3)').removeClass('activated')
		//
		//
		// 	$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
		// }
		//
		// if ($('.block50').hasClass('active')) {
		//
		// 	$('#slideOut').addClass('showSlideOut');
		//
		// }
		//
		// if (!$('.block50').hasClass('active') || $('.block5').hasClass('active')) {
		//
		// 	$('#slideOut').removeClass('showSlideOut')
		// }

	})


}

if ($(document).innerWidth() <= 767) {

	$(window).on('scroll', function() {
		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function() {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3 )) && (screenTop < elementBottom)) {
				$('section').removeClass('active')
				$(this).addClass('active')
			}
			else {
				$(this).removeClass('active')
			}
		})
		if ($('.block10').hasClass('active')) {

			$('.menu-buttons-768-list li:eq(0)').addClass('activated')
		}

		else {

			$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
		}


		if ($('.block5').hasClass('active')) {

			$('.menu-buttons-768-list li:eq(1)').addClass('activated')
		}

		else {

			$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
		}


		if ($('.block50').hasClass('active')) {

			$('.menu-buttons-768-list li:eq(2)').addClass('activated')
		}

		else {

			$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
		}

		if ($('.block0').hasClass('active')) {

			$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
		}


	})

	$('.landing-panel .form-control.access').focus(function () {
		$('html, body').animate({ scrollTop: ($('.landing-panel .form-control.access').offset().top - 40) }, 600);
		return false;
	});


	$("#slideOut").css("left" , 0);

	$('#slideOut').removeClass('showSlideOut')

	$("#slideOut").css("bottom" , -$('#slideOut').height() );

	var overlay = document.getElementById('whiteBlock');

	$(window).on("scroll", function() {
		var docHeight = $(document).height();
		var winScrolled = $(window).height() + $(window).scrollTop(); // Sum never quite reaches
		if ((docHeight - winScrolled) > 1) {

			var setHeight = $("#contact").height() + 25;

			$("#slideOut").animate({
				bottom:'75',
				top: setHeight

			}, 10);

		}


	});


}



$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

	e.preventDefault();
	scrollfn($(this).attr('data-target'));
});


$('.menu-buttons-floating li').click(function() {
	$(this).addClass('activated')
})



$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

	e.preventDefault();
	scrollfn($(this).attr('data-target'));
});


$('.tooltips-elements')
.tooltip()
.each(function() {
	var color = $(this).data('color');
	$(this).hover(function(){
		var aria = $(this).attr('aria-describedby');
		$('#' + aria).find('.tooltip-inner').css({
			"background": color,
			"color" : "black",

			"box-shadow" : "0px 0px 19px -1px rgba(175,175,175,0.67)",

		});
		$('#' + aria).find('.tooltip-arrow').css({
			"border-top-color" : color,
			"border-bottom-color" : color,
			"background": color,

		});
	});
});


var slideIt = function() {

	if($(".toggleDiv").is(':visible')) {
		$('.tooltips-elements').attr("data-original-title", "see more" );

		$(".toggleDiv").slideUp();

	}

	else if ($(".toggleDiv").is(':hidden')){
		$('.tooltips-elements').attr("data-original-title", "see less" );

		$(".toggleDiv").slideDown();
	}

}

$('.seeLess').keypress(
	slideIt

).click(
	slideIt
);

$("input").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})
$("input").on('focusout', function() {
	$(this).css('outline', 'none')
})

$(".form-check").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$('.form-check').each(function() {
			$(this).addClass('focusClass')
		});

	}

})


$("button").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})
$("button").on('focusout', function() {
	$(this).css('outline', 'none')
})

$("a").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})
$("a").on('focusout', function() {
	$(this).css('outline', 'none')
})

$('.tooltips-elements').on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})
$('.tooltips-elements').on('focusout', function() {
	$(this).css('outline', 'none')
})



 var open = function() {

	$('#theform input').each(function () {
		$(this).attr('tabindex', '0');
	});
	$('.radio-inline input').each(function () {
		$(this).attr('tabindex', '0');
	});

	$('.form-control').attr('tabindex', '0');

	$('#closeThisPlease').attr('tabindex', '0');

	$('.dial').attr('tabindex', '0');
	$('#send').attr('tabindex', '0');

	$('.modal-content').addClass('opened')
	$("#slideOut").addClass('showSlideOut');

}
$('#one').keypress(
	open

).click(
	open
);



var close = function() {
    $('#theform input').each(function () {
      $(this).attr('tabindex', '-1');
    });

    $('.radio-inline input').each(function () {
      $(this).attr('tabindex', '-1');
    });

    $('.form-control').attr('tabindex', '-1');

    $('#closeThisPlease').attr('tabindex', '-1');

    $('.dial').attr('tabindex', '-1');
    $('#send').attr('tabindex', '-1');

    $('.firstBlock').addClass('unset');

    $("#slideOut").removeClass('showSlideOut');


	}

		$('#close').keypress(
			close

		).click(
			close
		);


$("#one").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})
$("#one").on('focusout', function() {
	$(this).css('outline', 'none')
})

$("#closeThisPlease").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})
$("#closeThisPlease").on('focusout', function() {
	$(this).css('outline', 'none')
})



$('#sendMessage').click(function (e) {


		$("#slideOut").removeClass('showSlideOut');
		// $('.blueTab').show();

		e.preventDefault()

		setTimeout(function () {
			$('.toast').css('right', '0px')
			$('.toast').removeClass('transparent-opacity').addClass('animated slideInRight')
		}, 300)

		setTimeout(function () {
			$('.toast').removeClass('transparent-opacity').removeClass('animated slideInRight')
			$('.toast').addClass('transparent-opacity');
			$('.toast').removeClass('animated slideOutRight')

		}, 5000)
		setTimeout(function () {
			$('.toast').css('right', '-325px')
			$('.toast').addClass('animated slideOutRight')
		}, 4900)



});




})
