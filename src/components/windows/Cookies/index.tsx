import React from "react";
import Window from "../../Window";
import { Wrapper } from "./styles";
import Button from "../../Button";

import { get, set } from "../../../configuration";

function CookiesDialog(props: any) {
    return (
        <Wrapper>
            <div style={{ padding: "0 20px 0 0" }}>
                By using this website, you agree to our{" "}
                <span
                    className="pointer"
                    style={{ textDecoration: "underline" }}
                >
                    Cookie policy
                </span>
            </div>
            <div>
                <Button onClick={() => props.setClosed(true)}>Accept</Button>
            </div>
        </Wrapper>
    );
}

function Cookies(props: any) {
    let cookies = get("cookies");
    if (get("cookies") != "1") set("cookies", "1");

    return cookies != "1" ? (
        <Window
            closable={false}
            y="83"
            x="15"
            title="cookies"
            width="25"
            height="10"
            {...props}
        >
            <CookiesDialog />
        </Window>
    ) : null;
}

export default Cookies;
