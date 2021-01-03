import { check_outros } from "svelte/internal";

// Set state of a view based on button clicked (active, hidden)
export function setState(e) {

    var webId = "";
    var views = document.getElementsByClassName('view');

    if(e.srcElement.tagName != "BUTTON"){
        webId = e.srcElement.querySelector(".icon-button").getAttribute("web-id");
    } else {
        webId = e.srcElement.getAttribute("web-id");
    }

    for(var view of views) {
        //@ts-ignore
        if(webId == view.firstChild.getAttribute("web-id")){
            view.classList.add("active");
            view.classList.remove("hidden");
        } else {
            view.classList.remove("active");
            view.classList.add("hidden");
        }
    }

   
}
