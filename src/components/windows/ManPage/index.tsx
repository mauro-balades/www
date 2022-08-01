import React, { useEffect, useState } from "react";
import Window from "../../Window";
import { ManPageWrapper } from "./styles";

function ManPage(props: any) {

    return (
        <>
            <Window
                y="30"
                x="70"
                title="Mauro(7)"
                width="35"
                height="30"
                closable={true}
                {...props}
            >
                <ManPageWrapper className="scrollbar">
                    <h2>NAME</h2>
                    <pre>    mbg - Mauro Balades</pre>
                    <br/>
                    <h2>SYNOPSIS</h2>
                    <pre>    mbg [OPTIONS]</pre>
                    <br/>
                    <h2>DESCRIPTION</h2>
                    <pre>    I ❤️ open source. Mainly into software but <br />    likes to deal with hardware. I use a variaety <br />    of different programming languages and I love <br />    making ideas come to reality.</pre>
                    <br/>
                    <h2>OPTIONS</h2>
                    <pre>    --contact</pre>
                    <pre>        Sends magic bytes for communication</pre>
                    <pre>    --social</pre>
                    <pre>        Checkout my social media accounts</pre>
                    <br/>
                    <h2>SUPPORTED EXTENSIONS</h2>
                    <pre>    *.py, *.c, *.go, *.rs<br />    *.cc, *.ts, *.java, <a href="https://github.com/snowball/snowball-lang" style={{ color: 'rgb(7 89 133)' }} target="_blank">*.sn</a></pre>
                </ManPageWrapper>
            </Window>
        </>
    );
}

export default ManPage;
