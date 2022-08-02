import React, { useEffect } from "react";
import Window from "../../../Window";
import { Wrapper } from "./styles";

function PongInfo(props: any) {
    return (
        <Window
            y="25"
            x="45"
            title="Pong"
            width="25"
            height="10"
            closable={true}
            {...props}
        >
            <Wrapper>
                One thing I love are video games. to show my passion for them, I made pong! move the arrow keys to move your bar. Contact me if you win!
            </Wrapper>
        </Window>
    );
}

export default PongInfo;
