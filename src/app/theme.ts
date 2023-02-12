import { get } from "../configuration";

interface Theme {
    MAIN_BACKGROUND: string;
    MAIN_TEXT_COLOR: string;

    BLOG_BACKGROUND: string
    BLOG_BORDER_CLR: string

    HOME_BACKGROUND: string;

    MAIN_BACKGROUND_INVERTED: string;
    MAIN_TEXT_COLOR_INVERTED: string;
}

export var dark_theme: Theme = {
    MAIN_BACKGROUND: '#000',
    MAIN_TEXT_COLOR: '#fff',

    BLOG_BACKGROUND:'rgba(10,10,10,1)',
    BLOG_BORDER_CLR:'rgb(24,24,24)',

    HOME_BACKGROUND: '#050505',

    MAIN_BACKGROUND_INVERTED: '#fff',
    MAIN_TEXT_COLOR_INVERTED: '#000',
};

export const light_theme: Theme = {
    MAIN_BACKGROUND: '#fff',
    MAIN_TEXT_COLOR: '#000',

    BLOG_BACKGROUND:'hsl(0, 0%, 93%)',
    BLOG_BORDER_CLR:'rgb(24,24,24,.6)',

    HOME_BACKGROUND: '#EDEDED',

    MAIN_BACKGROUND_INVERTED: '#000',
    MAIN_TEXT_COLOR_INVERTED: '#000',
}

var theme: Theme;

export var BLOG_NAV_WIDTH  = '350px';

export const setColors = (colors: Theme) => {
    theme = colors;
}

setColors(get("app-theme") === "light" ? light_theme : dark_theme);

export const getColors = () => {
    return theme;
}

export namespace alignment {
    export const LG = '25rem';
    export const MD  = '15rem';
    export const SM  = '5%';
    // TODO

    export const size = {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
    };

    export const device = {
        mobileS: `(max-width: ${size.mobileS})`,
        mobileM: `(max-width: ${size.mobileM})`,
        mobileL: `(max-width: ${size.mobileL})`,
        tablet: `(max-width: ${size.tablet})`,
        laptop: `(max-width: ${size.laptop})`,
        laptopL: `(max-width: ${size.laptopL})`,
        desktop: `(max-width: ${size.desktop})`,
        desktopL: `(max-width: ${size.desktop})`
    };
}


