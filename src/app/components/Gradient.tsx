"use client";
import { useEffect } from "react";
import { Gradient as GradientWrapper } from '../vendor/stripe';


import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    overflow: hidden;

    ${(props: any) => props.colors.map((el: string, i: number) => `
        --gradient-color-${i}: ${el};
    `)}

    & canvas {
        width: 100%;
        height: 100%;
    }

    & * {
        user-select: none;
        cursor: default;
    }
`

export default function Gradient({ id, canvasClassName="", colors = ["#ef008f", "#6ec3f4", "#7038ff", "#ffba27"], toggle_darken_top = false, ...props }: any) {
    useEffect(() => {
        const gradient = new GradientWrapper()

        // @ts-ignore
        gradient.initGradient(`#${id}`);
    }, []);

    return (
        <Wrapper {...props} colors={colors}>
            <canvas className={canvasClassName} id={id} data-js-darken-top={toggle_darken_top} data-transition-in></canvas>
        </Wrapper>
    )
}