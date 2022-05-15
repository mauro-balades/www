
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
    background: url("/static/svg/envelope_closed.svg");

    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;

    width: 8rem;
    height: 8rem;
    margin-bottom: 10px;

    &:hover {
        background: url("/static/svg/envelope_open.svg");
    }
`
