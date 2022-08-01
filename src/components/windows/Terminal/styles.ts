
import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;

    position: relative;
    opacity: .9;

    & .terminal.xterm {
        height: calc(100% + 5px);
        padding: 10px 20px;
    }
`
