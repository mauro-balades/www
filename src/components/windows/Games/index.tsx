import React from "react";
import Window from "../../Window";
import { Wrapper, Game } from "./styles";

function Games(props: any) {
    const { pong_setClosed } = props;

    return (
        <Window
            y="25"
            x="20"
            title="Games"
            width="25"
            height="30"
            closable={true}
            {...props}
        >
            <Wrapper>
                <Game onClick={() => pong_setClosed(false)} className="pointer">
                    <img src="/static/images/pong_icon.png" alt="pong" />
                    <h1>pong tenis</h1>
                </Game>
            </Wrapper>
        </Window>
    );
}

export default Games;
