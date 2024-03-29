import styled from 'styled-components';
import { alignment } from "../../theme";

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    padding: 10px ${alignment.LG};

    @media ${alignment.device.laptopL} {
        padding: 10px ${alignment.MD};
    }

    @media ${alignment.device.laptop} {
        padding: 10px ${alignment.SM};
    }

    z-index: 2;

    width: 100%;
    height: 5rem;

    overflow: hidden;
    color: ${(props: any) => props.theme.colors.MAIN_TEXT_COLOR};

    pointer-events: none;
    & * {
        pointer-events: auto;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: rubik,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
`

export const Logo = styled.div`
    font-weight: 600;
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
        background: ${(props: any) => props.theme.colors.MAIN_BACKGROUND_INVERTED};

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
        background: ${(props: any) => props.theme.colors.MAIN_BACKGROUND_INVERTED};

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
