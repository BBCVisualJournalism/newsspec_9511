define(['lib/news_special/bootstrap'], function (news) {

	var Error = function () {

		var errorMessage,
			errorContainer = news.$('.ns__error_message');

		var triggerError = function (error) {
			errorMessage = error;
			displayError();
		};

		var displayError = function () { //console.log(errorMessage);
			errorContainer.show().html(errorMessage);
		};

		var hideError = function () {
			errorContainer.hide();
		};

		/**
		* Module entry point.
		*/
		var init = function () {
			news.pubsub.on('ns__formError', triggerError);
			news.pubsub.on('ns__formSubmitted', hideError);
		};

		init();
	};

	return new Error();
});