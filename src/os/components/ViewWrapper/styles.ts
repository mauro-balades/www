import styled from "styled-components";
import {get} from "../../../configuration";

const WRAPPER_TEMPLATE = `

    font-family: "Quicksand",sans-serif;
    font-weight: 500;

    cursor: url("/static/images/cursor_auto.png"), auto;

    & .pointer {
        cursor: url("/static/images/cursor_pointer.png"), pointer;
    }

    // SCROLL BARS
    & .scrollbar::-webkit-scrollbar {
        width: 1rem;
        background-color: #dadad3;
    }

    & .scrollbar::-webkit-scrollbar-thumb {
        border: 2px solid #1d1d1b;
        border-right: none;
        background-color: #c1c1bf;
    }


    & .scrollbar::-webkit-scrollbar-track {
        border: 2px solid #1d1d1b;
        border-top: none;
        border-right: none;
    }
`;

export default WRAPPER_TEMPLATE;

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    overflow: hidden;
    background: ${(props: any) => props.theme.viewBackground};

    ${(props: any) => props.theme.viewHasPixels ? 'background-image: url(/static/svg/pixels-dark.svg) top left;' : ''};


    position: relative;

    ${WRAPPER_TEMPLATE}
`;

export const NavigationBarWrapper = styled.nav`
    height: 40px;
    width: calc(100% - 14px);

    background: ${(props: any) => props.theme.navigationBackground};
    // border-bottom: 2px solid #1d1e1c;

    display: flex;
    align-items: center;

    & div.menu_item {
        font-weight: 600;
        margin: 10px;
    }

    & div.menu_item:first-child {
        margin-left: 20px;
    }

    position: absolute;
    z-index: 9;
    margin: 5px;

    border-radius: 3px;
    box-shadow: 0 0.3rem 0 rgb(29 30 28 / 26%);
    border: 2px solid ${(props: any) => (props.theme.light ? "#000" : "#fff")};

    color: ${(props: any) => (props.theme.light ? "#1d1e1c" : "#fff")};

    ${WRAPPER_TEMPLATE}
`;

export const IntroductionWrapper = styled.div`
    width: 100%;
    height: 100vh;

    overflow: hidden;
    background: ${(props: any) => props.theme.viewBackground};
    ${(props: any) => props.theme.viewHasPixels ? 'background-image: url(/static/svg/pixels-dark.svg) top left;' : ''};


    position: relative;

    ${WRAPPER_TEMPLATE}
`
