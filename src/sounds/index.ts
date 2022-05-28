const CLICK_AUDIO = new Audio("/static/audio/click.wav");
const WINDOW_AUDIO_OPEN = new Audio("/static/audio/window_open.ogg");
const WINDOW_AUDIO_CLOSED = new Audio("/static/audio/window_closed.ogg");

export default function initializeSounds() {
    window.addEventListener("mousedown", () => {
        CLICK_AUDIO.play();
    });
}

export function openWindowSound(open: boolean) {
    (open ? WINDOW_AUDIO_OPEN : WINDOW_AUDIO_CLOSED).play();
}
