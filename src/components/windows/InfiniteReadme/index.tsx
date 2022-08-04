import React, { useEffect, useState } from "react";
import Window from "../../Window";
import { ReadmeWrapper } from "./styles";

function ManPage(props: any) {

    return (
        <>
            <Window
                y="30"
                x="70"
                title="README.txt"
                width="35"
                height="22"
                closable={true}
                {...props}
            >
                <ReadmeWrapper className="scrollbar">
<pre>
&nbsp;&nbsp;  ___ __  __ ___  ___  ___ _____ _   _  _ _____ <br/>
&nbsp;&nbsp; |_ _|  \/  | _ \/ _ \| _ \_   _/_\ | \| |_   _|<br/>
&nbsp;&nbsp;  | || |\/| |  _/ (_) |   / | |/ _ \| .` | | |  <br/>
&nbsp;&nbsp; |___|_|  |_|_|  \___/|_|_\ |_/_/ \_\_|\_| |_|  <br/>
</pre>
<br/><br/>
                    IF YOU'RE READING THIS, YOU'VE BEEN IN A COMA FOR ALMOST 20 YEARS NOW.<br />
                    WE'RE TRYING A NEW TECHNIQUE.<br /><br />
                    WE DON'T KNOW WHERE THIS MESSAGE WILL END UP IN YOUR DREAM,<br /><br />
                    BUT WE HOPE WE'RE GETTING THROUGH.
                </ReadmeWrapper>
            </Window>
        </>
    );
}

export default ManPage;
