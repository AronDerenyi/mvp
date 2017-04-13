function View() {

	this.ready = ready;
	this.onLoadingUserStarted = onLoadingUserStarted;
	this.onLoadingUserFinished = onLoadingUserFinished;

	var welcomeText;

	function ready() {
		welcomeText = $("#welcome_text");

		presenter.loadUser();
	}

	function onLoadingUserStarted() {

	}

	function onLoadingUserFinished() {
		var user = presenter.getUser();
		if (user == null) {
			welcomeText.text("Please log in");
		} else {
			welcomeText.text("Welcome " + user.username);
		}
	}
}
