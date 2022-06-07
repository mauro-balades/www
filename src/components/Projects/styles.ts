
import styled, { keyframes } from "styled-components";
import { zoomIn } from 'react-animations'

const zoomInAnimation = keyframes`${zoomIn}`;

export const ProjectsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    top: 0;
    left: 0;

    z-index: 999;
    background: #fff;

    color: #000;
    animation: .2s ${zoomInAnimation};
`

export const CloseButton = styled.div`
    position: absolute;
    right: 1%;
    top: 2%;

    cursor: pointer;
    width: 2rem;
    height: 2rem;

    & svg {
        width: 100%;
        height: 100%;
    }
`
