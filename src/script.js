var grade;

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
