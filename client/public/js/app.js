window.addEventListener("load",function(event) {
    SetupCheckout();
},false);


SetupCheckout = () => {
    const buttonAddIpAddress = document.getElementById('js-button__addIpAddress');
    const buttonAddModpack = document.getElementById('js-button__addModpack');
    const submitBillingForm = document.getElementById('js-submit-billing');

    if (buttonAddIpAddress)
        buttonAddIpAddress.addEventListener('click', handleAddIPAddressButton);

    if (buttonAddModpack)
        buttonAddModpack.addEventListener('click', handleAddModpackButton);

    if (submitBillingForm)
        submitBillingForm.addEventListener('submit', handleBillingSubmit);
}

// MARK: - Handling Methods --------------------------------------------------------------------------

function handleAddIPAddressButton(event) {
    var newInput = document.createElement('input');
    newInput.classList.add('form-control', 'mt-3', 'js-server-id-address');
    newInput.setAttribute("placeholder", "192.168.1.1")
    document.getElementById('group-ip-addresses').appendChild(newInput);
}

function handleAddModpackButton(event) {
    var newInput = document.createElement('input');
    newInput.classList.add('form-control', 'mt-3', 'js-modpack-link');
    newInput.setAttribute("placeholder", "https://steam/modpacklink")
    document.getElementById('group-steampack').appendChild(newInput);
}

function handleBillingSubmit(event) {
    event.preventDefault(); 

    resetAllBorders();

    let localMachineIPInput = document.getElementById('js-server-local_machine-ip');
    const localMachineIPAddress = localMachineIPInput.value;
    if (!validateIPAddress(localMachineIPAddress)) {
        localMachineIPInput.style.border = "1px solid red";
        console.log("local ip Addreses is not valid")
        return;
    }

    const [ isAllIPAddressesValid, serverIPAddresses ] = getServerIPAdressess();
    const [ isAllSteamWorkshopItemLinsValid, steamModpackLinks ] = getSteamModpackLinks();

    if (!isAllIPAddressesValid || !isAllSteamWorkshopItemLinsValid) {
        console.log("Not all ip Addreses or steam workshop items' links are valid - return");
        return;
    }

    const formData = new FormData(event.target);

    var data = {
        projectName: formData.get('project-name'),
        steamProfile: formData.get('steam-profile-link'),
        localMachineIp: localMachineIPAddress,
        serverIPAddresses: serverIPAddresses,
        steamModpackLinks: steamModpackLinks,
        paymentMethods: formData.get('payment')
    }

    console.log(data)

    SendRequest(data);
}

// MARK: - Handle POST Request --------------------------------------------------------------------------

function SendRequest(data) {
    fetch('/checkout', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => {
        console.log(response)
        return response.json();
    })
    .then(jsonData => {[
        console.log(jsonData)
    ]})
    .catch(error => {
        console.log(error)
    })
}

// MARK: - Preparation Data Methods --------------------------------------------------------------------------

function resetAllBorders() {
    let localMachineIPInput = document.getElementById('js-server-local_machine-ip');
    localMachineIPInput.style.border = "1px solid #ced4da";

    var serverIPAddressInputsArray = document.getElementsByClassName('js-server-id-address');
    Array.from(serverIPAddressInputsArray).forEach(input => {
        input.style.border = "1px solid #ced4da";
    })

    var steamModpackLinksInputsArray = document.getElementsByClassName('js-modpack-link');
    Array.from(steamModpackLinksInputsArray).forEach(input => {
        input.style.border = "1px solid #ced4da";
    })
}

function getServerIPAdressess() {
    var serverIPAddressInputsArray = document.getElementsByClassName('js-server-id-address');
    var result = [];
    for (var i = 0; i < serverIPAddressInputsArray.length; i++) {
        var serverIPAddressInput = serverIPAddressInputsArray[i];
        var ip = serverIPAddressInput.value
        if (!ip) continue;
        if (!validateIPAddress(ip)) {
            serverIPAddressInput.style.border = "1px solid red";
            return [false, result];
        }
        result.push(ip);
    }
    return [true, result];
}

function getSteamModpackLinks() {
    var steamModpackLinksInputsArray = document.getElementsByClassName('js-modpack-link');
    var result = [];
    for (var i = 0; i < steamModpackLinksInputsArray.length; i++) {
        var steamModpacLinkInput = steamModpackLinksInputsArray[i];
        var link = steamModpacLinkInput.value;
        if (!link) continue;
        if (!validateSteamWorkshopItemLink(link)) {
            steamModpacLinkInput.style.border = "1px solid red";
            return [false, []]
        }
        result.push(link);
    }
    return [true, result];
}

// MARK: - Validating Data Methods --------------------------------------------------------------------------

function validateIPAddress(ip) {
    const ipPattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipPattern.test(ip);
}

function validateSteamProfileLink(link) {
    const steamProfilePattern = /^(https?:\/\/)?(www\.)?steamcommunity\.com\/id\/[a-zA-Z0-9-_]+(\/)?$/;
    return steamProfilePattern.test(link);
}

function validateSteamWorkshopItemLink(link) {
    const steamWorkshopPattern = /^(https?:\/\/)?(www\.)?steamcommunity\.com\/sharedfiles\/filedetails\/\?id=\d+$/;
    return steamWorkshopPattern.test(link);
}