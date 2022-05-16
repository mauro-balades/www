import React from "react";
import { Wrapper, NavigationBarWrapper } from "./styles";

function ViewWrapper(props: any) {
    return <Wrapper>{props.children}</Wrapper>;
}

function _NavigationBar(props: any) {
    return <NavigationBarWrapper>{props.children}</NavigationBarWrapper>;
}

export default ViewWrapper;
export const NavigationBar = _NavigationBar;
