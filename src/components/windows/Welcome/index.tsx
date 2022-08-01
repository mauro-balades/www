import React from "react";
import Window from "../../Window";
import { Wrapper } from "./styles";
import Button from "../../Button";

import { set, get } from "../../../configuration";

function CookiesDialog(props: any) {
    return (
        <>
            <div style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '20px' }}>Welcome to my portfolio</h2>
                <p style={{ paddingTop: '5px', opacity: '.8' }}>Here, you can checkout information about me, see some of my projects and play pong!</p>
            </div>
            <Wrapper>
                <div style={{ padding: "0 20px 0 0" }}>
                    TODO
                </div>
                <div>
                    <Button
                        onClick={() => {
                            props.setClosed(true);
                            set("cookies", "1");
                        }}
                    >
                        Accept
                    </Button>
                    <Button
                        onClick={() => {
                            props.setClosed(true);
                            set("cookies", "1");
                        }}
                        style={{ marginTop: '5px' }}
                    >
                        Source Code
                    </Button>
                </div>
            </Wrapper>
        </>
    );
}

function Cookies(props: any) {

    return (
        <Window
            closable={false}
            y="53"
            x="55"
            title="welcome"
            width="30"
            height="25"
            {...props}
        >
            <CookiesDialog />
        </Window>
    );
}

export default Cookies;
