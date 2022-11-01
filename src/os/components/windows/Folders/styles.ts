import styled from "styled-components";

export const FilesWrapper = styled.div`
    padding: 20px;
    display: flex;
`;

export const LineBreak = styled.div`
    width: 100%;
`;

export const Item = styled.div`
    width: 5rem;
    height: 5rem;

    margin: 0 20px;
    text-align: center;

    & img {
        width: 5rem;
        height: 5rem;
    }

    &:hover img {
        transform: scale(1.1);
    }

    & p {
        margin: 10px;
        font-size: 0.8rem;
        font-weight: bold;
        text-align: center;
    }
`;

export const UserBar = styled.div`
    width: 100%;
    height: 30px;
    border-top: 2px solid ${(props: any) => (props.theme.light ? "#000" : "#fff")};

    background: ${(props: any) => props.theme.titleBarBackground};

    display: flex;

    position: absolute;
    bottom: 0;
    left: 0;
`

export const UserBarButton = styled.div`
    min-width: 30px;
    max-width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 2px solid ${(props: any) => (props.theme.light ? "#000" : "#fff")};

    & svg {
        width: 18px;
        height: 18px;
    }
`

export const UserBarLocation = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
`
