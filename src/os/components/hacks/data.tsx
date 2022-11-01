
import React, { useEffect, useRef, useState } from "react";
import { generateRandomBinary } from "../../utils";
import Window from "../Window";
import { Wrapper } from "./styles";

function DataHack(props: any) {
    const [data, setData] = useState("");
    const bottomRef = useRef(null);

    const [current_line, set_current_line] = useState(0);

    useEffect(() => {
        if (props.closed) {
            setData(generateRandomBinary(2000));
            set_current_line(0);
        } else {
            set_current_line(current_line + 1)
        }
    }, [props.closed])

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change

        if (current_line + 1 < data.length && !props.closed) {
            setTimeout(() => {
                // @ts-ignore
                bottomRef.current?.scrollIntoView(/*{behavior: 'smooth'}*/);
                set_current_line(current_line + 1)
            }, 0)

        }

    }, [current_line]);

    return (
        <Window
            y="50"
            x="55"
            title="Recieving data"
            width="25"
            height="30"
            closable={true}
            {...props}
        >
            <Wrapper className="scrollbar">
                <div style={{ display: 'inline-block', wordWrap: 'break-word', wordBreak: 'break-all', overflowWrap: 'anywhere', width: '100%', padding: '20px 0' }}>
                    {Array.from(Array(current_line), (e: Number, i: any) => {
                        let splitted = data.split('');
                        return <>{splitted[i]}</>;
                    })}
                </div>

                <div ref={bottomRef} />
            </Wrapper>
        </Window>
    );
}

export default DataHack;