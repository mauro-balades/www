import React from "react";
import Button from "../../Button";
import Window from "../../Window";
import { Separator, Wrapper } from "./styles";

function Settings(props: any) {
    const { themeSetClosed } = props;

    return (
        <Window
            y="25"
            x="20"
            title="Settings"
            width="16"
            height="20"
            closable={true}
            {...props}
        >
            <Wrapper>
                <div>
                    <Separator />
                    <Button onClick={() => themeSetClosed(false)}>
                        Open theme config
                    </Button>
                </div>
            </Wrapper>
        </Window>
    );
}

export default Settings;
