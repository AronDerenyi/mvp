$(document).ready(function() {

});

var test = 0;

function add() {
	$.ajax({
		url: "item.html",
		success: function (html) {
			var item = $($.parseHTML(html));
			$("#list").append(item);
			item.find("#text").html("Test " + (test++));
			item.css("animation", "floatIn 0.25s");
			item.click(function() {
				$(this).css("animation", "floatOut 0.25s");
				$(this).bind("animationend", function() {
					$(this).remove();
				});
			});
		}
	});
}
