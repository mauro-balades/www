import { useEffect, useRef } from "react";
import { Wrapper } from "./style";
import { Gradient } from './vendor/stripe/anim/src/index';


export default function({ id, colors = ["#ef008f", "#6ec3f4", "#7038ff", "#ffba27"], toggle_darken_top = false, ...props }: any) {

    useEffect(() => {
        const gradient = new Gradient()

        // @ts-ignore
        gradient.initGradient(`#${id}`);
    }, []);

    return (
        <Wrapper {...props} colors={colors}>
            <canvas id={id} data-js-darken-top={toggle_darken_top} data-transition-in></canvas>
        </Wrapper>
    )
}
