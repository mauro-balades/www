
import React from "react";
import NavigationBar from "../NavigationBar";
import HeaderText from "./components/HeaderText";
import { PageWrapper } from "./style";

import "../../css/animations/home.css";

export default function() {
    return (
        <PageWrapper>
            <NavigationBar></NavigationBar>
            <HeaderText></HeaderText>
        </PageWrapper>
    )
}
