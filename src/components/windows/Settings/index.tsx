import React from "react";
import Window from "../../Window";
import { Wrapper } from "./styles";

function Settings(props: any) {
    return (
        <Window
            y="15"
            x="10"
            title="Settings"
            width="15"
            height="20"
            closable={true}

            {...props}
        >
            <Wrapper>

            </Wrapper>
        </Window>
    );
}

export default Settings;
