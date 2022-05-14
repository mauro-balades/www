
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    overflow: hidden;
    background: #54B9AD;

    font-family: "Rubik", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;

    cursor: url('/static/images/cursor_auto.png'), auto;

    & .pointer {
        cursor: url('/static/images/cursor_pointer.png'), pointer;
    }
`
