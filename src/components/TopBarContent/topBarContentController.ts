import { loadingWebView } from '../../scripts/webViewLoadingIndicator';

// Search active webview
function searchActiveWebView() {
    return document.querySelector('.active').firstChild;
}

// Forward Controller
export function goForward() {
    const webViewContainer = searchActiveWebView();
    loadingWebView(webViewContainer);
    //@ts-ignore
    webViewContainer.goForward();
}

// Backward Controller
export function goBackward() {
    const webViewContainer = searchActiveWebView();
    loadingWebView(webViewContainer);
    //@ts-ignore
    webViewContainer.goBack();
}

// Reload Controller
export function reloadPage() {
    const webViewContainer = searchActiveWebView();
    loadingWebView(webViewContainer);
    //@ts-ignore
    webViewContainer.reload();
}