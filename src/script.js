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
	console.log('calculating projects');
	var sum = 0;

	for (var i = 0; i < projects.length; i++) {
		var current = projects[i];
		var value = values[projects[i]];
		var inputBoxName = "#" + current + "Score";
		var score = $(inputBoxName).val();
		sum += score * value;
		console.log(current, inputBoxName, score)
	}

	console.log("sum ", sum)

	return sum;
}

var calculate = function() {
	console.log('calculating')

	var quizzes = parseInt($('#quizzesScore').val()) * 0.2
	var attendance = parseInt($('#attendanceScore').val()) * 0.2
	var event1 = parseInt($('#event1Score').val()) * 0.05
	var event2 = parseInt($('#event2Score').val()) * 0.05

	var numScore = quizzes + attendance + event1 + event2 + calculateProjects();
	$('#numScore').text(numScore);
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
	console.log(projects)
}

$(document).ready(function() {
	console.log($('#P1score').val())
	calculate();

	$('#submit').click(function() {
		console.log('clicked')
		calculate();
	})

	$('.projectSelector').click(function() {
		toggleButton(this);
	})

})
