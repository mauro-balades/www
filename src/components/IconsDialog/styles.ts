
import styled from "styled-components"

export const Wrapper = styled.div`
    position: absolute;

    padding: 2.5px;

    background: ${(props: any) => props.theme.navigationBackground};
    border: 2px solid ${(props: any) => (props.theme.light ? "#000" : "#fff")};
    border-radius: 4px;
    box-shadow: 0 0.3rem 0 rgb(29 30 28 / 26%);

    display: flex;

    top: calc(100% + 0.5rem);
    left: 0%;
`
