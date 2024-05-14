
// MARK: - Init --------------------------------------------------------------------------	

function SetupEditPage() {
	var usdCurrencyTextInput = document.getElementById('product_currency_usd');
	var rubCurrencyTextInput = document.getElementById('product_currency_rub');
	var discountTextInput = document.getElementById('product_discount');

	g_CurrencyInputs.push(usdCurrencyTextInput);
	g_CurrencyInputs.push(rubCurrencyTextInput);

	usdCurrencyTextInput.addEventListener('change', (event) => {
		event.preventDefault();
		let value = event.target.value;
		let result = FormatInputCurrency(value, "USD", "RUB");
		let formatedPrice = GetFormatedPrice(result);
		rubCurrencyTextInput.value = formatedPrice;
		UpdateFinalPriceInputs(value, result);
	});

	usdCurrencyTextInput.addEventListener('input', (event) => {
		event.preventDefault();
		let value = event.target.value;
		let result = FormatInputCurrency(value, "USD", "RUB");
		let formatedPrice = GetFormatedPrice(result);
		rubCurrencyTextInput.value = formatedPrice;
		UpdateFinalPriceInputs(value, result);
	});

	rubCurrencyTextInput.addEventListener('input', (event) => {
		event.preventDefault();
		let value = event.target.value;
		let result = FormatInputCurrency(value, "RUB", "USD");
		let formatedPrice = GetFormatedPrice(result);
		usdCurrencyTextInput.value = formatedPrice;
		UpdateFinalPriceInputs(result, value);
	});

	discountTextInput.addEventListener('input', (event) => {
		var event = new Event('change');
		usdCurrencyTextInput.dispatchEvent(event);
	});

	const updateProductForm = document.getElementById('updateProduct');
	if (!updateProductForm) return;
	updateProductForm.addEventListener('submit', handleUpdateProductFormSubmit);
}

window.addEventListener("load", function(event) {
	SetupEditPage();
}, false);

// MARK: - Public Methods --------------------------------------------------------------------------

function handleUpdateProductFormSubmit(event) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const id = this.dataset.id;
	var previewText = $('#codeMirrorProductPreview').data('CodeMirrorInstance').getValue();
	var descriptionText = $('#codeMirrorProductDescription').data('CodeMirrorInstance').getValue();
	var documentationText = $('#codeMirrorProductDocumentation').data('CodeMirrorInstance').getValue();
	const links = GetLinksValues();
	
	const regexSpaces = "/(\r\n|\n|\r|\s)/gm";
	previewText = previewText.replace(regexSpaces, "").length == 0 ? "" : previewText;
	descriptionText = descriptionText.replace(regexSpaces, "").length == 0 ? "" : descriptionText;
	documentationText = documentationText.replace(regexSpaces, "").length == 0 ? "" : documentationText;

	formData.set('id', id);
	formData.set('preview', previewText);
	formData.set('description', descriptionText);
	formData.set('documentation', documentationText);
	formData.set('links', JSON.stringify(links));

	fetch('/admin/products/', {
		method: 'PUT',
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
			title: 'Товар успешно обновлен!',
			subtitle: '',
			body: `${data.message} ID: ${data.productId}`,
			autohide: true,
			delay: 2000,
		})
	})
	.catch(error => {
		console.log(error)
		$(document).Toasts('create', {
			class: 'bg-danger',
			title: 'Ошибка!',
			subtitle: '',
			body: `${error.message}`,
			autohide: true,
			delay: 6000,
		})
		console.log(error)
	});
}
