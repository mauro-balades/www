import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    padding: 0 20px;

    overflow: auto;

    color: ${(props: any) => props.theme.terminalForeground} !important;
    background: ${(props: any) => props.theme.terminalBackground};

    & .react-hack-text * {
        color: ${(props: any) => props.theme.terminalForeground} !important;
        text-shadow: none !important;
        font-weight: 600;
    }
`;
