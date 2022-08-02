import styled from "styled-components";

export const Wrapper = styled.div`
    ${(props: any) => `
        background: ${props.theme.windowBackground};
        border: 2px solid ${props.theme.light ? "#1d1e1c" : "#fff"};

        width: ${props.width ? `${props.width}rem` : "inherit"};
        height: ${props.height}rem;

        position: absolute;

        top: ${(props.y || 50) - props.height / 2}%;
        left: ${(props.x || 50) - props.width / 2}%;

        // TODO: responsive
    `}

    box-shadow: -0.6rem 0.6rem 0 rgb(29 30 28 / 26%);
    z-index: 9;
    color: ${(props: any) => (props.theme.light ? "#000" : "#fff")};
`;

export const WindowTitle = styled.div`
    font-weight: normal;
    letter-spacing: 1px;

    text-align: center;
    background-color: ${(props: any) => props.theme.titleBarBackground};

    border-bottom: 2px solid
        ${(props: any) => (props.theme.light ? "#1d1e1c" : "#fff")};
    z-index: 1;

    display: flex;
    align-items: center;

    height: 1.7rem;
    user-select: none;
`;

export const CloseWindowButton = styled.div`
    width: 1.8rem;
    height: 1.7rem;

    border: 1px solid
        ${(props: any) => (props.theme.light ? "#1d1e1c" : "#fff")};
    border-right-width: 2px;
    border-left: none;

    background-color: ${(props: any) => props.theme.closeButtonBackground};
    cursor: pointer;

    ${(props: any) => (props.theme.light ? "" : "color: #ddd;")}

    font-size: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    & p {
        transform: rotate(135deg);
    }
`;

export const InfoWindowButton = styled.div`
    width: 1.8rem;
    height: 1.7rem;

    border-left: 2px solid
        ${(props: any) => (props.theme.light ? "#1d1e1c" : "#fff")};
    border-top: 1px solid
        ${(props: any) => (props.theme.light ? "#1d1e1c" : "#fff")};
    border-bottom: 1px solid
        ${(props: any) => (props.theme.light ? "#1d1e1c" : "#fff")};

    background-color: ${(props: any) => props.theme.closeButtonBackground};
    cursor: pointer;

    ${(props: any) => (props.theme.light ? "" : "color: #ddd;")}

    font-size: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        width: 70%;
    }
`;

export const DraggableHandle = styled.strong`
    width: 100%;
    height: 100%;

    display: flex;

    align-items: center;
    justify-content: center;

    position: relative;
`;

export const TitleBars = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    margin: 0 10px;
`;

export const TitleBar = styled.div`
    width: 100%;
    height: 2px;

    background: ${(props: any) => (props.theme.light ? "#1d1e1c" : "#fff")};

    margin-bottom: 3px;
    display: block;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const WindowTitleText = styled.span`
    background: ${(props: any) => props.theme.titleBarBackground};
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    padding: 0 5px;
    user-select: none;
`;

export const WindowContent = styled.div`
    position: relative;
    overflow: hidden;

    height: calc(100% - 1.7rem);
    width: 100%;
`;
