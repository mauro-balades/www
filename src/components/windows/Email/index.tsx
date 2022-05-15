import React from "react";
import Window from "../../Window";
import { Wrapper } from "./styles";

function Games(props: any) {

    const { pong_setClosed } = props;

    return (
        <Window
            y="50"
            x="50"
            title="Contact me"
            width="25"
            height="30"
            closable={true}

            {...props}
        >
            <Wrapper>

            </Wrapper>
        </Window>
    );
}

export default Games;
