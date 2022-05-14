
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

export const WindowTitle = styled.div`

    font-weight: normal;
    letter-spacing: 1px;

    text-align: center;
    background-color: #DADAD3;

    border-bottom: 2px solid #1d1e1c;
    z-index: 1;

    display: flex;
    align-items: center;

    height: 1.7rem;

    & img {
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated; /* Chrome */
        image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor;   /* IE8+         */

        width: 40%;
    }
`

export const CloseWindowButton = styled.div`
    width: 1.8rem;
    height: 1.7rem;

    border-right: 2px solid #1d1e1c;

    background-color: #C1C1BF;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const DraggableHandle = styled.strong`
    width: 100%;
    height: 100%;

    display: flex;

    align-items: center;
    justify-content: center;

    position: relative;
`

export const TitleBars = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    margin: 0 10px;
`

export const TitleBar = styled.div`
    width: 100%;
    height: 2px;

    background: #1d1e1c;

    margin-bottom: 3px;
    display: block;
`

export const WindowTitleText = styled.span`
    background: #DADAD3;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    padding: 0 5px;
`