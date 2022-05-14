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

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - ${NAVIGATION_BAR_HEIGHT}vh);

    overflow: hidden;
    background: #54b9ad;

    position: relative;

    ${WRAPPER_TEMPLATE}
`;

export const NavigationBarWrapper = styled.nav`
    height: ${NAVIGATION_BAR_HEIGHT}vh;
    width: 100%;

    background: #fad844;
    border-bottom: 2px solid #1d1e1c;

    display: flex;
    align-items: center;

    & div.menu_item {
        font-weight: 600;
        margin: 10px;
    }

    & div.menu_item:first-child {
        margin-left: 20px;
    }

    ${WRAPPER_TEMPLATE}
`
