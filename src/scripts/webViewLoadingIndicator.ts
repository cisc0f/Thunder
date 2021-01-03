export function loadingWebView(webview) {
    const indicator = document.querySelector('.loading-indicator') as HTMLElement;

    const loadstart = () => {
      indicator.style.backgroundColor  = 'blue';
    }

    const loadstop = () => {
      indicator.style.backgroundColor = 'transparent';
    }

    webview.addEventListener('did-start-loading', loadstart)
    webview.addEventListener('did-stop-loading', loadstop)
}

