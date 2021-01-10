import { check_outros } from "svelte/internal";
import { webViewLoading } from "../../scripts/webViewLoadingIndicator";

// Set state of a view based on button clicked (active, hidden)
export function setState(e) {

    //@ts-ignore
    var views = document.querySelector('.views-container').children;
    var activeIconButtons = document.getElementsByClassName('side-icon-button active');
    var webId: String = "";
    var btnPressed;
    
    // Check if button or div pressed (button not 100% width)
    if(e.srcElement.hasAttribute("web-id")) {
        webId = e.srcElement.getAttribute("web-id");
        btnPressed = e.srcElement.parentElement.parentElement;
    } else {
        webId = e.srcElement.firstChild.firstChild.getAttribute("web-id");
        btnPressed = e.srcElement
    }

    // Check active button and disable
    for(var activeIconButton of activeIconButtons) {
        activeIconButton.classList.remove("active");
    }
    
    btnPressed.classList.add("active");

    // Set active webview appending class
    for(var view of views) {
        //@ts-ignore
        if(webId == view.firstChild.getAttribute("web-id")){
            view.classList.add("active");
            view.classList.remove("hidden");
        } else {
            view.classList.remove("active");
            view.classList.add("hidden");
            //iconButtons[i].classList.remove("active");
        }
    }

    // Update active view and start loading bar
    webViewLoading();
        
}
