
// MARK: - Init --------------------------------------------------------------------------	

function SetupCreatePage() {
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

	const addProductForm = document.getElementById('createProduct');
	if (!addProductForm) return;
	addProductForm.addEventListener('submit', handleAddProductFormSubmit);
}

window.addEventListener("load", function(event) {
	SetupCreatePage();
}, false);


// MARK: - Public Methods --------------------------------------------------------------------------

function handleAddProductFormSubmit(event) {
	event.preventDefault();

	const formData = new FormData(event.target);
	var previewText = $('#codeMirrorProductPreview').data('CodeMirrorInstance').getValue();
	var descriptionText = $('#codeMirrorProductDescription').data('CodeMirrorInstance').getValue();
	var documentationText = $('#codeMirrorProductDocumentation').data('CodeMirrorInstance').getValue();

	// Убираем все пробелы и энтеры, если поле пустое
	previewText = previewText.replace(/(\r\n|\n|\r|\s)/gm, "").length == 0 ? "" : previewText;
	descriptionText = descriptionText.replace(/(\r\n|\n|\r|\s)/gm, "").length == 0 ? "" : descriptionText;
	documentationText = documentationText.replace(/(\r\n|\n|\r|\s)/gm, "").length == 0 ? "" : documentationText;

	formData.set('preview', previewText);
	formData.set('description', descriptionText);
	formData.set('documentation', documentationText);

	fetch('/admin/products/create/', {
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
			title: 'Товар успешно добавлен!',
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
			subtitle: 'Товар не был добавлен',
			body: `${error.message}`,
			autohide: true,
			delay: 6000,
		})
		console.log(error)
	});
}