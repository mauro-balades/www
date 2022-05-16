import React from "react";
import Button from "../../Button";
import Window from "../../Window";
import { Wrapper } from "./styles";

function ThemeConfig(props: any) {
    return (
        <Window
            y="25"
            x="20"
            title="Theme"
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

export default ThemeConfig;
