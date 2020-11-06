"use strict";

$(document).ready(function () {

	//create and append teacher divs with objects

	var teacher = { "teachers": [{
			"teacherId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"teacherId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
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
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}]

	};

	for (var j in teacher.teachers) {

		$('.teacherBlocks').append("<div class='teacher newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TEACHER ID</div><p class=\"black\" id=\"teacherId\">" + teacher.teachers[j].teacherId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TEACHER NAME</div><p class=\"black\" id=\"teacherName\">" + teacher.teachers[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black\" id=\"teacherType\">" + teacher.teachers[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black\" id=\"teacherStatus\">" + teacher.teachers[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black teacherComplete\">" + teacher.teachers[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black\" id=\"teacherDate\">" + teacher.teachers[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div id=\"launchStatus\">" + teacher.teachers[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	//create and append child divs with objects

	var child = { "children": [{
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
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
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
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
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
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
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
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
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
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
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}]

	};

	for (var j in child.children) {

		$('.childBlocks').append("<div class='child newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">CHILD ID</div><p class=\"black\" id=\"childId\">" + child.children[j].childId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">CHILD NAME</div><p class=\"black\" id=\"childName\">" + child.children[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black\" id=\"childType\">" + child.children[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black\" id=\"childStatus\">" + child.children[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black childComplete\">" + child.children[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black\" id=\"childDate\">" + child.children[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div id=\"launchStatus\">" + child.children[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
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

		$('.childBlocksComplete').append("<div class='child newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">CHILD ID</div><p class=\"black\" id=\"childId\">" + child.childrenComplete[j].childId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">CHILD NAME</div><p class=\"black\" id=\"childName\">" + child.childrenComplete[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black\" id=\"childType\">" + child.childrenComplete[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black\" id=\"childStatus\">" + child.childrenComplete[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black childComplete\">" + child.childrenComplete[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black\" id=\"childDate\">" + child.childrenComplete[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div id=\"launchStatus\">" + child.childrenComplete[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
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

		$('.teacherBlocksComplete').append("<div class='teacher newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TEACHER ID</div><p class=\"black\" id=\"teacherId\">" + teacher.teachersComplete[j].teacherId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TEACHER NAME</div><p class=\"black\" id=\"teacherName\">" + teacher.teachersComplete[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black\" id=\"teacherType\">" + teacher.teachersComplete[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black\" id=\"teacherStatus\">" + teacher.teachersComplete[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black teacherComplete\">" + teacher.teachersComplete[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black\" id=\"teacherDate\">" + teacher.teachersComplete[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div id=\"launchStatus\">" + teacher.teachersComplete[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	var parent = { "parents": [{
			"parentId": '9999991C',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}]

	};

	for (var j in parent.parents) {

		$('.parentBlocks').append("<div class='parent newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">PARENT ID</div><p class=\"black\" id=\"parentId\">" + parent.parents[j].parentId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">PARENT NAME</div><p class=\"black\" id=\"parentName\">" + parent.parents[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black\" id=\"parentType\">" + parent.parents[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black\" id=\"parentStatus\">" + parent.parents[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black parentComplete\">" + parent.parents[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black\" id=\"parentDate\">" + parent.parents[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div id=\"launchStatus\">" + parent.parents[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	var sAdmin = { "sAdmins": [{
			"section": 'School Characteristics',
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Dharmapuri Thirumala Anantharam",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {

			"section": 'School Facilities and Resources',
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "John Smith",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"section": 'School-Family-Community Connections',
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Jane Doe",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {

			"section": 'School Policies and Practices',
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Alex Johnson",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {

			"section": 'School Programs for Particular Populations',
			"status": "Not Started",
			"percentage": 0,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Bill Thomas",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {

			"section": 'Federal Programs',
			"status": "Not Started",
			"percentage": 0,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Andrew Smith",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {

			"section": 'Staffing and Teacher Characteristics',
			"status": "Not Started",
			"percentage": 0,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Kelly Jones",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"section": 'School Administrator Characteristics',
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 100,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Hubert Blaine Wolfe­schlegel­stein­hausen­berger­dorff",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}]

	};

	for (var j in sAdmin.sAdmins) {

		$('.sAdminBlocks').append("<div class='sAdmin newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">SECTION</div><p class=\"black\" id=\"sASection\">" + sAdmin.sAdmins[j].section + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black\" id=\"sAdminStatus\">" + sAdmin.sAdmins[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black sAdminComplete\">" + sAdmin.sAdmins[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black\" id=\"sAdminDate\">" + sAdmin.sAdmins[j].date + "</p></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">COMPLETED BY</div><div class=\"dropdown\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"appendInfo\" data-toggle=\"dropdown\" aria-haspopup=\"true\"><div class=\"horizontalBlock\"><div class=\"vertical\"><p class=\"black\" id=\"appendedTitle\">" + sAdmin.sAdmins[j].title + "</p><p class=\"black\" id=\"appendedName\">" + sAdmin.sAdmins[j].name + "</p></div><i class=\"fal fa-angle-down darkBlue\"></i></div></button><div class=\"dropdown-menu\" aria-labelledby=\"appendInfo\"><div class=\"blackLine\"><p class=\"black small\">Select School Staff</p><div class=\"d-flex justify-content-end\"><i class=\"fal fa-angle-down darkBlue\"></i></div></div><div class=\"greyBubble\">School Administrator</div><form><legend>Other School Staff</legend><div class=\"blueBubble\"><p class=\"darkBlue small\">Other School Staff</p><div class=\"form-group\"><label for=\"new-name\">Name</label><input type=\"text\" name=\"\" class=\"form-control\" id=\"new-name\" placeholder=\"Jane Smith\"></div><div class=\"form-group\"><label for=\"new-title\">Title</label><input type=\"text\" name=\"\" class=\"form-control\" id=\"new-title\" placeholder=\"Assistant Principal\"></div><center><button type=\"button\" class=\"btn greenButton\" id=\"add\" data-toggle=\"dropdown\">ADD <i class=\"far fa-plus\"></i></button></center></div></div></form></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div id=\"launchStatus\">" + sAdmin.sAdmins[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	var district = { "districts": [{
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}] };

	for (var j in district.districts) {

		$('.renderDistricts').append("<div class='addBlocks d-flex align-items-center flex-wrap goToInfo' type=\"submit\" tabindex=\"0\" aria-hidden=\"false\" role=\"button\"><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><p class=\"black leadid\">" + district.districts[j].leadid + "</p></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><p class=\"black schoolName\">" + district.districts[j].schoolName + "</p></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><p class=\"black dflag\">" + district.districts[j].dflag + "</p></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><p class=\"black received dStatus\">" + district.districts[j].dStatus + "</p></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	//tl portal alphabetize and sort numerically


	$('.sortDistrict').on('click', function () {
		if (!$('.sortDistrict').hasClass('ascending')) {

			var ascendOrderedDivs = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".schoolName").text() > $(b).find(".schoolName").text() ? 1 : -1;
			});
			$(".renderDistricts").html(ascendOrderedDivs);
			setTimeout(function () {
				$('.sortDistrict').addClass('ascending');
			}, 600);
			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortDistrict').hasClass('ascending')) {

			var descendOrderedDivs = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".schoolName").text() > $(b).find(".schoolName").text() ? -1 : 1;
			});
			$(".renderDistricts").html(descendOrderedDivs);
			setTimeout(function () {
				$('.sortDistrict').removeClass('ascending');
			}, 600);

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortDflag').on('click', function () {
		if (!$('.sortDflag').hasClass('ascending')) {

			var ascendOrderedDivs2 = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".dflag").text() > $(b).find(".dflag").text() ? 1 : -1;
			});
			$(".renderDistricts").html(ascendOrderedDivs2);
			setTimeout(function () {
				$('.sortDflag').addClass('ascending');
			}, 600);
			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortDflag').hasClass('ascending')) {

			var descendOrderedDivs2 = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".dflag").text() > $(b).find(".dflag").text() ? -1 : 1;
			});
			$(".renderDistricts").html(descendOrderedDivs2);
			setTimeout(function () {
				$('.sortDflag').removeClass('ascending');
			}, 600);

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortStatus').on('click', function () {
		if (!$('.sortStatus').hasClass('ascending')) {

			var ascendOrderedDivs3 = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".dStatus").text() > $(b).find(".dStatus").text() ? 1 : -1;
			});
			$(".renderDistricts").html(ascendOrderedDivs3);
			setTimeout(function () {
				$('.sortStatus').addClass('ascending');
			}, 600);
			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortStatus').hasClass('ascending')) {

			var descendOrderedDivs3 = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".dStatus").text() > $(b).find(".dStatus").text() ? -1 : 1;
			});
			$(".renderDistricts").html(descendOrderedDivs3);
			setTimeout(function () {
				$('.sortStatus').removeClass('ascending');
			}, 600);

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortId').on('click', function () {
		var numericallyOrderedDivs = $('.addBlocks').sort(function (a, b) {

			return parseFloat($(a).find('.leadid').text()) > parseFloat($(b).find('.leadid').text()) ? 1 : -1;
		});
		$(".renderDistricts").html(numericallyOrderedDivs);
	});

	//
	// var str = $('.leadid').html()
	// var split = str.split(' ');
	//
	// console.log(split)
	//
	// split.forEach(function(item){
	//   // If the split is not NaN
	//   if(!isNaN(item)){
	//     // Heres your number
	//     console.log(item);
	//   }
	// });
	//


	var reA = /[^a-zA-Z]/g;
	var reN = /[^0-9]/g;

	function sortAlphaNum(a, b) {
		var aA = a.replace(reA, "");
		var bA = b.replace(reA, "");
		if (aA === bA) {
			var aN = parseInt(a.replace(reN, ""), 10);
			var bN = parseInt(b.replace(reN, ""), 10);
			return aN === bN ? 0 : aN > bN ? 1 : -1;
		} else {
			return aA > bA ? 1 : -1;
		}
	}
	console.log(["A1", "A10", "A11", "A12", "A2", "A3", "A4", "B10", "B2", "F1", "F12", "F3"].sort(sortAlphaNum));

	//change colors in districts to either green or goldColor
	// $('.dStatus').each(function() {
	// if ($(this).hasClass('in-progress')){
	//
	// 	$(this).closest('.newBlocks').find('.progressBarFull').css({
	// 		'background' : '#fbb03b',
	// 		'width': '100%'
	// 	})
	// }
	//
	// if ($(this).hasClass('received')){
	//
	// 	$(this).closest('.newBlocks').find('.progressBarFull').css({
	// 		'background' : '#71d82e',
	// 		'width': '100%'
	// 	})
	// }
	//
	// })


	//change colors of the percentage circles and progress bars


	var Opt01 = "";
	$('.teacherComplete , .childComplete , .childBlocksComplete, .teacherBlocksComplete, .parentComplete, .sAdminComplete, .dStatus').each(function () {
		Opt01 = $(this).html();

		if ($(this).html() > 50 && $(this).html() <= 75 || $(this).html() == 'Special Handling– In Progress') {
			$(this).closest('.col-lg-2').find('.percentageCircle').css('background', '#fbb03b');
			$(this).closest('.newBlocks').find('.progressBarFull').css({
				'background': '#fbb03b',
				'width': '75%'
			});
			$(this).closest('.addBlocks').find('.progressBarFull').css({
				'background': '#fbb03b',
				'width': '100%'
			});
		}

		if ($(this).html() > 75 && $(this).html() <= 100 || $(this).html() == 'Approval Received') {
			$(this).closest('.col-lg-2').find('.percentageCircle').css('background', '#71d82e');
			$(this).closest('.newBlocks').find('.progressBarFull').css({
				'background': '#71d82e',
				'width': '100%'
			});

			$(this).closest('.addBlocks').find('.progressBarFull').css({
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

	//show more survey  blocks


	$('.newBlocks').addClass('hidden');

	var x = 10;
	$('.newBlocks').slice(0, 14).removeClass('hidden');
	$('.loadMore, .load20More').on('click', function (e) {
		e.preventDefault();

		x = x + 14;
		xx = xx + 24;
		$('.newBlocks').slice(0, x).slideDown('slow').removeClass('hidden');
		$('.addBlocks').slice(0, xx).slideDown('slow').removeClass('hidden');
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

	$('.loadMore, .load20More').on('keyup', function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			e.preventDefault();

			x = x + 14;
			xx = xx + 24;
			$('.newBlocks').slice(0, x).slideDown('slow').removeClass('hidden');
			$('.addBlocks').slice(0, xx).slideDown('slow').removeClass('hidden');
		}
	});

	$('.addBlocks').addClass('hidden');

	var xx = 20;
	$('.addBlocks').slice(0, 24).removeClass('hidden');
	$('.loadMore').on('click', function (e) {
		e.preventDefault();

		xx = xx + 24;
		$('.addBlocks').slice(0, xx).slideDown('slow').removeClass('hidden');
	});

	$('.loadAll').on('click', function (e) {
		e.preventDefault();
		$('.addBlocks').slideDown('slow').removeClass('hidden');
		$('.loadMore, .flip').hide();
		$('.loadAll p').addClass('all').hide();
	});

	$('.loadAll').on('keyup', function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			e.preventDefault();
			$('.addBlocks').slideDown('slow').removeClass('hidden');
			$('.loadMore, .flip').hide();
			$('.loadAll p').addClass('all').hide();
		}
	});

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

	new WOW().init();

	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	//radio buttons on contact form

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
					'font-weight': '500'
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
					'font-weight': '300'
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

	$("#two .nav-link").click(function () {

		$("#two .nav-link.selected").removeClass("selected");
		$(this).addClass("selected");
	});

	$('li[data-target="#overview"]').addClass('activated');

	//animations for landing page
	$(window).on('scroll', function () {

		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function () {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if (screenBottom > elementTop + $(this).find('.heros2').height() / 30 && screenTop < elementBottom) {
				$('section').removeClass('active');
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});

		if ($('.block-2000').hasClass('active')) {

			setTimeout(function () {
				$('.line1').removeClass('box-rotate');
			}, 100);
			setTimeout(function () {
				$('.line2').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 200);

			setTimeout(function () {
				$('.text1').removeClass('transparent-opacity').addClass('animated fadeInRight');
			}, 400);

			setTimeout(function () {
				$('.text2').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 400);

			setTimeout(function () {
				$('.green-circle').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 400);

			setTimeout(function () {
				$('.flower').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 600);

			setTimeout(function () {
				$('.line3').removeClass('box-rotate');
			}, 800);

			setTimeout(function () {
				$('.line4').removeClass('box-rotate');
			}, 900);

			setTimeout(function () {
				$('.text3').removeClass('transparent-opacity').addClass('animated fadeInLeft');
			}, 900);

			setTimeout(function () {
				$('.text4').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 1100);

			setTimeout(function () {
				$('.green-circle2').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 1100);

			setTimeout(function () {
				$('.house').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 1600);

			setTimeout(function () {
				$('.line5').removeClass('box-rotate');
			}, 1600);

			setTimeout(function () {
				$('.line6').removeClass('box-rotate');
			}, 1600);

			setTimeout(function () {
				$('.text5').removeClass('transparent-opacity').addClass('animated fadeInLeft');
			}, 1600);

			setTimeout(function () {
				$('.text6').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 1800);

			setTimeout(function () {
				$('.green-circle3').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 1800);

			setTimeout(function () {
				$('.leaves').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 1900);

			setTimeout(function () {
				$('.text-last').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 1900);
		}
	});

	if ($(window).height() < 800) {

		$(window).scroll(function () {
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (distanceY > 120) {

				$('.menu-buttons-floating').css({
					top: '2em'
				});
			} else {

				$('.menu-buttons-floating').css({
					top: '14em'
				});
			}
		});
	}

	$(window).on('scroll', function () {

		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function () {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if (screenBottom > elementTop + $(this).find('.heros').height() / 2 && screenTop < elementBottom) {
				$('section').removeClass('active');
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});

		if ($('.start').hasClass('active')) {

			$('li[data-target="#home"]').addClass('activated');
			$('li[data-target="#home"]').addClass('activated');
		} else {
			$('li[data-target="#home"]').removeClass('activated');
			$('li[data-target="#home"]').removeClass('activated');
		}

		if ($('.block10').hasClass('active') || $('.block000').hasClass('active')) {

			$('li[data-target="#overview"]').addClass('activated');
			$('li[data-target="#overview"]').addClass('activated');
		} else {
			$('li[data-target="#overview"]').removeClass('activated');
			$('li[data-target="#overview"]').removeClass('activated');
		}

		if ($('.block50').hasClass('active') || $('.block111').hasClass('active') || $('.block333').hasClass('active') || $('.block9000').hasClass('active')) {
			$('li[data-target="#info"]').addClass('activated');
			$('li[data-target="#info"]').addClass('activated');
		} else {
			$('li[data-target="#info"]').removeClass('activated');
			$('li[data-target="#info"]').removeClass('activated');
		}

		if ($('.top-section').hasClass('active') || $('.block10').hasClass('active') || $('.block-2000').hasClass('active') || $('.block-3000').hasClass('active')) {

			$('li[data-target="#participation"]').addClass('activated');
			$('li[data-target="#participation"]').addClass('activated');
		} else {
			$('li[data-target="#participation"]').removeClass('activated');
			$('li[data-target="#participation"]').removeClass('activated');
		}

		if ($('.block5').hasClass('active') || $('.block555').hasClass('active')) {

			$('li[data-target="#survey"]').addClass('activated');
			$('li[data-target="#survey"]').addClass('activated');
		} else {
			$('li[data-target="#survey"]').removeClass('activated');
			$('li[data-target="#survey"]').removeClass('activated');
		}

		if ($('.block20').hasClass('active') || $('.block222').hasClass('active')) {
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

		if ($('.block444').hasClass('active')) {
			$('li[data-target="#parentSurvey"]').addClass('activated');
			$('li[data-target="#parentSurvey"]').addClass('activated');
		} else {
			$('li[data-target="#parentSurvey"]').removeClass('activated');
			$('li[data-target="#parentSurvey"]').removeClass('activated');
		}
	});

	if ($('.newBlocks').length < 10) {
		$('.showBlocks').children().hide();
	} else {
		$('.showBlocks').children().show();
	}

	if ($(document).innerWidth() <= 767) {
		$('#feedbackModal').on('hidden.bs.modal', function (e) {

			$('#one').css('top', '40%');
		});

		$('#feedbackModal').on('show.bs.modal', function (e) {

			$('#one').css('top', '10%');
		});

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

		if ($(this).closest('.outside').find(".toggleDiv").is(':visible')) {

			$(this).closest('.outside').find('i').addClass('plusSign');

			$(this).closest('.outside').find('.blueLine2 span').html('expand section');

			$(this).closest('.outside').find(".toggleDiv").slideUp();
		} else if ($(this).closest('.outside').find(".toggleDiv").is(':hidden')) {
			$(this).closest('.outside').find('.blueLine2 span').html('collapse section');
			$(this).closest('.outside').find('i').removeClass('plusSign');

			$(this).closest('.outside').find(".toggleDiv").slideDown();
		}
	};

	$('.blueLine2, .closeDiv').keypress(slideIt).click(slideIt);

	var slideIt2 = function slideIt2() {

		if ($(".toggleDiv").is(':visible')) {

			$('i').addClass('plusSign');

			$('.blueLine span').html('expand');

			$(".toggleDiv").slideUp();
		} else if ($(".toggleDiv").is(':hidden')) {
			$('.blueLine span').html('collapse');
			$('i').removeClass('plusSign');

			$(".toggleDiv").slideDown();
		}
	};

	$('.blueLine').keypress(slideIt2).click(slideIt2);

	//green background div

	var height = $('.block50').height();
	$('.greenBottom').css('height', height);

	// 508 focus

	$("a, button, input, [tabindex='0'], li, #one, .tooltips-elements, .feedbackBar, .skip, #closeThisPlease, .infoBar, .goToInfo, .close-project").on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$("a, button, input, [tabindex='0'], li, #one, .tooltips-elements, .feedbackBar, .skip, #closeThisPlease, .infoBar, .goToInfo, .close-project").on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$(".cube").on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).find('.greenCube').css('outline', 'dashed 3px #4599ff');
		}
	});
	$(".cube").on('focusout', function () {
		$(this).find('.greenCube').css('outline', 'none');
	});

	$(".form-check").on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$('.form-check').each(function () {
				$(this).addClass('focusClass');
			});
		}
	});

	$('.emailInfo a').attr('tabindex', '-1');

	//contact form

	var open = function open() {

		$('.contactUsOverlay').show();

		$('#theform input').each(function () {
			$(this).attr('tabindex', '0');
		});
		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '0');
		});
		$('.emailInfo a').attr('tabindex', '0');

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

			$('.contactUsOverlay').hide();

			$('#theform input').each(function () {
				$(this).attr('tabindex', '-1');
			});

			$('.radio-inline input').each(function () {
				$(this).attr('tabindex', '-1');
			});
			$('.emailInfo a').attr('tabindex', '-1');

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
		$('.emailInfo a').attr('tabindex', '-1');

		$('.form-control').attr('tabindex', '-1');

		$('#closeThisPlease').attr('tabindex', '-1');

		$('#sendMessage').attr('tabindex', '-1');

		$("#slideOut").removeClass('showSlideOut');
	};

	$('#close').keypress(close).click(close);

	$('.feedbackBar').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('#feedbackModal').modal('show');
		}
	});

	$('.cube').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('.tlModals').modal('show');
		}
	});

	$('.privacy').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('#privacyModal').modal('show');
		}
	});

	//send message on contact form and toast message

	$('#sendMessage').click(function (e) {

		if (!$('#formControl1').val() == '' && !$('#formControl2').val() == '') {
			e.preventDefault();

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
			// e.preventDefault()

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
		}
	});

	//green line width on Feedback modal carousel

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

	//developers will need to chnage this based on the input's ID for this quesion
	//
	// $('#v').on('change', function() {
	// 	if ($(this).is(':checked')) {
	// 		$(".carousel-item").last().prev().prev().remove()
	// 		function increase(){
	// 			l = l + color
	// 		}
	// 		increase()
	// 	}
	// })
	//
	// //developers will need to chnage this based on the input's ID for this quesion
	//
	//
	// $('#ll').on('change', function() {
	// 	if ($(this).is(':checked')) {
	// 		$(".schoolAdministrator .carousel-item:eq(9), .schoolAdministrator .carousel-item:eq(10), .schoolAdministrator .carousel-item:eq(11), .schoolAdministrator .carousel-item:eq(12)").remove()
	// 		function increase(){
	// 			l = l + color
	// 		}
	// 		increase()
	// 	}
	// })


	//feedback modal carousel functions


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

	$('.next, .skip').click(function () {
		if ($('.next').hasClass('done')) {

			$('.next').addClass('greenButton');
			$('#feedbackModal').modal('hide');
			$('.feedbackBar').prop("disabled", true);
			$('li[data-target="#feedback2"]').addClass('greenConsent');
			$('li[data-target="#feedback"]').addClass('greenConsent');
		}
	});
	$('.next, .skip').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13 && $('.next').hasClass('done')) {
			$('.feedbackBar').prop("disabled", true);
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
			$('.next').addClass('greenButton');
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

	$('#ingles').click(function () {
		$('#ingles').attr('href', mainURL);
	});

	$('.spanish').on('click', function (e) {
		$('.spanish').addClass('blue');
		$('.english').addClass('clear');
		$('li[data-target="#home"]').addClass('spanishAfter');
		$('li[data-target="#overview"]').addClass('spanishAfter');
		$('li[data-target="#two"]').addClass('spanishAfter');
		$('li[data-target="#three"]').addClass('spanishAfter');

		$('.text1').css('right', '394px');
		$('.text5').css('right', '433px');
		if ($(document).innerWidth() <= 1024 && $(document).innerWidth() > 991) {

			$('.menu-buttons-floating').css('left', '28px');
			$('.guide-overlay2').css('padding', '4em 4em 0em 8.4em');

			$('.text3').addClass('es');
		}

		if ($(document).innerWidth() < 992 && $(document).innerWidth() > 767) {

			$('.animation').css('width', '150vw');
			$('.guide-overlay').css('padding', '0em 7em');
			$('.text3, .text4').addClass('es');
		}

		if ($(document).innerWidth() < 768) {

			$('#two .nav-tabs .nav-link.selected, #two .nav-tabs .nav-link').css('font-size', '17px');

			$('.text3, .leaves, .house, .text1, .text5, .flower, .leftImg, .animation').addClass('es');
		}

		if ($(document).innerWidth() < 379) {

			$('#two .nav-tabs .nav-link.selected, #two .nav-tabs .nav-link').css('font-size', '15px');
		}

		if ($(document).innerWidth() < 324) {

			$('#two .nav-tabs .nav-link.selected, #two .nav-tabs .nav-link').css('font-size', '12px');
		}

		if ($(document).innerWidth() > 1024) {
			resizeText();
		}
	});

	var resizeText = function resizeText() {

		var preferredFontSize = 85; // %
		var preferredFontSize2 = 190; // %
		var preferredSize = 1024 * 768;

		var currentSize = $(window).width() * $(window).height();
		var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
		var newFontSize = preferredFontSize * scalePercentage;
		var newFontSize2 = preferredFontSize2 * scalePercentage;
		$(".greenBar .nav-link").css("font-size", newFontSize + '%');
		$(".landing-sec-H").css("font-size", newFontSize2 + '%');
	};

	//IE message

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

	$('.disabled').attr('disabled', 'disabled');

	//TL portal open sidebar


	// var closeProject = function() {

	$('.close-project').click(function (e) {
		e.stopPropagation();

		$(".slideOutLeft").animate({
			width: "0",
			opacity: '0'
		}, 160, function () {});

		$('#slideOutRight').css('z-index', '10');
		$('.projects').attr('tabindex', '0');

		$('.close-project').attr('tabindex', '-1');
		$('.close-project').attr('aria-hidden', 'true');

		$(".box-outer").animate({
			'margin-left': "0px",
			'margin-right': '0px'
		}, 160, function () {});

		setTimeout(function () {
			$(".slideOutLeft").removeClass('open');
		}, 200);
	});

	// }
	//
	// $('.close-project').keypress(
	// closeProject
	//
	// ).click(
	// closeProject
	// );


	$('.slideOutLeft').on('mouseleave', function (e) {
		e.stopPropagation();
		if (!$(".slideOutLeft").hasClass('open')) {

			$(".slideOutLeft").animate({
				width: "0",
				opacity: '0'
			}, 160, function () {});

			$('#slideOutRight').css('z-index', '10');
			$('.projects').attr('tabindex', '0');

			$('.close-project').attr('tabindex', '-1');
			$('.close-project').attr('aria-hidden', 'true');
		}
	});

	// var slideOutLeft = function() {

	$('.slideOutLeft').not('.activeCube').click(function () {

		$(".slideOutLeft").animate({
			width: "180px",
			opacity: '1'
		}, 200, function () {});

		$('#slideOutRight').css('z-index', '1');
		$('.projects').attr('tabindex', '1');
		$('.close-project').attr('tabindex', '1');
		$('.close-project').attr('aria-hidden', 'false');

		$(".box-outer").animate({
			'margin-left': "140px",
			'margin-right': '20px'
		}, 200, function () {});

		setTimeout(function () {
			$(".slideOutLeft").addClass('open');
		}, 200);
	});

	// }
	//
	// $('.slideOutLeft').not('.activeCube').keypress(
	// slideOutLeft
	//
	// ).click(
	// 	slideOutLeft
	// );


	$('.close-project').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			// e.stopPropagation()

			$(".slideOutLeft").animate({
				width: "0",
				opacity: '0'
			}, 160, function () {});

			$('#slideOutRight').css('z-index', '10');
			$('.projects').attr('tabindex', '0');

			$('.close-project').attr('tabindex', '-1');
			$('.close-project').attr('aria-hidden', 'true');

			$(".box-outer").animate({
				'margin-left': "0px",
				'margin-right': '0px'
			}, 160, function () {});

			setTimeout(function () {
				$(".slideOutLeft").removeClass('open');
			}, 200);
		}
	});

	$('.projects').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$(".slideOutLeft").animate({
				width: "180px",
				opacity: '1'
			}, 200, function () {});

			$('#slideOutRight').css('z-index', '1');
			$('.projects').attr('tabindex', '1');
			$('.close-project').attr('tabindex', '1');
			$('.close-project').attr('aria-hidden', 'false');

			$(".box-outer").animate({
				'margin-left': "140px",
				'margin-right': '20px'
			}, 200, function () {});

			setTimeout(function () {
				$(".slideOutLeft").addClass('open');
			}, 200);
		}
	});

	$('.projects').on('mouseenter', function () {
		if (!$(".slideOutLeft").hasClass('open')) {

			$(".slideOutLeft").animate({
				width: "180px",
				opacity: '1'
			}, 200, function () {});

			$('#slideOutRight').css('z-index', '1');
			$('.projects').attr('tabindex', '1');
			$('.close-project').attr('tabindex', '1');
			$('.close-project').attr('aria-hidden', 'false');
		}
	});

	//TL images

	$('.districts').on('mouseenter', function () {

		$('.districts img').attr('src', 'images/img_districts-hover.svg');
	});

	$('.districts').on('mouseleave', function () {

		$('.districts img').attr('src', 'images/img_districts.svg');
	});

	$('.schools').on('mouseenter', function () {

		$('.schools img').attr('src', 'images/img_school-hover.svg');
	});

	$('.schools').on('mouseleave', function () {

		$('.schools img').attr('src', 'images/img_school.svg');
	});

	$('.parents').on('mouseenter', function () {

		$('.parents img').attr('src', 'images/img_parents-hover.svg');
	});

	$('.parents').on('mouseleave', function () {

		$('.parents img').attr('src', 'images/img_parents.svg');
	});

	$('.documents').on('mouseenter', function () {

		$('.documents img').attr('src', 'images/img_documents-hover.svg');
	});

	$('.documents').on('mouseleave', function () {

		$('.documents img').attr('src', 'images/img_documents.svg');
	});

	$('.transmission').on('mouseenter', function () {

		$('.transmission img').attr('src', 'images/img_transmission-hover.svg');
	});

	$('.transmission').on('mouseleave', function () {

		$('.transmission img').attr('src', 'images/img_transmission.svg');
	});

	$('.messaging').on('mouseenter', function () {

		$('.messaging img').attr('src', 'images/img_messaging-hover.svg');
	});

	$('.messaging').on('mouseleave', function () {

		$('.messaging img').attr('src', 'images/img_messaging.svg');
	});

	$('.reports').on('mouseenter', function () {

		$('.reports img').attr('src', 'images/img_reports-hover.svg');
	});

	$('.reports').on('mouseleave', function () {

		$('.reports img').attr('src', 'images/img_reports.svg');
	});

	var viewDistrictInfo = function viewDistrictInfo() {

		// $('.goToInfo').click(function(){

		$('.grayBox.first').addClass('flexing-scroll');

		$(".grayBox.first").animate({
			"left": -$(".tlModals").width()
		}, 400);

		setTimeout(function () {

			$('.grayBox.second').addClass('animated slideInRight').show();

			$(".grayBox.second").animate({
				"right": 0
			}, 200);
		}, 100);

		$('.save-floating').show().css('display', 'flex');

		// })
	};

	$('.goToInfo').keypress(viewDistrictInfo).click(viewDistrictInfo);

	$('.tlModals').on('hidden.bs.modal', function (e) {
		setTimeout(function () {
			$('.grayBox.first').removeClass('flexing-scroll');

			$(".grayBox.first").animate({
				"left": 0
			}, 500);
		}, 300);

		setTimeout(function () {
			$('.grayBox.second').removeClass('animated slideInRight').hide();
		}, 400);

		$(".grayBox.second").animate({
			"right": negative
		}, 600);

		$('.save-floating').hide();

		e.stopPropagation();

		$(".slideOutLeft").animate({
			width: "0",
			opacity: '0'
		}, 160, function () {});

		$('#slideOutRight').css('z-index', '10');
		$('.projects').attr('tabindex', '0');

		$('.close-project').attr('tabindex', '-1');
		$('.close-project').attr('aria-hidden', 'true');

		$(".box-outer").animate({
			'margin-left': "0px",
			'margin-right': '0px'
		}, 160, function () {});

		setTimeout(function () {
			$(".slideOutLeft").removeClass('open');
		}, 200);
	});

	var negative = -$(".box-outer").width();

	$('.activeCube').click(function () {

		setTimeout(function () {
			$('.grayBox.first').removeClass('flexing-scroll');

			$(".grayBox.first").animate({
				"left": 0
			}, 500);
		}, 300);

		setTimeout(function () {
			$('.grayBox.second').removeClass('animated slideInRight').hide();
		}, 400);

		$(".grayBox.second").animate({
			"right": negative
		}, 600);

		$('.save-floating').hide();
	});

	$('.btn').on('click', function () {
		$('input', this).removeAttr('checked');
		$(this).removeClass('active');
	});

	$('.informationForm').find('input:text').val('');

	$('.cancel').on('click', function () {
		$('.informationForm').find('input:text').val('');
	});
});
