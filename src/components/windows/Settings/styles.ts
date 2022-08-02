import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;

    overflow: hidden;

    padding: 0 30px;

    & h4 {
        margin: 30px 0 5px 0;
    }
`;

export const Separator = styled.div`
    width: 100%;
    height: 2px;

    margin: 10px 0;

    ${(props: any) => `
        background: ${props.theme.light ? "#1d1e1c" : "#fff"};
    `}
`
