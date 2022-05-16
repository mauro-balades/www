import { themeKeys } from "../theme/theming";

export function set(key: string, value: string) {
    localStorage.setItem(key, value);
}

export function get(key: string) {
    return localStorage.getItem(key);
}

export function clear() {
    localStorage.clear();
}

export function remove(key: string) {
    localStorage.removeItem(key);
}

export function defaultSettings() {
    set("theme", themeKeys[0]);
    set("cookies", "0");
}

export function settingsExists() {
    return (
        get("theme") &&
        get("cookies")
    )
}
