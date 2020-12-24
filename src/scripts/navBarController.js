// Controls for navbar buttons

function goBackwardButton() {
    const webview = document.getElementById('webview');
    webview.goBack();
}

function goForwardButton() {
    const webview = document.getElementById('webview');
    webview.goForward();
}
