import styled from "styled-components";

export const IntroductionDialog = styled.div`
    background: ${(props: any) => props.theme.windowBackground};
    border: 2px solid #1d1e1c;

    width: 40rem;
    height: 35rem;

    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    box-shadow: -0.6rem 0.6rem 0 rgb(29 30 28 / 26%);
    z-index: 9;

    padding: 20px;
    display: flex;
`;

export const DialogSidePanel = styled.div`
    width: 30%;
    height: 100%;

    border: 2px solid ${(props: any) => (props.theme.light ? "#000" : "#fff")};
    background: ${(props: any) => (props.theme.light ? "#ddd" : "#222222")};
    border-radius: 1px;

`

export const ContentWrapper = styled.div`
    padding-left: 30px;
    width: 70%;
    position: relative;
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 25px;
`

export const Controlers = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    padding-left: 30px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
