import React from 'react';
import { Wrapper } from './styles';


/**
 * @param background
 * @param border
 * @param width
 * @param height
 * @param closable
 * @param draggable
 * @param x
 * @param y
 *
 * @returns React component
*/
function Window(props: any) {
    const { width, height, draggable, x, y, closable } = props;

    return (
        <Wrapper {...props} >
            {props.children}
        </Wrapper>
    );
}

export default Window;
