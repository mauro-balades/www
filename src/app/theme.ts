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

    BLOG_BACKGROUND:'#D6D6D6',
    BLOG_BORDER_CLR:'rgb(24,24,24,.6)',

    HOME_BACKGROUND: '#EDEDED',

    MAIN_BACKGROUND_INVERTED: '#000',
    MAIN_TEXT_COLOR_INVERTED: '#000',
}

var MAIN_BACKGROUND = '';
var MAIN_TEXT_COLOR = '';

var HOME_BACKGROUND = '';

var BLOG_BACKGROUND = '';
var BLOG_BORDER_CLR = '';

export var BLOG_NAV_WIDTH  = '350px';

var MAIN_BACKGROUND_INVERTED = '';
var MAIN_TEXT_COLOR_INVERTED = '';

export const setColors = (colors: Theme) => {
    MAIN_BACKGROUND = colors.MAIN_BACKGROUND;
    MAIN_TEXT_COLOR = colors.MAIN_TEXT_COLOR;

    BLOG_BACKGROUND = colors.BLOG_BACKGROUND;
    BLOG_BORDER_CLR = colors.BLOG_BORDER_CLR;

    MAIN_BACKGROUND_INVERTED = colors.MAIN_BACKGROUND_INVERTED;
    MAIN_TEXT_COLOR_INVERTED = colors.MAIN_TEXT_COLOR_INVERTED;

    HOME_BACKGROUND = colors.HOME_BACKGROUND;
}

setColors(get("app-theme") === "light" ? light_theme : dark_theme);

export const getColors = () => {
    return {
        MAIN_BACKGROUND,
        MAIN_TEXT_COLOR,

        BLOG_BACKGROUND,
        BLOG_BORDER_CLR,

        MAIN_BACKGROUND_INVERTED,
        MAIN_TEXT_COLOR_INVERTED,

        HOME_BACKGROUND
    }
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


