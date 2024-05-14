window.addEventListener("load",function(event) {
    SetupCopyOnClipboard();
},false);

SetupCopyOnClipboard = () => {
    var copyToClipboardElements = document.getElementsByClassName('js-copy-clipboard');

    for (var i = 0; i < copyToClipboardElements.length; i++) {
        var element = copyToClipboardElements[i];
        element.style.cursor = "pointer";

        element.addEventListener('click', (event) => {
            event.preventDefault();

            const targer = event.currentTarget;
            const textToCopy = targer.dataset.clipboard;

            targer.style.color = "#de4949";
            navigator.clipboard.writeText(textToCopy);

            setTimeout(() => {
            	targer.style.color = "inherit"
            }, 1000);
        });
    }
}