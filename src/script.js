var grade;

var calculate = function() {

	console.log('calculating')

	var quizzes = parseInt($('#quizzes').val()) * 0.2
	var attendance = parseInt($('#attendance').val()) * 0.2
	var event1 = parseInt($('#event1').val()) * 0.05
	var event2 = parseInt($('#event2').val()) * 0.05

	var numScore = quizzes + attendance + event1 + event2;
	$('#numScore').text(numScore);
}


$(document).ready(function() {
	console.log($('#P1score').val())
	calculate();

	$('#submit').click(function() {
		console.log('clicked')
		calculate();
	})

})
