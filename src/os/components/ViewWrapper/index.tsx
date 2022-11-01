import React from "react";
import { Wrapper, NavigationBarWrapper, IntroductionWrapper } from "./styles";

function ViewWrapper(props: any) {
    return <Wrapper>{props.children}</Wrapper>;
}

function _NavigationBar(props: any) {
    return <NavigationBarWrapper>{props.children}</NavigationBarWrapper>;
}

function _Introduction(props: any) {
    return <IntroductionWrapper>{props.children}</IntroductionWrapper>;
}

export default ViewWrapper;
export const NavigationBar = _NavigationBar;
export const Introduction = _Introduction;
