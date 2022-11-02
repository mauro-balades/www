
import React from "react";
import NavigationBar from "../NavigationBar";
import { PageWrapper } from "./style";
import Core from "./components/Core";

export default function() {
    return (
        <PageWrapper>
            <NavigationBar animate></NavigationBar>
            <Core></Core>
        </PageWrapper>
    )
}
