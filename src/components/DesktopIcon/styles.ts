
import styled from "styled-components";

export const DesktopIconWrapper = styled.strong`
    width: 5rem;
    position: absolute;

    display: flex;
    align-items: center;

    flex-direction: column;
    text-align: center;

    & img {
        width: 100%;
        height: 100%;
        margin-bottom: 5px;
    }

    & div {
        text-align: center;
        color: ${(props: any) => (props.theme.light ? "#000" : "#fff")};
    }
`
