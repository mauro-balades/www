import React from "react";
import { Wrapper, Envlope } from "./styles";

function ApplicationBar(props: any) {

    const { email_setClosed } = props;

    return (
        <Wrapper>

            <Envlope onClick={() => email_setClosed(false)} className="pointer"></Envlope>
        </Wrapper>
    )
}

export default ApplicationBar;
