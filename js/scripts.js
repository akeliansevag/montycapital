/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	const notifyBtn = document.querySelector(".notify-btn");
	const notifyBtnText = notifyBtn.value;
	
	document.querySelector(".wpcf7-form").addEventListener("submit", function(){
		notifyBtn.disabled = true;
		notifyBtn.classList.add("invisible");
	});

	document.addEventListener('wpcf7submit', function(event) {
		const formMessage = document.querySelector("#form-message");
		const apiResponse  = event.detail.apiResponse;
		notifyBtn.disabled = false;
		notifyBtn.classList.remove("invisible");
		notifyBtn.value = notifyBtnText;

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
		
		
	}, false);
	
	


}() );
