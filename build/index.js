'use strict';

$(document).ready(function () {

	$('[data-toggle=tooltip]').tooltip();

	$('.back-to-top').click(function () {
		scrollfn("#overview");
	});

	$(window).scroll(function () {
		(window.pageYOffset || document.documentElement.scrollTop) > 100 ? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) : $('.back-to-top').css({ opacity: 0, visibility: "hidden" });
	});

	function scrollfn(e) {
		var $target = $(e),
		    offSet = e === "#overview" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');
	}

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	//create and append teacher divs with objects

	var teacher = { "teachers": [{
			"teacherId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"teacherId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"teacherId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"teacherId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}]

	};

	for (var j in teacher.teachers) {

		$('.teacherBlocks').append('<div class=\'teacher newBlocks d-flex align-items-center flex-wrap\'><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">TEACHER ID</div><p class="black" id="teacherId">' + teacher.teachers[j].teacherId + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">TEACHER NAME</div><p class="black" id="teacherName">' + teacher.teachers[j].name + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">TYPE</div><p class="black" id="teacherType">' + teacher.teachers[j].type + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">STATUS</div><p class="black" id="teacherStatus">' + teacher.teachers[j].status + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">% COMPLETE</div><div class="percentageCircle"><p class="black teacherComplete">' + teacher.teachers[j].percentage + '</p></div></div><div class="col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2"><div class="mobile">DATE LAST ACCESSED</div><p class="black" id="teacherDate">' + teacher.teachers[j].date + '</p></div><div class="col-lg-1 col-md-6 col-sm-6 col-xs-6"><div class="mobile">LAUNCH</div><div id="launchStatus">' + teacher.teachers[j].launch + '</div></div><div class=\'progressBarEmpty\'></div><div class=\'progressBarFull\'></div></div>');
	}

	//create and append child divs with objects

	var child = { "children": [{
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-file-export darkBlue'></i>"
		}]

	};

	for (var j in child.children) {

		$('.childBlocks').append('<div class=\'child newBlocks d-flex align-items-center flex-wrap\'><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">CHILD ID</div><p class="black" id="childId">' + child.children[j].childId + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">CHILD NAME</div><p class="black" id="childName">' + child.children[j].name + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">TYPE</div><p class="black" id="childType">' + child.children[j].type + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">STATUS</div><p class="black" id="childStatus">' + child.children[j].status + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">% COMPLETE</div><div class="percentageCircle"><p class="black childComplete">' + child.children[j].percentage + '</p></div></div><div class="col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2"><div class="mobile">DATE LAST ACCESSED</div><p class="black" id="childDate">' + child.children[j].date + '</p></div><div class="col-lg-1 col-md-6 col-sm-6 col-xs-6"><div class="mobile">LAUNCH</div><div id="launchStatus">' + child.children[j].launch + '</div></div><div class=\'progressBarEmpty\'></div><div class=\'progressBarFull\'></div></div>');
	}

	//create and append child divs with objects

	var child = { "childrenComplete": [{

			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}] };

	for (var j in child.childrenComplete) {

		$('.childBlocksComplete').append('<div class=\'child newBlocks d-flex align-items-center flex-wrap\'><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">CHILD ID</div><p class="black" id="childId">' + child.childrenComplete[j].childId + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">CHILD NAME</div><p class="black" id="childName">' + child.childrenComplete[j].name + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">TYPE</div><p class="black" id="childType">' + child.childrenComplete[j].type + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">STATUS</div><p class="black" id="childStatus">' + child.childrenComplete[j].status + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">% COMPLETE</div><div class="percentageCircle"><p class="black childComplete">' + child.childrenComplete[j].percentage + '</p></div></div><div class="col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2"><div class="mobile">DATE LAST ACCESSED</div><p class="black" id="childDate">' + child.childrenComplete[j].date + '</p></div><div class="col-lg-1 col-md-6 col-sm-6 col-xs-6"><div class="mobile">LAUNCH</div><div id="launchStatus">' + child.childrenComplete[j].launch + '</div></div><div class=\'progressBarEmpty\'></div><div class=\'progressBarFull\'></div></div>');
	}

	var teacher = { "teachersComplete": [{

			"teacherId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}]

	};

	for (var j in teacher.teachersComplete) {

		$('.teacherBlocksComplete').append('<div class=\'teacher newBlocks d-flex align-items-center flex-wrap\'><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">TEACHER ID</div><p class="black" id="teacherId">' + teacher.teachersComplete[j].teacherId + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">TEACHER NAME</div><p class="black" id="teacherName">' + teacher.teachersComplete[j].name + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">TYPE</div><p class="black" id="teacherType">' + teacher.teachersComplete[j].type + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">STATUS</div><p class="black" id="teacherStatus">' + teacher.teachersComplete[j].status + '</p></div><div class="col-lg-2 col-md-6 col-sm-6 col-xs-6"><div class="mobile">% COMPLETE</div><div class="percentageCircle"><p class="black teacherComplete">' + teacher.teachersComplete[j].percentage + '</p></div></div><div class="col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2"><div class="mobile">DATE LAST ACCESSED</div><p class="black" id="teacherDate">' + teacher.teachersComplete[j].date + '</p></div><div class="col-lg-1 col-md-6 col-sm-6 col-xs-6"><div class="mobile">LAUNCH</div><div id="launchStatus">' + teacher.teachersComplete[j].launch + '</div></div><div class=\'progressBarEmpty\'></div><div class=\'progressBarFull\'></div></div>');
	}

	//change colors of the percentage circles and progress bars

	var Opt01 = "";
	$('.teacherComplete , .childComplete , .childBlocksComplete, .teacherBlocksComplete').each(function () {
		Opt01 = $(this).html();

		if ($(this).html() > 50 && $(this).html() <= 75) {
			$(this).closest('.col-lg-2').find('.percentageCircle').css('background', '#fbb03b');
			$(this).closest('.newBlocks').find('.progressBarFull').css({
				'background': '#fbb03b',
				'width': '75%'
			});
		}

		if ($(this).html() > 75 && $(this).html() <= 100) {
			$(this).closest('.col-lg-2').find('.percentageCircle').css('background', '#71d82e');
			$(this).closest('.newBlocks').find('.progressBarFull').css({
				'background': '#71d82e',
				'width': '100%'
			});
		}

		if ($(this).html() > 25 && $(this).html() <= 50) {
			$(this).closest('.col-lg-2').find('.percentageCircle').css('background', '#fc7b75');
			$(this).closest('.newBlocks').find('.progressBarFull').css({
				'background': '#fc7b75',
				'width': '50%'
			});
		}

		if ($(this).html() >= 0 && $(this).html() <= 25) {
			$(this).closest('.col-lg-2').find('.percentageCircle').css({
				'background': '#f7ebe7',
				'border': '2px solid #fc7b75'
			});
		}
	});

	$('.newBlocks').addClass('hidden');

	var x = 10;
	$('.newBlocks').slice(0, 14).removeClass('hidden');
	$('.loadMore').on('click', function (e) {
		e.preventDefault();

		x = x + 14;
		$('.newBlocks').slice(0, x).slideDown('slow').removeClass('hidden');
	});

	$('.loadAll').on('click', function (e) {
		e.preventDefault();
		$('.newBlocks').slideDown('slow').removeClass('hidden');
		$('.loadMore, .flip').hide();
		$('.loadAll p').addClass('all').hide();
	});

	$('.loadAll').on('keyup', function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			e.preventDefault();
			$('.newBlocks').slideDown('slow').removeClass('hidden');
			$('.loadMore, .flip').hide();
			$('.loadAll p').addClass('all').hide();
		}
	});

	$('.loadMore').on('keyup', function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			e.preventDefault();

			x = x + 14;
			$('.newBlocks').slice(0, x).slideDown('slow').removeClass('hidden');
		}
	});

	new WOW().init();

	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	$('.radio-inline input').on('keyup', function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			var _setReasonActive = function _setReasonActive() {
				$('.radio-inline input').each(function () {
					if ($(this).prop('checked')) {
						$(this).parents('.vertical').css('border', '3px solid #fbb03b');
					} else {
						$(this).parents('.vertical').css('border', 'none');
					}
				});
			};

			$('.radio-inline input').change(function (e) {
				_setReasonActive();
			});

			_setReasonActive();
		}
	});

	$('.radio-inline input').change(function (e) {
		setReasonActive();
	});

	function setReasonActive() {
		$('.radio-inline input').each(function () {
			if ($(this).prop('checked')) {
				$(this).closest('.vertical').find('label').css({
					'color': 'white',
					'font-weight': '300'
				});
				$(this).closest('.vertical').find('.fas').css({
					'color': '	#fed439',
					'font-weight': '700'
				});

				$(this).parents('.vertical').css('border', '3px solid #fbb03b');
			} else {
				$(this).parents('.vertical').css('border', 'none');
				$(this).closest('.vertical').find('label').css({
					'color': 'white',
					'font-weight': '100'
				});
				$(this).closest('.vertical').find('.fas').css('color', '#fbb03b');
			}
		});
	}

	setReasonActive();

	if ($('.menu-buttons-768-list li').length > 3) {
		$(this).css('width', '25%');
	} else {
		$(this).css('width', '33.33%');
	}

	$('li[data-target="#overview"]').addClass('activated');

	$("#two .nav-link").click(function () {

		$("#two .nav-link.selected").removeClass("selected");
		$(this).addClass("selected");
	});

	// // var high = $('.block-2000').height() + $('.block-3000').height() + 170
	// //
	// // console.log(high)
	// // // $('.wrapper').css({
	// // // 	'height' : high
	// // // })
	// // //
	// // // if ($(document).height() >= 1100 && $(document).innerWidth() >= 1500) {
	// // // 	var highest = $('.whiteBox').height() + 380
	// // // 	$('.wrapper').css({
	// // // 		'height' : highest
	// // // 	})
	// // //
	// // // }
	// //
	// // $('.animation').css('height', high )
	//
	// console.log($('.animation').height())

	$(window).on('scroll', function () {

		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function () {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if (screenBottom > elementTop + $(this).find('.heros').height() / 3 && screenTop < elementBottom) {
				$('section').removeClass('active');
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});

		if ($('.block-2000').hasClass('active')) {

			setTimeout(function () {
				$('.line1').removeClass('box-rotate');
			}, 600);
			setTimeout(function () {
				$('.line2').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 800);

			setTimeout(function () {
				$('.text1').removeClass('transparent-opacity').addClass('animated fadeInRight');
			}, 1700);

			setTimeout(function () {
				$('.text2').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 1900);

			setTimeout(function () {
				$('.green-circle').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 2100);

			setTimeout(function () {
				$('.flower').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 2200);

			setTimeout(function () {
				$('.line3').removeClass('box-rotate');
			}, 2400);
		}

		if ($('.block-3000').hasClass('active')) {

			setTimeout(function () {
				$('.line4').removeClass('box-rotate');
			}, 1200);

			setTimeout(function () {
				$('.text3').removeClass('transparent-opacity').addClass('animated fadeInLeft');
			}, 1700);

			setTimeout(function () {
				$('.text4').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 1800);

			setTimeout(function () {
				$('.green-circle2').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 2000);

			setTimeout(function () {
				$('.house').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 2400);

			setTimeout(function () {
				$('.line5').removeClass('box-rotate');
			}, 2600);

			setTimeout(function () {
				$('.line6').removeClass('box-rotate');
			}, 2800);

			setTimeout(function () {
				$('.text5').removeClass('transparent-opacity').addClass('animated fadeInLeft');
			}, 3200);

			setTimeout(function () {
				$('.text6').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 3400);

			setTimeout(function () {
				$('.green-circle3').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 3600);

			setTimeout(function () {
				$('.leaves').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 3800);

			setTimeout(function () {
				$('.text-last').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 4000);
		}

		if ($('.start').hasClass('active')) {

			$('li[data-target="#home"]').addClass('activated');
			$('li[data-target="#home"]').addClass('activated');
		} else {
			$('li[data-target="#home"]').removeClass('activated');
			$('li[data-target="#home"]').removeClass('activated');
		}

		if ($('.block10').hasClass('active')) {

			$('li[data-target="#overview"]').addClass('activated');
			$('li[data-target="#overview"]').addClass('activated');
		} else {
			$('li[data-target="#overview"]').removeClass('activated');
			$('li[data-target="#overview"]').removeClass('activated');
		}

		if ($('.top-section').hasClass('active') || $('.block10').hasClass('active') || $('.block-2000').hasClass('active') || $('.block-3000').hasClass('active')) {

			$('li[data-target="#participation"]').addClass('activated');
			$('li[data-target="#participation"]').addClass('activated');
		} else {
			$('li[data-target="#participation"]').removeClass('activated');
			$('li[data-target="#participation"]').removeClass('activated');
		}

		if ($('.block5').hasClass('active')) {

			$('li[data-target="#survey"]').addClass('activated');
			$('li[data-target="#survey"]').addClass('activated');
		} else {
			$('li[data-target="#survey"]').removeClass('activated');
			$('li[data-target="#survey"]').removeClass('activated');
		}

		if ($('.block20').hasClass('active')) {
			$('li[data-target="#feedback"]').addClass('activated');
			$('li[data-target="#feedback"]').addClass('activated');
		} else {
			$('li[data-target="#feedback"]').removeClass('activated');
			$('li[data-target="#feedback"]').removeClass('activated');
		}

		if ($('.block5').hasClass('active')) {
			$('li[data-target="#two"]').addClass('activated');
			$('li[data-target="#two"]').addClass('activated');
		} else {
			$('li[data-target="#two"]').removeClass('activated');
			$('li[data-target="#two"]').removeClass('activated');
		}

		if ($('.block55').hasClass('active')) {
			$('li[data-target="#three"]').addClass('activated');
			$('li[data-target="#three"]').addClass('activated');
		} else {
			$('li[data-target="#three"]').removeClass('activated');
			$('li[data-target="#three"]').removeClass('activated');
		}

		if ($('.block50').hasClass('active')) {
			$('li[data-target="#info"]').addClass('activated');
			$('li[data-target="#info"]').addClass('activated');
		} else {
			$('li[data-target="#info"]').removeClass('activated');
			$('li[data-target="#info"]').removeClass('activated');
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
	});

	// }


	if ($('.newBlocks').length < 10) {
		$('.showBlocks').children().hide();
	} else {
		$('.showBlocks').children().show();
	}

	if ($(document).innerWidth() <= 767) {

		// $('li[data-target="#home"]').addClass('activated')
		$('li[data-target="#overview"]').removeClass('activated');

		$('.logo:eq(1)').css({
			'max-width': '3em',
			'margin-left': '-.7em'
		});

		$('.openTab .plum').html('<i class="fas fa-envelope"></i>');
		$('#one').css('right', '-20px');

		$('.tangerineBox .plum').html('<i class="fas fa-user slate"></i>');
		$('.whiteBox .slate:eq(0)').html('<i class="fas fa-home slate"></i>');
		$('.whiteBox .slate.borderLeft').html('<i class="fas fa-sign-out-alt slate"></i>');
		$('.logo:eq(0)').attr('src', "images/ies-mobile.svg");
		$('.logo:eq(1)').attr('src', "images/ed-mobile.svg");

		$(window).on('scroll', function () {

			var screenTop = $(window).scrollTop();
			var screenBottom = $(window).scrollTop() + window.innerHeight;

			$('section').each(function () {
				var elementTop = $(this).offset().top;
				var elementBottom = $(this).offset().top + $(this).outerHeight();

				if (screenBottom > elementTop + $(this).find('.heros').height() / 5 && screenTop < elementBottom) {
					$('section').removeClass('active');
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});

			if ($('.block10').hasClass('active')) {

				$('li[data-target="#overview"]').addClass('activated');
				$('li[data-target="#overview"]').addClass('activated');
			} else {
				$('li[data-target="#overview"]').removeClass('activated');
				$('li[data-target="#overview"]').removeClass('activated');
			}

			if ($('.top-section').hasClass('active') || $('.block10').hasClass('active') || $('.block-2000').hasClass('active') || $('.block-3000').hasClass('active')) {

				$('li[data-target="#participation"]').addClass('activated');
				$('li[data-target="#participation"]').addClass('activated');
			} else {
				$('li[data-target="#participation"]').removeClass('activated');
				$('li[data-target="#participation"]').removeClass('activated');
			}

			if ($('.start').hasClass('active')) {

				$('li[data-target="#home"]').addClass('activated');
				$('li[data-target="#home"]').addClass('activated');
			} else {
				$('li[data-target="#home"]').removeClass('activated');
				$('li[data-target="#home"]').removeClass('activated');
			}

			if ($('.block5').hasClass('active')) {
				$('li[data-target="#two"]').addClass('activated');
				$('li[data-target="#two"]').addClass('activated');
			} else {
				$('li[data-target="#two"]').removeClass('activated');
				$('li[data-target="#two"]').removeClass('activated');
			}

			if ($('.block55').hasClass('active')) {
				$('li[data-target="#three"]').addClass('activated');
				$('li[data-target="#three"]').addClass('activated');
			} else {
				$('li[data-target="#three"]').removeClass('activated');
				$('li[data-target="#three"]').removeClass('activated');
			}

			// if ($('.block10').hasClass('active')) {
			//
			// 	$('li[data-target="#overview"]').addClass('activated')
			// 	$('li[data-target="#overview"]').addClass('activated')
			// }
			//
			// else {
			// 	$('li[data-target="#overview"]').removeClass('activated')
			// 	$('li[data-target="#overview"]').removeClass('activated')
			// }


			if ($('.block5').hasClass('active')) {
				$('li[data-target="#survey"]').addClass('activated');
				$('li[data-target="#survey"]').addClass('activated');
			} else {
				$('li[data-target="#survey"]').removeClass('activated');
				$('li[data-target="#survey"]').removeClass('activated');
			}

			if ($('.block20').hasClass('active')) {
				$('li[data-target="#feedback"]').addClass('activated');
				$('li[data-target="#feedback"]').addClass('activated');
			} else {
				$('li[data-target="#feedback"]').removeClass('activated');
				$('li[data-target="#feedback"]').removeClass('activated');
			}

			if ($('.block50').hasClass('active')) {
				$('li[data-target="#info"]').addClass('activated');
				$('li[data-target="#info"]').addClass('activated');
			} else {
				$('li[data-target="#info"]').removeClass('activated');
				$('li[data-target="#info"]').removeClass('activated');
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
		});
	}

	if ($(document).innerWidth() <= 320) {

		$('.logo:eq(1)').css({
			'max-width': '3em',
			'margin-left': '-.3em'
		});
	}

	$('.collapse').on('show.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(180deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "1"
		});
	});
	$('.collapse').on('hide.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(0deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "0.4"
		});
	});

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.menu-buttons-floating li').click(function () {
		$(this).addClass('activated');
	});

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.tooltips-elements').tooltip().each(function () {
		var color = $(this).data('color');
		$(this).hover(function () {
			var aria = $(this).attr('aria-describedby');
			$('#' + aria).find('.tooltip-inner').css({
				"background": color,
				"color": "black",

				"box-shadow": "0px 0px 19px -1px rgba(175,175,175,0.67)"

			});
			$('#' + aria).find('.tooltip-arrow').css({
				"border-top-color": color,
				"border-bottom-color": color,
				"background": color

			});
		});
	});

	var slideIt = function slideIt() {

		if ($(".toggleDiv").is(':visible')) {

			$('.blueLine span').html('expand');
			// $('.tooltips-elements').attr("data-original-title", "see more" );

			$(".toggleDiv").slideUp();
		} else if ($(".toggleDiv").is(':hidden')) {
			$('.blueLine span').html('collapse');
			// $('.tooltips-elements').attr("data-original-title", "see less" );

			$(".toggleDiv").slideDown();
		}
	};

	$('.blueLine').keypress(slideIt).click(slideIt);

	$("input").on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$("input").on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$(".form-check").on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$('.form-check').each(function () {
				$(this).addClass('focusClass');
			});
		}
	});

	$("button").on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$("button").on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$("a").on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$("a").on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$("button").on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$("button").on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$(".feedbackBar").on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$(".feedbackBar").on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$('li').attr('tabindex', '0').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$('li').attr('tabindex', '0').on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$('.tooltips-elements').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$('.tooltips-elements').on('focusout', function () {
		$(this).css('outline', 'none');
	});

	var open = function open() {

		$('.contactUsOverlay').show();

		$('#theform input').each(function () {
			$(this).attr('tabindex', '0');
		});
		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '0');
		});

		$('.form-control').attr('tabindex', '0');

		$('#closeThisPlease').attr('tabindex', '0');

		$('#sendMessage').attr('tabindex', '0');

		$('.modal-content').addClass('opened');
		$("#slideOut").addClass('showSlideOut');
		setTimeout(function () {
			$('body').addClass('showContact');
		}, 300);
	};
	$('#one').keypress(open).click(open);

	$('.contactUsOverlay').on('click', function (e) {

		if ($('body').hasClass('showContact')) {

			$('#theform input').each(function () {
				$(this).attr('tabindex', '-1');
			});

			$('.radio-inline input').each(function () {
				$(this).attr('tabindex', '-1');
			});

			$('.form-control').attr('tabindex', '-1');

			$('#closeThisPlease').attr('tabindex', '-1');

			$('#sendMessage').attr('tabindex', '-1');

			$("#slideOut").removeClass('showSlideOut');

			setTimeout(function () {
				$('body').removeClass('showContact');
			}, 300);
		}
	});

	var close = function close() {

		$('.contactUsOverlay').hide();
		$('#theform input').each(function () {
			$(this).attr('tabindex', '-1');
		});

		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '-1');
		});

		$('.form-control').attr('tabindex', '-1');

		$('#closeThisPlease').attr('tabindex', '-1');

		$('#sendMessage').attr('tabindex', '-1');

		$("#slideOut").removeClass('showSlideOut');
	};

	$('#close').keypress(close).click(close);

	$("#one, .skip, a, #closeThisPlease, .infoBar, button, input, [tabindex='0'], li").on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$("#one, .skip, a, #closeThisPlease, .infoBar, button, input, [tabindex='0'], li").on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$('.feedbackBar').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('#feedbackModal').modal('show');
		}
	});

	$('.privacy').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('#privacyModal').modal('show');
		}
	});

	$('#sendMessage').click(function (e) {

		$('#theform input').each(function () {
			$(this).attr('tabindex', '-1');
		});

		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '-1');
		});

		$('.form-control').attr('tabindex', '-1');

		$('#closeThisPlease').attr('tabindex', '-1');

		$('#sendMessage').attr('tabindex', '-1');

		$("#slideOut").removeClass('showSlideOut');
		e.preventDefault();

		setTimeout(function () {
			$('.toast').css('right', '0px');
			$('.toast').removeClass('transparent-opacity').addClass('animated slideInRight');
		}, 300);

		setTimeout(function () {
			$('.toast').removeClass('transparent-opacity').removeClass('animated slideInRight');
			$('.toast').addClass('transparent-opacity');
			$('.toast').removeClass('animated slideOutRight');
		}, 5000);
		setTimeout(function () {
			$('.toast').css('right', '-335px');
			$('.toast').addClass('animated slideOutRight');
		}, 4900);
	});

	$('.carousel').carousel();

	var items = $('.carousel-item').length - 1;

	console.log($('#feedbackModal .modal-dialog').width());

	var total = $('#feedbackModal .modal-dialog').width();

	var color = total / items;

	console.log(items);
	console.log(total);
	console.log(color);

	var l = 0;

	console.log(l);

	$('.next , .skip').click(function () {

		function increase() {
			l = l + color;
		}
		increase();

		console.log(l);

		$('.modalProgressBar').css({
			'background': '#71d82e',
			'width': l
		});
	});

	$('.back').click(function () {

		function decrease() {
			l = l - color;
		}
		decrease();
		console.log(l);

		$('.modalProgressBar').css({
			'background': '#71d82e',
			'width': l
		});
	});

	$('.skip').keypress(function (e) {

		if ((e.keyCode ? e.keyCode : e.which) == 13) {
			$(".carousel").carousel("next");
		}
	});

	$('.one input:checkbox').keypress(function (e) {
		e.preventDefault();
		if ((e.keyCode ? e.keyCode : e.which) == 13) {
			$(this).trigger('click');
		}
	});

	$('.form-check-input').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {

			$(this).parent().find('label').addClass('activate');
		}
	});

	$('.form-check-input').on('focusout', function () {
		$(this).parent().find('label').removeClass('activate');
	});

	$('.cc-selector input').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$('.cc-selector input').css('-webkit-appearance', 'radio');
		}
	});

	$('.next').click(function () {
		if ($('.next').hasClass('done')) {
			$('#feedbackModal').modal('hide');
		}
	});
	$('.next, .skip').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13 && $('.next').hasClass('done')) {

			$('#feedbackModal').modal('hide');
		}

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('#feedbackModal .close').focus().css('outline', 'dashed 3px #4599ff');
		}
	});

	function checkitem() {
		var $this = $('.carousel');

		if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
			$('.back').css('pointer-events', 'none');
		} else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
			// $('.next').css('pointer-events', 'none');
			$('.back, .skip').hide();
			$('.skip').css('pointer-events', 'none');
			$('.next').html("Done");
			$('.next').addClass('done');
		} else if ($('.carousel-inner .carousel-item:last').prev().hasClass('active')) {
			$('.next').html('Submit');
		} else {
			$('.next, .back, .skip').css('pointer-events', 'auto');
			$('.next').html('Next');
			$('.back, .skip').show();
			$('.next').removeClass('done');
		}
	}

	checkitem();

	$('.carousel').on('slid', '', checkitem); // on caroussel move
	$('.carousel').on('slid.bs.carousel', '', checkitem); // on carousel move

	$("label.card-cc").click(function (e) {
		e.preventDefault();
		var $check = $(this).prev();
		if ($check.prop('checked')) $check.prop("checked", false);else $check.prop("checked", true);
	});

	$(".card-cc").on("click", function (e) {
		$(".card-cc-checked").each(function (i) {
			$(this).removeClass("card-cc-checked");
		});
		$(this).toggleClass("card-cc-checked");
		e.preventDefault();
	});

	//spanish english

	var mainURL = window.location.href;

	$('#ingles').attr('href', mainURL);

	$(window).on('load', function () {
		if (mainURL.includes('googtrans(en|es)')) {

			$('li[data-target="#home"]').addClass('spanishAfter');
			$('li[data-target="#overview"]').addClass('spanishAfter');
			$('li[data-target="#two"]').addClass('spanishAfter');
			$('li[data-target="#three"]').addClass('spanishAfter');
		}
	});

	var mainURL = window.location.href;

	$('#ingles').attr('href', mainURL);

	// $(window).on('load', function() {
	// 			$('a').not('#espanol').prop('hash','#googtrans(en|en)');
	// })

	$('.spanish').on('click', function (e) {
		$('.spanish').addClass('blue');
		$('.english').addClass('clear');
		$('li[data-target="#home"]').addClass('spanishAfter');
		$('li[data-target="#overview"]').addClass('spanishAfter');
		$('li[data-target="#two"]').addClass('spanishAfter');
		$('li[data-target="#three"]').addClass('spanishAfter');
	});

	$('.english').on('click', function (e) {
		// e.preventDefault()
		$(this).removeClass('inactiveDot').addClass('activeDot');
		$('.spanish').removeClass('activeDot').addClass('inactiveDot');
		$('li[data-target="#home"]').removeClass('spanishAfter');
		$('li[data-target="#overview"]').removeClass('spanishAfter');
		$('li[data-target="#two"]').removeClass('spanishAfter');
		$('li[data-target="#three"]').removeClass('spanishAfter');
	});

	// $('.spanish').on('keyup', function(e) {
	//
	// 	var code = (e.keyCode ? e.keyCode : e.which);
	// 	if (code == 13 ) {
	// 		$(this).removeClass('inactiveDot').addClass('activeDot')
	// 		$('.english').removeClass('activeDot').addClass('inactiveDot')
	//
	// 	}
	//
	// })
	//
	//
	// $('.english').on('keyup', function(e) {
	// 	var code = (e.keyCode ? e.keyCode : e.which);
	// 	if (code == 13 ) {
	// 		$(this).removeClass('inactiveDot').addClass('activeDot')
	// 		$('.spanish').removeClass('activeDot').addClass('inactiveDot')
	//
	// 	}
	//
	// })


	var version = detectIE();

	if (version === false) {} else if (version >= 12) {} else {
		$('#myModal2').modal('show');
	}

	function detectIE() {
		var ua = window.navigator.userAgent;

		var msie = ua.indexOf('MSIE ');

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {

			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {

			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {

			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}

		return false;
	}

	$(".scrollIt").on("click", function (event) {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					}
				});
			}
		}
	});

	function show() {
		var p = $('#accessCode1');
		p.attr('type', 'text');
	}

	function hide() {
		var p = $('#accessCode1');
		p.attr('type', 'password');
	}

	var pwShown = 0;

	var clickEye = function clickEye() {

		if (pwShown == 0) {
			pwShown = 1;
			show();

			$("#eye i").replaceWith('<i class="fas fa-eye-slash darkBlue"></i>');
		} else {
			pwShown = 0;
			hide();

			$("#eye i").replaceWith('<i class="fas fa-eye darkBlue"></i>');
		}
	};

	$("#eye").keypress(clickEye).click(clickEye);

	function show2() {

		var s = $('#accessCode2');

		s.attr('type', 'text');
	}

	function hide2() {

		var s = $('#accessCode2');

		s.attr('type', 'password');
	}

	var pwShown2 = 0;

	var clickEye2 = function clickEye2() {

		if (pwShown2 == 0) {
			pwShown2 = 1;
			show2();

			$("#eye2 i").replaceWith('<i class="fas fa-eye-slash darkBlue"></i>');
		} else {
			pwShown2 = 0;
			hide2();

			$("#eye2 i").replaceWith('<i class="fas fa-eye darkBlue"></i>');
		}
	};

	$("#eye2").keypress(clickEye2).click(clickEye2);

	$("#eye, #eye2").on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});

	$('#eye, #eye2').on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$('body').keydown(function (event) {

		if (!$('#email1').val() == '' && !$('#password1').val() == '' && !$('#password2').val() == '') {

			$('.continue').css({
				'background': '#00843D',
				'color': 'white'

			});
		} else {}
	});

	$('#accessCode1').keydown(function (event) {
		$('#returning').css({
			'background': '#00843D',
			'color': 'white'

		});
	});

	$('#accessCode2').keydown(function (event) {
		$('#new-user').css({
			'background': '#00843D',
			'color': 'white'

		});
	});
});
