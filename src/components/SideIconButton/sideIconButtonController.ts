import { check_outros } from "svelte/internal";

// Set state of a view based on button clicked (active, hidden)
export function setState(e) {

<<<<<<< HEAD
    var webId: String = "";
    var webViews: HTMLCollectionOf<Element> = document.getElementsByClassName('view');
=======
    var webId = "";
    var views = document.getElementsByClassName('view');
>>>>>>> e8bc40e85ee4fb5054fbaae60c4ab1f260e458b1

    if(e.srcElement.tagName != "BUTTON"){
        webId = e.srcElement.querySelector(".icon-button").getAttribute("web-id");
    } else {
        webId = e.srcElement.getAttribute("web-id");
    }

<<<<<<< HEAD
    for(var webView of webViews) {
        //@ts-ignore
        var selectedId: String = webView.children.getAttribute("web-id")

        if(webId == selectedId){
            webView.parentElement.classList.add("active");
            webView.parentElement.classList.remove("hidden");
=======
    for(var view of views) {
        //@ts-ignore
        if(webId == view.firstChild.getAttribute("web-id")){
            view.classList.add("active");
            view.classList.remove("hidden");
>>>>>>> e8bc40e85ee4fb5054fbaae60c4ab1f260e458b1
        } else {
            view.classList.remove("active");
            view.classList.add("hidden");
        }
    }
        
}
