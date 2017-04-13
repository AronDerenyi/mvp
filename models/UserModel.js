function UserModel() {

	this.loadUser = loadUser;

	function loadUser(resultCallback, errorCallback) {
		$.ajax({
			url: "../csi/user.php",
			success: function (result) {
				resultCallback(JSON.parse(result));
			},
			error: function (xhr, status, error) {
				resultCallback(null);
				if (errorCallback != null) {
					errorCallback(status, error);
				}
			}
		});
	}
}
