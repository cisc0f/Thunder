import { check_outros } from "svelte/internal";

// Set state of webview based on button clicked (active, hidden)
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
            webView.parentElement.classList.add("active");
            webView.parentElement.classList.remove("hidden");
        } else {
            webView.parentElement.classList.remove("active");
            webView.parentElement.classList.add("hidden");
        }
    }

   
}
