import { check_outros } from "svelte/internal";

// Set state of webview based on button clicked (active, hidden)
export function setState(e) {

    var webId: String = "";
    var webViews: HTMLCollectionOf<Element> = document.getElementsByClassName('view');

    if(e.srcElement.tagName != "BUTTON"){
        webId = e.srcElement.querySelector(".icon-button").getAttribute("web-id");
    } else {
        webId = e.srcElement.getAttribute("web-id");
    }

    for(var webView of webViews) {
        //@ts-ignore
        var selectedId: String = webView.children.getAttribute("web-id")

        if(webId == selectedId){
            webView.parentElement.classList.add("active");
            webView.parentElement.classList.remove("hidden");
        } else {
            webView.parentElement.classList.remove("active");
            webView.parentElement.classList.add("hidden");
        }
    }
        
}
