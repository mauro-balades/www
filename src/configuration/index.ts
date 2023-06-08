import { themeKeys } from "../os/theme/theming";

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
    set("os-theme", themeKeys[0]);
    set("cookies", "0");
    set("pong", "0");
    set("app-theme", "light");
    
    window.location.reload();
}

export function settingsExists() {
    return get("os-theme") && get("app-theme") && get("cookies") && get("pong");
}
