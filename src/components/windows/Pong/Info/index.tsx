import React, { useEffect } from "react";
import Window from "../../../Window";
import { Wrapper } from "./styles";


function PongInfo(props: any) {

    return (
        <Window
            y="30"
            x="60"
            title="Pong"
            width="25"
            height="10"
            closable={true}
            {...props}
        >
            <Wrapper>
                This is pong! move the arrow keys to move your bar. If you win, you get the secret wallpaper! You win by geting 5 points.
            </Wrapper>
        </Window>
    );
}

export default PongInfo;
