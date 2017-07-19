$(document).ready(function() {

	$("#projGame,#myProject1").click(function() {
		$("#myModal").modal('show');

	});

	$("#proj2,#myProject2").click(function() {

		$("#myModal1").modal('show');

	});

	$("#proj3,#myProject3").click(function() {

		$("#myModal2").modal('show');

	});

	$("#proj4,#myProject4").click(function() {
		$("#myModal3").modal('show');
	});

	$("#proj5,#myProject5").click(function() {
		$("#myModal4").modal('show');
	});

	$("#proj6,#myProject6").click(function() {
		$("#myModal6").modal('show');
	});

	$("#proj7,#myProject7").click(function() {
		$("#myModal7").modal('show');
	});

	// for showiung more projects

	$("#showMore").click(function() {

		$("#rowThree").addClass("showMe"); // showing new projects..
		$(this).removeClass("showMe"); // removing showMore button;
		$(this).addClass("hideMe");
		$("#showLess").addClass("showMe"); // displaying ShowLess button.

	});

	$("#showLess").click(function() {
		$("#rowThree").removeClass("showMe"); // hiding new projects
		$(this).removeClass("showMe"); // removing showLess button
		$("#showMore").addClass("showMe"); // displaying showmore button
	});

});