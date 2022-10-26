
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
    background: #0b0b0b;

    color: #fff;
    animation: .2s ${zoomInAnimation};
`

export const ScrollableArea = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 60px;

    position: relative;
    display: flex;

    overflow-x: hidden;
`

export const FirstSection = styled.div`
    min-width: 100%;
    height: 100%;

    transition: .4s;
`

export const ScrollSection = styled.div`
    transition: .4s;
    display: flex;

    min-width: 100%;

    position: relative;
`

export const ProjectView = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    display: flex;
`

export const DescriptionsWrapper = styled.div`
    width: 100%;
`

export const ImageView = styled.div`
    width: 100%;
    height: 100%;
    border-left: 2px solid #fff;
`

export const Description = styled.div`
    width: 100%;
    height: 100%;
`

export const LeftNav = styled.div`
    height: 100%;
    width: 60px;

    border-right: 2px solid #fff;
    border-left: 2px solid #fff;

    position: relative;

    & span {

        position: absolute;

        bottom: 2%;
        left: 50%;

        white-space: pre;

        /* Border is the new background */
        background: none;
      
        /* Rotate from top left corner (not default) */
        transform-origin: 0 0;
        transform: rotate(-90deg) translateY(-50%);

        text-transform: uppercase;
        color: #fff;
    
        letter-spacing: 2px;
    
        font-size: 0.85em;
        font-weight: 600;
    }
`

export const TopNavigation = styled.div`
    width: 100%;
    position: fixed;

    background: #0b0b0b;

    top: 0;
    left: 0;

    z-index: 9;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px 25px;
    border-bottom: 2px solid #fff;
`

export const TopNavigationTitle = styled.div`
    text-transform: uppercase;
    color: #fff;

    letter-spacing: 2px;

    font-size: 0.85em;
    font-weight: 600;
`

export const CloseButton = styled.div`
    color: #fff;

    cursor: pointer;
    width: 1.7rem;
    height: 1.7rem;

    & svg {
        width: 100%;
        height: 100%;
    }
`
