import styled from 'styled-components';
import { MAIN_BACKGROUND, MAIN_TEXT_COLOR } from "../../const";

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    padding: 0 21%;

    z-index: 2;

    width: 100%;
    height: 50px;

    overflow: hidden;
    color: ${MAIN_TEXT_COLOR};

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
        Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

export const Logo = styled.div`
    font-weight: 600;
    font-family: 'Poppins', sans-serif;

`
