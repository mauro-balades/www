
import styled from "styled-components"

export const Wrapper = styled.div`
    // display: flex;
    position: relative;

    width: 70%;
`;

export const Text = styled.div`
    font-weight: 500;
    font-size: 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    line-height: 1.5;

    margin: 20px;
`

export const BigRedText = styled.div`
    font-weight: 500;
    font-size: 19px;

    line-height: 1.5;
    margin: 5px;
    margin-left: 20px;

    color: red;
    // transition: .1s;

    border-radius: 5px;
    padding: 0 5px;

    width: fit-content;
    cursor: pointer;

    &:hover {
        color: #000;
        background: red;
    }

    &.blink {
        animation: about-me-blink .7s steps(5, start) infinite;
        transition: 0s;
    }

    &.blink.fast {
        animation: about-me-blink .1s steps(5, start) infinite;
    }

    @keyframes about-me-blink {
        to {
            background: transparent;
            color: inherit;
        }
    }
`
