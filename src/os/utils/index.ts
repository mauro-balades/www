
var current_index = 0;

export const focusWindow = (element: HTMLDivElement) => {
    current_index++;
    element.style.zIndex = current_index.toString();
}

export const generateRandomBinary = (binaryLength: Number) => {
    let binary = "";
    for(let i = 0; i < binaryLength; ++i) {
      binary += Math.floor(Math.random() * Math.floor(2));
    }

    return binary;
}

export const sendEmail = (subject: String, body: String) => {
  window.open(`mailto:mauro.balades@tutanota.com?subject=`, "_blank")
}

export const requestFullScreen = (element: any = document.body) => {
  // Supports most browsers and their versions.
  var requestMethod = element.requestFullscreen || element.webkitRequestFullcreen || element.mozRequestFullScreen || element.msRequestFullScreen;

  if (requestMethod) { // Native full screen.
      requestMethod.call(element);

    // @ts-ignore
  } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.

    // @ts-ignore
    var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
          wscript.SendKeys("{F11}");
      }
  }
}

export const requestExitFullScreen = () => {
  // Supports most browsers and their versions.
  document.exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err))
}

export const WINDOW_CLASS = "window--handle";