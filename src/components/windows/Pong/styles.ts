
import styled from 'styled-components';

export const PongHolder = styled.div`
    width: 100%;
    height: 100%;

    ${(props: any) => `
        ${props.theme.light ? "" : `
            & #js-game {
                display: none;
            }

            & #js-game-dark {
                display: block !important;
            }
        `}
    `}
`
