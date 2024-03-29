
import { MotionConfig } from "framer-motion";
import React from "react";
import { useTheme } from "styled-components";
import { LightThemeNoise } from "../CommonStyles";
import NavigationBar from "../NavigationBar";
import HeaderText from "./components/HeaderText";
import { PageWrapper } from "./style";

export default function() {
    let theme = useTheme();
    
    return (
        <PageWrapper>
            {theme.theme === "light" && (
                <LightThemeNoise></LightThemeNoise>
            )}
            <NavigationBar></NavigationBar>
            <HeaderText></HeaderText>
        </PageWrapper>
    )
}
