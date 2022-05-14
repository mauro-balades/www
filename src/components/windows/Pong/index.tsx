import React from "react";
import Window from "../../Window";

function Pong(props: any) {
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
            <div style={{ width: '100%', height: '100%' }} className="c-pong__holder js-game-holder">

            </div>
        </Window>
    );
}

export default Pong;
