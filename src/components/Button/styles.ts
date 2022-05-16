import styled from "styled-components";

export default styled.div`
    background: ${(props: any) => props.theme.titleBarBackground};

    border: 2px solid
        ${(props: any) => (props.theme.light ? "#1d1e1c" : "#fff")};

    line-height: 100%;
    font-size: 14px;
    letter-spacing: 1.5px;
    padding: 0.75em 1em;

    user-select: none;
    border-radius: 2px;

    &:active {
        box-shadow: inset 0 1px 0 0
                ${(props: any) => props.theme.titleBarBackground},
            inset -3px -3px 0 0 rgb(0 0 0 / 10%);
    }
`;
