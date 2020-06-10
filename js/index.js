$(document).ready(function () {

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
	"date": "3/15/20",
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

// var percentageProperty = "percentage";
// var percentage = teacher[percentageProperty];
//
//
//
// if ($(percentage).length > 1) {
// 	alert('yes')
// }

// f9af48


for(var j in teacher.teachers) {

$('.teacherBlocks').append(`<div class='teacher d-flex align-items-center flex-wrap'><div class="col-lg-2"><p class="black" id="teacherId">${teacher.teachers[j].teacherId}</p></div><div class="col-lg-2"><p class="black" id="teacherName">${teacher.teachers[j].name}</p></div><div class="col-lg-2"><p class="black" id="teacherType">${teacher.teachers[j].type}</p></div><div class="col-lg-2"><p class="black" id="teacherStatus">${teacher.teachers[j].status}</p></div><div class="col-lg-2"><div class="percentageCircle"><p class="black" id="teacherComplete">${teacher.teachers[j].percentage}%</p></div></div><div class="col-lg-1 margin2"><p class="black" id="teacherDate">${teacher.teachers[j].date}</p></div><div class="col-lg-1"><div id="launchStatus">${teacher.teachers[j].launch}</div></div><div class='progressBar'></div></div>`)



// if (teacher.teachers[j].percentage > 50 && teacher.teachers[j].percentage <= 75 ) {
//
// $('.percentageCircle').css('background', 'f9af48')
//
//
// }
//
//
//
		 $(teacher.teachers[j].percentage).each(function() {
				var thing = $(this)

			if ($(thing).text() > 50 && $(thing).text() <= 75 ) {
				alert("ergiub")
			}

		})


}

// var num = document.getElementById('teacherComplete').innerHTML;
// var amount = parseInt(num);
//
// $(amount).each(function() {
// console.log(amount)
//
// if ($(amount).val() == 50 ) {
//
// $('.percentageCircle').css('background', 'f9af48')
// alert("ergiyb")
//
// }
//
//
// })



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
	"date": "3/15/20",
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
}

]

};

// var percentageProperty = "percentage";
// var percentage = teacher[percentageProperty];
//
//
//
// if ($(percentage).length > 1) {
// 	alert('yes')
// }

// f9af48


for(var j in child.children) {

$('.childBlocks').append(`<div class='child d-flex align-items-center flex-wrap'><div class="col-lg-2"><p class="black" id="childId">${child.children[j].childId}</p></div><div class="col-lg-2"><p class="black" id="childName">${child.children[j].name}</p></div><div class="col-lg-2"><p class="black" id="childType">${child.children[j].type}</p></div><div class="col-lg-2"><p class="black" id="childStatus">${child.children[j].status}</p></div><div class="col-lg-2"><div class="percentageCircle"><p class="black" id="childComplete">${child.children[j].percentage}%</p></div></div><div class="col-lg-1 margin2"><p class="black" id="childDate">${child.children[j].date}</p></div><div class="col-lg-1"><div id="launchStatus">${child.children[j].launch}</div></div><div class='progressBar'></div></div>`)



// if (teacher.teachers[j].percentage > 50 && teacher.teachers[j].percentage <= 75 ) {
//
// $('.percentageCircle').css('background', 'f9af48')
//
//
// }
//
//
//
		 $(teacher.teachers[j].percentage).each(function() {
				var thing = $(this)

			if ($(thing).text() > 50 && $(thing).text() <= 75 ) {
				alert("ergiub")
			}

		})


}


new WOW().init();


const prefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersColorSchemeDark.matches) {

}


$('.radio-inline input').on('keyup', function(e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9 ) {
		$('.radio-inline input').change(function (e) {
			setReasonActive();
		})

		function setReasonActive() {
			$('.radio-inline input').each(function () {
				if ($(this).prop('checked')) {
					$(this).parents('.vertical').css('background' ,'#166da1');
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
			$(this).closest('.vertical').find('.fas').css('color', '#7bc043')
			$(this).parents('.vertical').css('background' ,'#166da1');

		} else {
			$(this).parents('.vertical').css( 'background' ,'transparent')
			$(this).closest('.vertical').find('.fas').css('color', 'white')
		}
	})
}

setReasonActive()



if ($(document).innerWidth() >= 768) {
	$(window).on('scroll', function() {
		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function() {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if ((screenBottom > elementTop + ($(this).find('.heros').height() - 300 )) && (screenTop < elementBottom)) {
				$('section').removeClass('active')
				$(this).addClass('active')
			}
			else {
				$(this).removeClass('active')
			}
		})


		if ($('.block10').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(1)').addClass('activated')
			$('.menu-buttons-768-list li:eq(0)').addClass('activated')
		}

		else {
			$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
		}


		if ($('.block5').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(2)').addClass('activated')
			$('.menu-buttons-768-list li:eq(1)').addClass('activated')
		}

		else {
			$('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
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

		if ($('.block0').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(0)').removeClass('activated')
			$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
			$('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
			$('.menu-buttons-floating-list li:eq(3)').removeClass('activated')


			$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
		}

		if ($('.block50').hasClass('active')) {

			$('#slideOut').addClass('showSlideOut');

		}

		if (!$('.block50').hasClass('active') || $('.block5').hasClass('active')) {

			$('#slideOut').removeClass('showSlideOut')
		}

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



	$('.pin').attr('src',"images/pin-mobile.svg")
	$('.reward').attr('src',"images/Reward-mobile.svg")

	$('.select').attr('src',"images/Select-answer-mobile.svg")
	$('.next').attr('src',"images/Next-back-mobile.svg")
	$('.submit').attr('src',"images/Submit-mobile.svg")

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


function scrollfn(e) {
	let $target = $(e),
	offSet = e === "#Home" ? 0 : $target.offset().top;
	$('html, body').stop().animate({
		'scrollTop': offSet
	}, 1200, 'swing');

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



})
