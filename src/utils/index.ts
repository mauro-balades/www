
var current_index = 0;

export const focusWindow = (element: HTMLDivElement) => {
    current_index++;
    element.style.zIndex = current_index.toString();
}

export const WINDOW_CLASS = "window--handle";