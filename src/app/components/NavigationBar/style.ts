import styled from 'styled-components';
import { alignment, MAIN_BACKGROUND, MAIN_BACKGROUND_INVERTED, MAIN_TEXT_COLOR } from "../../const";

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    padding: 10px ${alignment.BIG};

    z-index: 2;

    width: 100%;
    height: 5rem;

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

export const Link = styled.div`
    opacity: .7;
    position: relative;
    font-weight: 600;

    margin: 0 10px;

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0%;

        height: 2px;
        border-radius: 1px;

        width: -webkit-fill-available;
        transition: .2s;
        background: ${MAIN_BACKGROUND_INVERTED};

        margin: 0 100% 0 100%;
    }

    &.active {
        opacity: 1;
    }

    &:hover::after {
        margin: 0;
    }
`

export const LastLink = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 500;

    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0%;

        height: 2px;
        border-radius: 1px;

        width: -webkit-fill-available;
        transition: .2s;
        background: ${MAIN_BACKGROUND_INVERTED};

        margin: 0 100% 0 100%;
    }

    &:hover::after {
        margin: 0;
    }

    & svg {
        width: 1.1rem;
        height: 1.1rem;

        margin-left: 5px;
        transition: .1s;
    }

    &:hover svg {
        transform: translateX(5px);
    }
`

export const Links = styled.div`
    display: flex;
    justify-content: center;
`
