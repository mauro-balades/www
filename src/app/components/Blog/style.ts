import styled from 'styled-components';
import { MAIN_BACKGROUND, MAIN_TEXT_COLOR } from "../../const";

export const PageWrapper = styled.div`
    // background: ${MAIN_BACKGROUND};

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    background: linear-gradient(90deg,#050505 15px,transparent 1%) 50%,linear-gradient(#050505 15px,transparent 1%) 50%,hsla(0,0%,100%,.16);
    background-size: 16px 16px;
    
    width: 100%;
    height: 100vh;
    max-height: 100vh;

    position: relative;

    overflow: hidden;
    color: ${MAIN_TEXT_COLOR};

    display: flex;

    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
        Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`
