
import React, { useEffect, useRef } from "react";
import { Wrapper } from "./styles";

function IconsDialog(props: any) {

    const { iconsDialog_closed, iconsDialog_setClosed, children } = props;

    // TODO: close

    return !iconsDialog_closed ? (
        <Wrapper>
            {children}
        </Wrapper>
    ) : null;
}

export default IconsDialog;
