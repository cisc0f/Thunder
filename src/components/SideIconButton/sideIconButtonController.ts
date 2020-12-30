import { check_outros } from "svelte/internal";

// Set state of webview based on button clicked (active, hidden, offscreen)
export function setState(e) {

    var webId = "";
    var webViews = document.getElementsByTagName('webview');

    if(e.srcElement.tagName != "BUTTON"){
        webId = e.srcElement.querySelector(".icon-button").getAttribute("web-id");
    } else {
        webId = e.srcElement.getAttribute("web-id");
    }

    for(var webView of webViews) {
        if(webId == webView.getAttribute("web-id")){
            webView.classList.add("active");
            webView.classList.remove("hidden");
        } else {
            webView.classList.remove("active");
            webView.classList.add("hidden");
        }
    }

   
}
