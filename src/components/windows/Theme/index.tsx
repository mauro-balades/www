import React from "react";
import Button from "../../Button";
import Window from "../../Window";
import { Wrapper, ThemePreview, WindowPreviewTitle } from "./styles";
import * as window from "../../Window/styles";

import { set } from "../../../configuration";

import { themeKeys } from "../../../theme/theming";
import { LogoImage } from "../../NavigationBarComponents";

function ThemeConfig(props: any) {
    const { setTheme, setRandomHand, hand } = props;

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
            height="29"
            closable={true}
            {...props}
        >
            <Wrapper>
                <ThemePreview>
                    <window.Wrapper
                        style={{
                            display: "block",
                            position: "relative",
                            width: "100%",
                            height: "100px",
                            padding: "none",
                        }}
                    >
                        <window.WindowContent style={{ height: "100%" }}>
                            <WindowPreviewTitle>
                                <LogoImage
                                    className="optimized"
                                    style={{ transform: "scale(1.5)" }}
                                    onClick={setRandomHand}
                                    src={`/static/images/hands/0${hand}.png`}
                                    alt="Hand"
                                />
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
