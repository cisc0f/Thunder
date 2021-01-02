// Forward Controller
export function goForward() {
    const webViewContainer = document.querySelector('.active').firstChild;
    //@ts-ignore
    webViewContainer.goForward();
}

// Backward Controller
export function goBackward() {
    const webViewContainer = document.querySelector('.active').firstChild;
    //@ts-ignore
    webViewContainer.goBack();
}

// Reload Controller
export function reloadPage() {
    const webViewContainer = document.querySelector('.active').firstChild;
    //@ts-ignore
    webViewContainer.reload();
}