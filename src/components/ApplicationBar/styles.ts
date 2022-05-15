
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0%;
    left: 50%;

    transform: translateX(-50%);

    background: url("/static/svg/applications.svg") bottom no-repeat;
    height: 100px;
    min-width: 50rem;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Envlope = styled.div`
    background: url("/static/images/envelope_closed.png");

    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;

    width: 6rem;
    height: 6rem;

    &:hover {
        background: url("/static/images/envelope_open.png");
    }
`
