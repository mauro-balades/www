
import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    position: relative;

    width: 70%;
    position: absolute;
    bottom: 0%;
    left: 50%;

    transform: translate(-50%, -50%);

    .rangeslider {
        margin: 20px 0;
        width: 100%;
        position: relative;
        -ms-touch-action: none;
        touch-action: none;

        border: 2px solid ${(props: any) => props.theme.colors.MAIN_BACKGROUND_INVERTED};
    }

    .rangeslider,
    .rangeslider .rangeslider__fill {
        display: block;
    }

    .rangeslider .rangeslider__handle {
        background: #fff;
        cursor: pointer;
        display: inline-block;
        position: absolute;
    }

    .rangeslider .rangeslider__handle .rangeslider__active {
        opacity: 1;
    }

    .rangeslider-horizontal {
        height: 8px;
        border-radius: 10px;
    }

    .rangeslider-horizontal .rangeslider__fill {
        height: 100%;
        background: ${(props: any) => props.theme.colors.MAIN_BACKGROUND_INVERTED};
        border-radius: 10px;
        top: 0;
    }

    .rangeslider-horizontal .rangeslider__handle {
        width: 20px;
        height: 20px;
        border-radius: 30px;

        top: 50%;
        transform: translate3d(-50%, -50%, 0);
    }


    .rangeslider-horizontal .rangeslider__handle-tooltip:after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid rgba(0, 0, 0, 0.8);
        left: 50%;
        bottom: -8px;
        transform: translate3d(-50%, 0, 0);
    }

    .rangeslider__labels .rangeslider__label-item {
        position: absolute;
        font-size: 14px;
        cursor: pointer;
        display: inline-block;
        top: 10px;
        transform: translate3d(-50%, 0, 0);
    }
`;

export const Text = styled.div`
    font-weight: 600;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    white-space: nowrap;
    user-select: none;

    margin-right: 20px;

    &:last-child {
        margin-right: 0;
        margin-left: 20px;
    }
`
