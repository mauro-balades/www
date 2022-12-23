import React from "react";
import Window from "../../Window";
import { Wrapper } from "./styles";
import Button from "../../Button";

import { set, get } from "../../../../configuration";

function WelcomeDialog(props: any) {
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
                        }}
                    >
                        Accept
                    </Button>
                    <Button
                        onClick={() => {
                            // TODO: open github
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

function Welcome(props: any) {

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
            <WelcomeDialog />
        </Window>
    );
}

export default Welcome;
