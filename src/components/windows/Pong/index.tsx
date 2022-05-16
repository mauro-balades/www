import React, { useEffect, useState } from "react";
import Window from "../../Window";
import PongInfo from "./Info";
import { PongHolder, PongButton } from "./styles";

function Pong(props: any) {

    const [ info, setInfo ] = useState(true);

    // @ts-ignore
    if (!props.closed && typeof window.pongActive == "undefined") {
        let tag = document.createElement("script");
        tag.async = false;
        tag.id = "pong"
        tag.src = "/static/scripts/pong.js";
        document.getElementsByTagName("head")[0]?.appendChild(tag);
    }

    useEffect(() => {
        if (props.closed) setInfo(true);
    }, [props.closed])

    return (
        <>
            <PongInfo closed={info} setClosed={setInfo} />
            <Window
                y="30"
                x="70"
                title="Pong"
                width="25"
                height="39.5"
                closable={true}

                info={setInfo}

                {...props}
            >
                <PongHolder
                    className="c-pong__holder js-game-holder"
                ></PongHolder>
                <PongButton className="c-pong__button js-replay">Play again</PongButton>
            </Window>
        </>
    );
}

export default Pong;
