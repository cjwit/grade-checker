var grade;

var today = new Date()

// Note: January is month 0

var dueDates = {
	exam1Score: new Date(2017, 8, 15, 23, 59, 0),
	event1Score: new Date(2017, 9, 13, 23, 59, 0),
	interview1Score: new Date(2017, 9, 13, 23, 59, 0),
	proposalScore: new Date(2017, 9, 20, 23, 59, 0),
	exam2Score: new Date(2017, 9, 20, 23, 59, 0),
	review1Score: new Date(2017, 9, 27, 23, 59, 0),
	proposalRevisionScore: new Date(2017, 10, 3, 23, 59, 0),
	event2Score: new Date(2017, 10, 10, 23, 59, 0),
	interview2Score: new Date(2017, 10, 27, 23, 59, 0),
	projectFinalScore: new Date(2017, 11, 1, 23, 59, 0),
	selfReflectionScore: new Date(2017, 11, 1, 23, 59, 0),
	review2Score: new Date(2017, 11, 8, 23, 59, 0),
	attendanceScore: new Date(2017, 11, 13, 23, 59, 0),
	quizzesScore: new Date(2017, 11, 13, 23, 59, 0),
	exam3Score: new Date(2017, 11, 13, 23, 59, 0),
	exam4Score: new Date(2017, 11, 13, 23, 59, 0)
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

	var attendance = parseFloat($('#attendanceScore').val()) * 0.1 || 0
	var quizzes = parseFloat($('#quizzesScore').val()) || 0
	var event1 = parseFloat($('#event1Score').val()) || 0
	var event2 = parseFloat($('#event2Score').val()) || 0
	var exam1 = parseFloat($('#exam1Score').val()) / 6 || 0
	var exam2 = parseFloat($('#exam2Score').val()) / 6 || 0
	var exam3 = parseFloat($('#exam3Score').val()) / 6 || 0
	var exam4 = parseFloat($('#exam4Score').val()) / 6 || 0
	var proposal = parseFloat($('#proposalScore').val()) || 0
	var proposalRevision = parseFloat($('#proposalRevisionScore').val()) || 0
	var projectFinal = parseFloat($('#projectFinalScore').val()) || 0
	var selfReflection = parseFloat($('#selfReflectionScore').val()) || 0
	var review1 = parseFloat($('#review1Score').val()) || 0
	var review2 = parseFloat($('#review2Score').val()) || 0
	var interview1 = parseFloat($('#interview1Score').val()) || 0
	var interview2 = parseFloat($('#interview2Score').val()) || 0

	var numScore = attendance + quizzes + event1 + event2 +
			exam1 + exam2 + exam3 + exam4 +
			proposal + proposalRevision + projectFinal + selfReflection +
			review1 + review2 + interview1 + interview2;
	numScore = numScore.toFixed(1)
	$('#numScore').text(numScore);
	letterGrade(numScore);
}

$(document).ready(function() {

	$('input').each(function() {
		notDueYet = dueDates[this.id] >= today
		if (notDueYet) {
			$(this).parent().addClass('has-success')
		}

	})

	calculate();

	$('#submit').click(function() {
		calculate();
	})

	$('#50pointSelector').click(function() {
		$(this).removeClass('btn-default');
		$(this).addClass('btn-info');
		$('#30pointSelector').removeClass('btn-info');
		$('#30pointSelector').addClass('btn-default');
		$('#projectPoints').text("30");
		$('#projectFinalScore').val("");
	})

	$('#30pointSelector').click(function() {
		$(this).removeClass('btn-default');
		$(this).addClass('btn-info');
		$('#50pointSelector').removeClass('btn-info');
		$('#50pointSelector').addClass('btn-default');
		$('#projectPoints').text("10");
		$('#projectFinalScore').val("");
	})

})
