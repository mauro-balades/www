
import styled from 'styled-components';

export const Wrapper = styled.div`

    ${(props: any) => `
        background: ${props.background || '#E8E7E2'};
        border: 2px solid ${props.border || '#1d1e1c'};

        width: ${props.width ? `${props.width}rem` : 'inherit'};
        height: ${props.height}rem;

        position: absolute;

        top: ${props.x || 50}px;
        left: ${props.y || 100}px;
    `}

    box-shadow: -0.6rem 0.6rem 0 rgb(29 30 28 / 26%);
`
