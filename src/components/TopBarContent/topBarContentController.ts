function getActiveView () {
    var views = document.querySelector('.views-container');
    var activeView = views.querySelector('.active').firstChild;

    return activeView;
}

// Forward Controller
export function goForward() {
    const view = getActiveView();
    //@ts-ignore
    view.goForward();
}

// Backward Controller
export function goBackward() {
    const view = getActiveView();
    //@ts-ignore
    view.goBack();
}

// Reload Controller
export function reloadPage() {
    const view = getActiveView();
    //@ts-ignore
    view.reload();
}