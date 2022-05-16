import React from "react";
import Window from "../../Window";
import { PongHolder } from "./styles";

function Pong(props: any) {
    // @ts-ignore
    if (!props.closed && typeof window.pongActive == "undefined") {
        let tag = document.createElement("script");
        tag.async = false;
        tag.src = "/static/scripts/pong.js";
        document.getElementsByTagName("head")[0]?.appendChild(tag);
    }

    return (
        <Window
            y="30"
            x="70"
            title="Pong"
            width="25"
            height="39.1"
            closable={true}
            {...props}
        >
            <PongHolder
                className="c-pong__holder js-game-holder"
            ></PongHolder>
        </Window>
    );
}

export default Pong;
