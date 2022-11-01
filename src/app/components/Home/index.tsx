
import React from "react";
import NavigationBar from "../NavigationBar";
import HeaderText from "./components/HeaderText";
import { PageWrapper } from "./style";

export default function() {
    return (
        <PageWrapper>
            <NavigationBar></NavigationBar>
            <HeaderText></HeaderText>
        </PageWrapper>
    )
}
