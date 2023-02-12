import styled from 'styled-components';
import { css } from 'styled-components';

export const PageWrapper = styled.div`

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    background: linear-gradient(90deg,${(props: any) => props.theme.colors.HOME_BACKGROUND} 15px,transparent 1%) 50%,linear-gradient(${(props: any) => props.theme.colors.HOME_BACKGROUND} 15px,transparent 1%) 50%,${(props: any) => props.theme.theme === "light" ? "#050505" : "hsla(0,0%,100%,.16)"};
    background-size: 16px 16px;

    ${(props: any) => props.theme.theme === "light" ? `
        animation-name: background-fade;
        animation-duration: 5s;
        animation-delay: 2.5s;
        animation-play-state: running;
        animation-fill-mode: forwards;
    ` : ``}

    width: 100%;
    height: 100vh;
    max-height: 100vh;

    position: relative;

    overflow: hidden;
    color: ${(props: any) => props.theme.colors.MAIN_TEXT_COLOR};

    display: flex;

    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
        Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    @keyframes background-fade {
        from {
            background: linear-gradient(90deg,${(props: any) => props.theme.colors.HOME_BACKGROUND} 15px,transparent 1%) 50%,linear-gradient(${(props: any) => props.theme.colors.HOME_BACKGROUND} 15px,transparent 1%) 50%,${(props: any) => props.theme.theme === "light" ? props.theme.colors.HOME_BACKGROUND : "hsla(0,0%,100%,.16)"};
            background-size: 16px 16px;
        }
        to {
            background: ${(props: any) => props.theme.colors.HOME_BACKGROUND};
        }
    }
`

export const LightThemeNoise = styled.div`
    background-image: url(/static/images/noise.png);
    position: fixed;
    inset: 0px;
    mix-blend-mode: hard-light;
    pointer-events: none;
`
