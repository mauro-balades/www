import React, { useState } from "react";
import {
    Wrapper,
    WindowTitle,
    CloseWindowButton,
    DraggableHandle,
    TitleBars,
    TitleBar,
    WindowTitleText,
    WindowContent,
} from "./styles";
import Draggable from "react-draggable";

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
    const { closed, setClosed } = props;

    return (
        <Draggable handle="strong">
            <Wrapper style={{ opacity: !closed ? '1' : '0' }} {...props}>
                <WindowTitle draggable={draggable} closable={closable}>
                    {closable ? (
                        <CloseWindowButton
                            onClick={() => setClosed(true)}
                            className="pointer"
                        >
                            <img src="/static/images/close.png" />
                        </CloseWindowButton>
                    ) : null}
                    <DraggableHandle>
                        <TitleBars>
                            <TitleBar></TitleBar>
                            <TitleBar></TitleBar>
                        </TitleBars>
                        <WindowTitleText>{title}</WindowTitleText>
                    </DraggableHandle>
                </WindowTitle>
                <WindowContent>
                    {React.Children.map(props.children, (element: any) => {
                        return React.cloneElement(element, {
                            setClosed: setClosed,
                        });
                    })}
                </WindowContent>
            </Wrapper>
        </Draggable>
    );
}

export default Window;
