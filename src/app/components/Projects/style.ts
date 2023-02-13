import styled from 'styled-components';

export const PageWrapper = styled.div`

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    ${(props: any) => props.theme.theme === "light" ? `
        background: ${props.theme.colors.HOME_BACKGROUND};
    ` : `
        background: linear-gradient(90deg,${props.theme.colors.HOME_BACKGROUND} 15px,transparent 1%) 50%,linear-gradient(${props.theme.colors.HOME_BACKGROUND} 15px,transparent 1%) 50%,${props.theme.theme === "light" ? "#050505" : "hsla(0,0%,100%,.16)"};
        background-size: 16px 16px;
    `}

    width: 100%;
    height: 100vh;
    max-height: 100vh;

    position: relative;

    overflow: hidden;
    color: ${(props: any) => props.theme.colors.MAIN_TEXT_COLOR};

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
        Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`
