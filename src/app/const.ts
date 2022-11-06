
export const MAIN_BACKGROUND = '#000';
export const MAIN_TEXT_COLOR = '#fff';

export const BLOG_BACKGROUND = 'rgba(10,10,10,1)';
export const BLOG_BORDER_CLR = 'rgb(24,24,24)   ';

export const BLOG_NAV_WIDTH  = '350px';

export const MAIN_BACKGROUND_INVERTED = '#fff';
export const MAIN_TEXT_COLOR_INVERTED = '#000';

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
