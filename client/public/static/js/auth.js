window.addEventListener("load", function(event) {
	SetupAuth();
}, false);

SetupAuth = () => {
	const loginForm = document.getElementById('login-form');
	if (loginForm) {
		loginForm.addEventListener('submit', handleLoginFormSubmit);
	}

	const registrationForm = document.getElementById('registration-form');
	if (registrationForm) {
		registrationForm.addEventListener('submit', handleRegistrationFormSubmit);
	}

	const logoutButton = document.getElementById('js-logout-btn');
	if (logoutButton) {
		logoutButton.addEventListener('click', handleLogoutButton);
	}
}

function handleLoginFormSubmit(event) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const errorWrap = document.getElementById('js-form-error__wrap');
	const errorValue = document.getElementById('js-form-error__value');

	fetch('/auth/login', {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify({
			email: formData.get('email'),
			password: formData.get('password')
		}),
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		}
	})
	.then(response => {
		console.log(response)
		switch (response.status) {
		case 200:
			return response.json();
		case 400:
			return response.json().then(data => {
		      throw new Error(data.error);
		    });
		case 401:
			return response.json().then(data => {
		      throw new Error(data.error);
		    });
		case 404:
			throw new Error('Not found');
		case 409:
			return response.json().then(data => {
		      throw new Error(data.error);
		    });
		case 500:
			return response.json().then(data => {
		      throw new Error(data.error);
		    });
		case 535:
			throw new Error('Error comparing hashed password');
		default:
			throw new Error(`HTTP error! Status: ${response.status} ${response.error}`);
		}
	})
	.then(data => {
		errorWrap.classList.add('hidden');
		errorValue.innerHTML = "";
		console.log(data)
		window.location.href = '/';
	})
	.catch(error => {
		errorWrap.classList.remove('hidden');
		errorValue.innerHTML = error;
	});
}


function handleRegistrationFormSubmit(event) {
	event.preventDefault();

	const errorWrap = document.getElementById('js-form-error__wrap');
	const errorValue = document.getElementById('js-form-error__value');

	const formData = new FormData(event.target);

	const email = formData.get('email');
	const password = formData.get('password');
	const passwordRepeat = formData.get('password-repeat');

	if (password != passwordRepeat) {
		alert("Passwords are not equal!");
		return;
	}

	// grecaptcha.enterprise.ready(function() {
    //     grecaptcha.enterprise.execute('6Lfg5HAlAAAAAGGRIVaZE75D41IrT9rZu02ZMo0H', {action: 'registration'}).then(function(token) {
    //         console.log(token)

    //         // document.getElementById('js-recaptcha').dataset.sitekey = token;
    //     });
    // });

	fetch('/auth/registration', {
		method: 'POST',
		body: JSON.stringify({
			email: formData.get('email'),
			password: formData.get('password')
		}),
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		}
	})
	.then(response => {
		switch (response.status) {
		case 201:
			return response.json();
		case 400:
			return response.json().then(data => {
		      throw new Error(data.error);
		    });
		case 401:
			return response.json().then(data => {
		      throw new Error(data.error);
		    });
		case 404:
			throw new Error('Not found');
		case 409:
			return response.json().then(data => {
		      throw new Error(data.error);
		    });
		case 500:
			return response.json().then(data => {
		      throw new Error(data.error);
		    });
		case 535:
			throw new Error('Error comparing hashed password');
		default:
			throw new Error(`HTTP error! Status: ${response.status} ${response.error}`);
		}
	})
	.then(response => {
		window.location.href = '/auth/login';
		errorWrap.classList.add('hidden');
		errorValue.innerHTML = "";
	})
	.catch(error => {
		errorWrap.classList.remove('hidden');
		errorValue.innerHTML = error;
	});
}


function handleLogoutButton(event) {
	event.preventDefault();
	// $.cookie('jwtToken', "", -1);
	document.cookie = 'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	localStorage.removeItem('jwtToken');
	window.location.href = '/auth/logout';
}