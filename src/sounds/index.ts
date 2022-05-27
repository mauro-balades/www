
const CLICK_AUDIO = new Audio("/static/audio/click.wav");

export default function initializeSounds() {
    window.addEventListener("click", () => {
        CLICK_AUDIO.play();
    });
}
