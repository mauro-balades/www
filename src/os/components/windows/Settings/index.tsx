import React, { useEffect, useState } from "react";
import Button from "../../Button";
import Window from "../../Window";
import { SectionTitle, Separator, Wrapper } from "./styles";
import Switch from "../../Switch";
import { get, set } from "../../../configuration";
import { requestExitFullScreen, requestFullScreen } from "../../../utils";

function Settings(props: any) {
    const { themeSetClosed, setVintage } = props;

    // @ts-ignore
    const [fullscreen, setFullscreen] = useState(!window.fullScreen);
    const [vintage, setVintageValue] = useState(0);

    useEffect(() => {
        set("vintage", `${vintage}`)
        setVintage(`${vintage}`)
    }, [vintage])

    useEffect(() => {
        if (fullscreen) {
            requestFullScreen();
        } else {
            requestExitFullScreen();
        }
    }, [fullscreen])

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
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <div style={{ width: '100%' }}>
                            <SectionTitle>FullScreen</SectionTitle>
                            <Switch value={fullscreen} onChange={setFullscreen} />
                        </div>
                        <div style={{ width: '100%', marginLeft: '20px' }}>
                            <SectionTitle>Vintage</SectionTitle>
                            <Switch value={get("pong") != "1" ? 0 : vintage} onChange={get("pong") != "1" ? null : setVintageValue} title={get("pong") != "1" && "Unload this mode by winning in pong!"} style={get("pong") != "1" ? { opacity: '.7', cursor: '' } : {}} />
                        </div>
                    </div>
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

