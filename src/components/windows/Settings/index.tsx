import React from "react";
import Button from "../../Button";
import Window from "../../Window";
import { Wrapper } from "./styles";

function Settings(props: any) {
    const { themeSetClosed } = props;

    return (
        <Window
            y="25"
            x="20"
            title="Settings"
            width="15"
            height="20"
            closable={true}
            {...props}
        >
            <Wrapper>
                <div>
                    <h4>Theme</h4>
                    <Button onClick={() => themeSetClosed(false)}>
                        Open theme config
                    </Button>
                </div>
            </Wrapper>
        </Window>
    );
}

export default Settings;
