import React from 'react';
import { Wrapper, WindowTitle, CloseWindowButton, DraggableHandle, TitleBars, TitleBar, WindowTitleText } from './styles';
import Draggable from 'react-draggable';


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
    const { width, height, draggable, x, y, closable, title } = props;

    return (
        <Draggable handle="strong">
            <Wrapper {...props} >
                <WindowTitle draggable={draggable} closable={closable} >
                    <CloseWindowButton className="pointer">
                        <img src="/static/images/close.png" />
                    </CloseWindowButton>
                    <DraggableHandle>
                        <TitleBars>
                            <TitleBar></TitleBar>
                            <TitleBar></TitleBar>
                        </TitleBars>
                        <WindowTitleText>
                            {title}
                        </WindowTitleText>
                    </DraggableHandle>
                </WindowTitle>
                <div>
                    {props.children}
                </div>
            </Wrapper>
        </Draggable>
    );
}

export default Window;
