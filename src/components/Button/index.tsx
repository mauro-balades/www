import React from "react";
import ButtonWrapper from "./styles";

function Button(props: any) {
    return (
        <ButtonWrapper {...props} className="pointer">
            {props.children}
        </ButtonWrapper>
    );
}

export default Button;
