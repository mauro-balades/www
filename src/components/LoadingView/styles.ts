import styled from "styled-components";
import WRAPPER_TEMPLATE from "../ViewWrapper/styles";

export const LoadingWrapper = styled.div`
    width: 100%;
    height: 100vh;

    overflow: hidden;
    background: ${(props: any) => props.theme.viewBackground};

    position: relative;

    ${WRAPPER_TEMPLATE}
`;

export const LoadingDialog = styled.div`
    background: ${(props: any) => props.theme.windowBackground};
    border: 2px solid #1d1e1c;

    width: 25rem;
    height: 20rem;

    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    box-shadow: -0.6rem 0.6rem 0 rgb(29 30 28 / 26%);
    z-index: 9;

    padding: 20px;
`;

export const BootWrapper = styled.div`
    width: 100%;
    height: 70%;

    border: 2px solid ${(props: any) => (props.theme.light ? "#000" : "#fff")};
    background: ${(props: any) => (props.theme.light ? "#ddd" : "#222222")};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;
`;

export const LoadingBar = styled.div`
    width: 90%;
    height: 10px;

    border: 2px solid ${(props: any) => (props.theme.light ? "#000" : "#fff")};
`;

export const Progress = styled.div`
    background: ${(props: any) => props.theme.viewBackground};
    height: 100%;

    ${(props: any) => `
        width: ${props.progress}%;
    `}
`;

export const LoadingText = styled.div`
    text-transform: uppercase;
    margin: 0 auto;

    margin: 1.5em 0 0.5em;
    color: ${(props: any) => (props.theme.light ? "#000" : "#fff")};

    letter-spacing: 2px;
    padding: 0.5em 0;

    font-size: 0.85em;

    font-weight: 600;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 60%;
`;

export const Copyright = styled.div`
    display: flex;
    width: 100%;
    height: 40%;

    justify-content: center;
    align-items: center;

    opacity: .8;
`
