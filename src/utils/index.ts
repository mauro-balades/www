
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

export const WINDOW_CLASS = "window--handle";