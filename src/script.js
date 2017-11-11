var grade;
var projects = ['50pointSelector'];
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

	var quizzes = parseInt($('#quizzesScore').val()) * 0.2
	var attendance = parseInt($('#attendanceScore').val()) * 0.2
	var event1 = parseInt($('#event1Score').val()) * 0.05
	var event2 = parseInt($('#event2Score').val()) * 0.05

	var numScore = Math.round(quizzes + attendance + event1 + event2 + calculateProjects());
	$('#numScore').text(numScore);
	letterGrade(numScore);
}

var toggleButton = function(button) {
	$(button).toggleClass('btn-default');
	$(button).toggleClass('btn-info');
	var project = $(button).attr('id').replace('Selector','');
	var i = projects.indexOf(project);
	if (i == -1) {
		projects.push(project);
	} else {
		projects.splice(i, 1);
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
