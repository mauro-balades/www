import React from "react";
import Button from "../../Button";
import Window from "../../Window";
import { Wrapper, ThemePreview, WindowPreviewTitle } from "./styles";
import * as window from "../../Window/styles";

import { set } from "../../../configuration";

import { themeKeys } from "../../../theme/theming";

function ThemeConfig(props: any) {
    const { setTheme } = props;

    const onClick = (theme: string) => {
        set("theme", theme);
        setTheme(theme);
    };

    return (
        <Window
            y="25"
            x="40"
            title="Theme"
            width="20"
            height="26"
            closable={true}
            {...props}
        >
            <Wrapper>
                <ThemePreview>
                    <window.Wrapper style={{ display: "block", position: 'relative', width: '100%', height: '100px', padding: 'none' }}>
                        <window.WindowContent style={{ height: '100%' }}>
                            <WindowPreviewTitle>
                                preview
                            </WindowPreviewTitle>
                        </window.WindowContent>
                    </window.Wrapper>
                </ThemePreview>
                {themeKeys.map((value: string, key: number) => (
                    <Button
                        style={{ marginTop: "10px" }}
                        key={key}
                        onClick={() => onClick(value)}
                    >
                        {value}
                    </Button>
                ))}
            </Wrapper>
        </Window>
    );
}

export default ThemeConfig;
