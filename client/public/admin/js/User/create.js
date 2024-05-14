// MARK: - Init --------------------------------------------------------------------------	

function SetupCreatePage() {
	const addUserForm = document.getElementById('js-create_user_form');
	if (!addUserForm) return;
	addUserForm.addEventListener('submit', handleAddProductFormSubmit);
}

window.addEventListener("load", function(event) {
	SetupCreatePage();
}, false);


// MARK: - Public Methods --------------------------------------------------------------------------

function handleAddProductFormSubmit(event) {
	event.preventDefault();
	
	const formData = new FormData(event.target);
	const modsList = $('#js-mods_list').val();
	
	for (var i = 0; i < modsList.length; i++) {
		formData.append('mods[]', modsList[i]);
	}

	fetch('/admin/users/create/', {
		method: 'POST',
		body: formData,
	})
	.then(response => {
		console.log(response)
		switch (response.status) {
		case 200:
			return response.json();
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
	.then(data => {
		$(document).Toasts('create', {
			class: 'bg-success',
			title: 'Пользователь успешно добавлен!',
			subtitle: '',
			body: `${data.message} ID: ${data.productId}`,
			autohide: true,
			delay: 2000,
		})

		// window.location.href = `/admin/products/edit/${data.productId}`;
	})
	.catch(error => {
		console.log(error)
		$(document).Toasts('create', {
			class: 'bg-danger',
			title: 'Ошибка!',
			subtitle: 'Пользователь не был добавлен',
			body: `${error.message}`,
			autohide: true,
			delay: 6000,
		})
		console.log(error)
	});
}