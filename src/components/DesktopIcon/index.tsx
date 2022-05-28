

import React from "react";
import Draggable from "react-draggable";

function DesktopIcon(props: any) {
    const { y, x } = props;

    return (
        <Draggable handle="strong">
            <strong style={{ position: 'absolute', top: `${y}%`, left: `${x}%` }}>

            </strong>
        </Draggable>
    );
}

export default DesktopIcon;
