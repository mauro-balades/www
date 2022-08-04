import React, { useEffect, useRef, useState } from "react";
import {
    Wrapper,
    WindowTitle,
    CloseWindowButton,
    DraggableHandle,
    TitleBars,
    TitleBar,
    WindowTitleText,
    WindowContent,
    InfoWindowButton,
} from "./styles";
import Draggable from "react-draggable";
import { openWindowSound } from "../../sounds";
import { WINDOW_CLASS, focusWindow } from "../../utils";

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
    const ref = useRef(null);
    const { closed, setClosed, draggable, closable, title, info } = props;

    const classNames = `${props.extraClassNames} ${WINDOW_CLASS}`;

    useEffect(() => {
        openWindowSound(!closed);

        if (!closed) {
            // @ts-ignore
            focusWindow(ref.current)
        }
    }, [closed]);

    return (
        <Draggable handle="strong">
            <Wrapper ref={ref} className={classNames} style={{ zIndex: '0', display: !closed ? "block" : "none" }} {...props}>
                <WindowTitle draggable={draggable} closable={closable}>
                    {closable && (
                        <CloseWindowButton
                            onClick={() => setClosed(true)}
                            className="pointer"
                        >
                            <p>+</p>
                        </CloseWindowButton>
                    )}
                    <DraggableHandle>
                        <TitleBars>
                            <TitleBar></TitleBar>
                            <TitleBar></TitleBar>
                            <TitleBar></TitleBar>
                        </TitleBars>
                        <WindowTitleText>{title}</WindowTitleText>
                    </DraggableHandle>
                    {info && (
                        <InfoWindowButton
                            className="pointer"
                            onClick={() => info(false)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </InfoWindowButton>
                    )}
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
