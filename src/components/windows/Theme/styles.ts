import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;

    overflow: hidden;

    padding: 0 30px;

    & h4 {
        margin: 30px 0 5px 0;
    }
`;

export const ThemePreview = styled.div`
    padding: 30px;
    margin: 30px 0;
    position: relative;

    border: 2px solid ${(props: any) => (props.theme.light ? "#000" : "#fff")};
    background: ${(props: any) => props.theme.viewBackground};
`

export const WindowPreviewTitle = styled.div`
    font-size: 24px;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    user-select: none;
    font-weight: bold;
`
