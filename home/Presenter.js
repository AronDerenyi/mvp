function Presenter() {

	this.loadUser = loadUser;
	this.getUser = getUser;

	var model = new UserModel();
	var user = null;

	function loadUser() {
		view.onLoadingUserStarted();
		model.loadUser(function(result) {
			user = result;
			view.onLoadingUserFinished();
		});
	}

	function isLoggedIn() {

	}

	function getUser() {
		return user;
	}
}
