
// MARK: - Init --------------------------------------------------------------------------	

function SetupEditPage() {
	const editForm = document.getElementById('js-editLicenseForm');
	if (!editForm) return;
	editForm.addEventListener('submit', handleEditLicenseFormSubmit);
}

window.addEventListener("load", function(event) {
	SetupEditPage();
}, false);

// MARK: - Public Methods --------------------------------------------------------------------------

function handleEditLicenseFormSubmit(event) {
	event.preventDefault();

	const productId = this.dataset.productId;
	const preparedIpAddresses = prepareIpAddressesData();
	console.log(preparedIpAddresses)

	const formData = new FormData();
	formData.append('productId', productId);
	formData.append('ipAddresses[]', JSON.stringify(preparedIpAddresses));

	fetch('/license/edit/', {
		method: 'PUT',
		body: formData
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
		console.log("success handled");
		console.log({data: data.message});
		$.notify(data.message, "success");
		// window.location.reload();
	})
	.catch(error => {
		console.log("error handled");
		console.log(error.message)
		$.notify(error.message, "error");
	});

	// $.notify("123");

}

function prepareIpAddressesData() {
	var results = [];
	const inputs = document.getElementsByClassName('js-ip_input');

	Array.from(inputs).forEach(input => {
		const value = input.value;
		const licenseId = input.dataset.licenseId || null;
		const serverIp = input.dataset.serverIp;

		if (value == serverIp) return;
		if (!licenseId && (value.length == 0)) return;

		results.push({
			licenseId: licenseId,
			value: value
		})
	})

	return results;
}