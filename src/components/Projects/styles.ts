
import styled, { keyframes } from "styled-components";
import { zoomIn } from 'react-animations'

const zoomInAnimation = keyframes`${zoomIn}`;

export const Arrow = styled.div`
    ${(props: any) => `
        position: absolute;
        top: 50%;
        ${props.direction}: 5%;

        ${props.removed ? 'transform: translate(-50%, -50%) scale(0) !important;' : ''}

        width: 80px;
        height: 40px;

        transform: translate(-50%, -50%);

        background: url(/static/svg/arrow-${props.direction}.svg) center no-repeat;
        background-size: cover;

        transition: .1s;
        cursor: pointer;

        &:hover {
            transform: translate(-50%, -50%) scale(1.2) rotate(${props.direction == "right" ? '5' : '-5'}deg);
        }
    `}
`

export const Dot = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 40%;

    background: #fff;
    margin: 0 5px;
    ${(props: any) => props.isActive ? `background: #000;` : 'border: 1px solid #000;'}
`

export const Dots = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;

    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
`

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
