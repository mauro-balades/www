

import React from "react";
import Draggable from "react-draggable";
import { DesktopIconWrapper } from "./styles";

function DesktopIcon(props: any) {
    const { y, x, title, img, handle } = props;

    return (
        <Draggable handle="strong">
            <DesktopIconWrapper onClick={ () => handle() } className="pointer" style={{ top: `${y}%`, left: `${x}%` }}>
                <div>
                    <img src={img} />
                </div>
                <div>
                    {title}
                </div>
            </DesktopIconWrapper>
        </Draggable>
    );
}

export default DesktopIcon;
