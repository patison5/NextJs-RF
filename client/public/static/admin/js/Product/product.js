
// MARK: - Init --------------------------------------------------------------------------

SetupProduct = () => {
	const api = "https://api.exchangerate-api.com/v4/latest/USD";
	fetch(`${api}`).then(currency => {
		return currency.json();
	}).then((currency) => {
		g_WorldCurrencyRates = currency.rates;
		g_CurrencyInputs.forEach((input) => {
			var event = new Event('change');
			input.dispatchEvent(event);
		})
	});

	var previewImageInput = document.getElementById("product_logo");
	if (previewImageInput) {
		previewImageInput.addEventListener("change", setImagePreview)
	}
}

window.addEventListener("load", function(event) {
	SetupProduct();
}, false);

// MARK: - Public Properties --------------------------------------------------------------------------

var g_WorldCurrencyRates;
var g_CurrencyInputs = [];

// MARK: - Public Methods --------------------------------------------------------------------------

function FormatInputCurrency(value, from, to) {
	if (!g_WorldCurrencyRates) return;
	if (typeof value === 'string' || value instanceof String) {
		value = value.replace(/\s/g, '');
		value = parseInt(value)
	}
	let fromRate = g_WorldCurrencyRates[from];
	let toRate = g_WorldCurrencyRates[to];
	return parseInt(((toRate / fromRate) * value));
}

function GetFormatedPrice(price) {
	return (price).toLocaleString("ru-RU", { minimumFractionDigits: 0 });
}

function UpdateFinalPriceInputs(priceUsd, priceRub) {
	var finalPriceTextInputUsd = document.getElementById('product_final_price_usd');
	var finalPriceTextInputRub = document.getElementById('product_final_price_rub');
	var discountTextInput = document.getElementById('product_discount');
	let discount = discountTextInput.value ? discountTextInput.value : 0;
	let finalPriceUsd = parseInt(priceUsd - priceUsd * discount / 100);
	let finalPriceRub = parseInt(priceRub - priceRub * discount / 100);
	let formatedPriceUsd = GetFormatedPrice(finalPriceUsd);
	let formatedPriceRub = GetFormatedPrice(finalPriceRub);
	finalPriceTextInputUsd.value = formatedPriceUsd;
	finalPriceTextInputRub.value = formatedPriceRub;
}

function GetLinksValues() {
	var linkInputs = document.getElementsByClassName('product_link-js');
	var result = [];
	Array.from(linkInputs).forEach(linkInput => {
		result.push({
			id: linkInput.dataset.id,
			value: linkInput.value,
			title: linkInput.dataset.title
		})
	});
	return result;
}

// MARK: - Private Methods --------------------------------------------------------------------------

function handleDeleteButton(button) {
	let id = button.dataset.id;
	console.log(id)
	console.log("wtf")

	fetch('/admin/products/', {
		method: 'DELETE',
		body: JSON.stringify({
			product_id: id,
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
		case 500:
			return response.json().then(data => {
		      throw new Error(data.error);
		    });
		default:
			throw new Error(`HTTP error! Status: ${response.status} ${response.error}`);
		}
	})
	.then(data => {
		window.location.href = '/admin/products/';
	})
	.catch(error => {
		console.log(error);
	});
}

function setImagePreview(event) {
	const input = event.target;
	var imagePreview = document.getElementById("preview-js");
	const file = input.files[0];
	if (!file) {
		imagePreview.src = '';
		return;
	}
	const reader = new FileReader();
	reader.onload = function (e) {
		imagePreview.src = e.target.result;
	};
	reader.readAsDataURL(file);
}