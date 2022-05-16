
export default function initializeSounds() {

    window.addEventListener("click", () => {
        new Audio("/static/audio/click.wav").play();
    })
}
