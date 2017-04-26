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

	noUiSlider.create(document.getElementById('essaySlider'), {
		start: [100],
		connect: [true, false],
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(document.getElementById('documentarySlider'), {
		start: [100],
		connect: [true, false],
		range: {
			'min': 0,
			'max': 100
		}
	});

	$('#submit').click(function() {
		console.log('clicked')
		calculate();
	})

})
