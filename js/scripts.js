/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	document.addEventListener('wpcf7submit', function(event) {
		console.log(event);
		const formMessage = document.querySelector("#form-message");
		const apiResponse  = event.detail.apiResponse;
		

		if(apiResponse.status == "validation_failed"){
			if(apiResponse.invalid_fields.length > 0){
				formMessage.innerHTML = apiResponse.invalid_fields[0].message;
				formMessage.classList.remove("yellow-text");
				formMessage.classList.add("red-text");
				return;
			}
		}
		formMessage.classList.remove("red-text");
		formMessage.classList.add("yellow-text");
		formMessage.innerHTML = apiResponse.message;
		/*if (event.detail.status === 'mail_sent') {
			var errors = event.detail.apiResponse.errors;
			var errorMessage = '<ul>';
	
			for (var error in errors) {
				errorMessage += '<li>' + errors[error] + '</li>';
			}
	
			errorMessage += '</ul>';
	
			document.getElementById('custom-error-div').innerHTML = errorMessage;
		}*/
	}, false);
	
}() );
