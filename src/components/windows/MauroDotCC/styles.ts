
import styled from "styled-components";

export const Wrapper = styled.div`
    overflow: auto;
    height: 100%;
    width: 100%;

    padding: 15px;

    & * {
        font-size: 1em;
        font-weight: bold;
        maring: 0;
    }

    & > pre {
        background: ${(props: any) => props.theme.windowBackground} !important;
    }

    & .react-syntax-highlighter-line-number {
        color: ${(props: any) => props.theme.light ? '#000' : '#fff'} !important;
        opacity: .7;
    }
`
