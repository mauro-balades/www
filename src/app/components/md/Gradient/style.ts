
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    overflow: hidden;

    user-select: none;
    cursor: default;

    ${(props: any) => props.colors.map((el: string, i: number) => `
        --gradient-color-${i}: ${el};
    `)}

    & canvas {
        width: 100%;
        height: 100%;
    }
`
