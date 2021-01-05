// Start listening for update in views and start loading
function listenUpdate(activeView, progressIndicator) {

  const loadstart = () => {
    progressIndicator.style.width = "50%";
    progressIndicator.style.animation = "bounce 1.7s infinite";
  }

  const loadstop = () => {
    progressIndicator.style.width = "0%";
    progressIndicator.style.animation = "";
  }

  activeView.addEventListener('did-start-loading', loadstart);
  activeView.addEventListener('did-stop-loading', loadstop);

}

// On ready start loading first active view
onload = () => {
  const progressIndicator = document.querySelector('.progress-indicator');
  var views = document.querySelector('.views-container');
  var activeView = views.querySelector('.active').firstChild;

  listenUpdate(activeView, progressIndicator)
}

// Listen for new active views
export function webViewLoading() {
  const progressIndicator = document.querySelector('.progress-indicator');
  var views = document.querySelector('.views-container');
  var activeView = views.querySelector('.active').firstChild;

  listenUpdate(activeView, progressIndicator)
}

