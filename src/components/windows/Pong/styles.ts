import styled from "styled-components";
import Button from "../../Button";

export const PongHolder = styled.div`
    width: 100%;
    height: 100%;

    ${(props: any) => `
        ${
            props.theme.light
                ? ""
                : `
            & #js-game {
                display: none;
            }

            & #js-game-dark {
                display: block !important;
            }
        `
        }
    `}
`;

export const PongButton = styled(Button)`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    display: none;

    &.c-pong__button--visible {
        display: block;
    }
`;
