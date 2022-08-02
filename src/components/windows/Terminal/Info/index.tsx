import React, { useEffect } from "react";
import Window from "../../../Window";
import { Wrapper } from "./styles";

function TerminalInfo(props: any) {
    return (
        <Window
            y="25"
            x="45"
            title="Terminal <3"
            width="25"
            height="10"
            closable={true}
            {...props}
        >
            <Wrapper>
                I'm a Linux enthusiast, I created this terminal for people to experience my world.
            </Wrapper>
        </Window>
    );
}

export default TerminalInfo;
