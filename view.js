function View() {

	this.ready = ready;

	var button;

	function ready() {
		button = $("#button");
		button.click(click);
	}

	function click() {
		presenter.func();
	}
}
