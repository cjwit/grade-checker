var grade;
var projects = ['documentary'];
var values = {
	essay: 0.50,
	documentary: 0.50,
	performance: 0.50,
	composition: 0.50,
	poster: 0.30,
	review1: 0.10,
	review2: 0.10,
	interview1: 0.10,
	interview2: 0.10
}

var calculateProjects = function() {
	var sum = 0;

	for (var i = 0; i < projects.length; i++) {
		var current = projects[i];
		var value = values[projects[i]];
		var inputBoxName = "#" + current + "Score";
		var score = $(inputBoxName).val();
		sum += score * value;
	}

	return sum;
}

var letterGrade = function(score) {
	var letter;
	if (score < 60) {
		letter = "F";
	} else if (score < 70) {
		letter = "D";
	} else if (score < 80) {
		letter = "C";
	} else if (score < 90) {
		letter = "B";
	} else {
		letter = "A";
	}
	$('#letterGrade').text(letter);
	$('#letterGrade').removeClass();
	$('#letterGrade').addClass(letter);
}

var calculate = function() {

	var unit1 = parseInt($('#unit1score').val()) * 0.05
	var unit2 = parseInt($('#unit2score').val()) * 0.05
	var unit3 = parseInt($('#unit3score').val()) * 0.05
	var unit4 = parseInt($('#unit4score').val()) * 0.05
	var attendanceQuiz = parseInt($('#attendanceQuizScore').val()) * 0.1
	var attendance = parseInt($('#attendanceScore').val()) * 0.1
	var event1 = parseInt($('#event1Score').val()) * 0.05
	var event2 = parseInt($('#event2Score').val()) * 0.05

	var numScore = Math.round(unit1 + unit2 + unit3 + unit4 + attendanceQuiz + attendance + event1 + event2 + calculateProjects());
	$('#numScore').text(numScore);
	letterGrade(numScore);
}

var disableButtons = function(project, checked) {
	var majorProjects = ['essay', 'documentary', 'performance', 'composition', 'poster'];
	majorProjects.splice(majorProjects.indexOf(project), 1);

	if (checked) {
		for (var i = 0; i < majorProjects.length; i++) {
			var p = majorProjects[i],
				b = $('#' + p + 'Selector');
			b.text('Choose this project');
			b.removeClass('btn-info');
			b.addClass('btn-default');
			b.prop('disabled', false);
		}
		$('#' + project + 'Selector').text('Choose this project');
	} else {
		for (var i = 0; i < majorProjects.length; i++) {
			var p = majorProjects[i],
				b = $('#' + p + 'Selector');
			b.text('Choose this project');
			b.removeClass('btn-info');
			b.addClass('btn-default');
			b.prop('disabled', true);
		}
		projects.push(project);
		$('#' + project + 'Selector').text('Deselect this project');
	}
}

var toggleButton = function(button) {
	$(button).toggleClass('btn-default');
	$(button).toggleClass('btn-info');
	var project = $(button).attr('id').replace('Selector','');

	var majorProjects = ['essay', 'documentary', 'performance', 'composition', 'poster'];
	if (majorProjects.indexOf(project) !== -1) {
		var checked = projects.indexOf(project) !== -1;
		for (i = 0; i < majorProjects.length; i++) {
			projects.splice(majorProjects[i], 1);
		}
		disableButtons(project, checked);
	} else {
		var i = projects.indexOf(project);
		if (i == -1) {
			projects.push(project);
		} else {
			projects.splice(i, 1);
		}
	}
}

$(document).ready(function() {
	calculate();

	$('#submit').click(function() {
		calculate();
	})

	$('.projectSelector').click(function() {
		toggleButton(this);
	})

})
