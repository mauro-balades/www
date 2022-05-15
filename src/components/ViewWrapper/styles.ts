import styled from "styled-components";

const NAVIGATION_BAR_HEIGHT = "4";
const WRAPPER_TEMPLATE = `
    font-family: "Rubik", "HelveticaNeue-Light", "Helvetica Neue Light",
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;

    cursor: url("/static/images/cursor_auto.png"), auto;

    & .pointer {
        cursor: url("/static/images/cursor_pointer.png"), pointer;
    }
`;

export default WRAPPER_TEMPLATE;

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    overflow: hidden;
    background: #54b9ad;

    position: relative;

    ${WRAPPER_TEMPLATE}
`;

export const NavigationBarWrapper = styled.nav`
    height: ${NAVIGATION_BAR_HEIGHT}vh;
    width: calc(100% - 14px);

    background: #fad844;
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
    border: 2px solid #000;

    ${WRAPPER_TEMPLATE}
`
