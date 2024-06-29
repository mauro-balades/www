import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Blog from "./components/Blog";
import { AnimatePresence } from "framer-motion";
import { defaultSettings, get, set, settingsExists } from "../configuration";
import { ThemeProvider } from "styled-components";
import { dark_theme, getColors, light_theme, setColors } from "./theme";
import OS from "../os/App";

const ThemeWrapper = ({ children, _theme }: any) => {
    const { theme, setTheme } = _theme;
    let colors = getColors();

    useEffect(() => {
        setTheme(get("app-theme") as string);
        colors = getColors();
        console.log(getColors())
    }, []);

    return (
        <ThemeProvider theme={{colors, theme, setTheme}}>
            {children}
        </ThemeProvider>
    )
}

function App() {
    if (!settingsExists()) defaultSettings();
    const location = useLocation();
    const [theme, _setTheme] = useState(get("app-theme"));

    const setTheme = (mode: string) => {
        set("app-theme", mode);

        let new_theme = {} as any;

        if (mode === "dark") {
            new_theme = dark_theme;
        } else {
            new_theme = light_theme;
        }

        setColors(new_theme);

        // TODO:
        // new (window as any).Cursora({
        //     dot: mode === "dark" ? '#fff' : "#000",
        //     bg: mode === "dark" ? 'rgba(255, 255, 255, .1)' : "rgba(0, 0, 0, .5)",
        //     hoverOffset: { x: 10, y: 10 },
        //     zIndex: 2
        // });

        _setTheme(mode);
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<ThemeWrapper _theme={{theme, setTheme}}><OS /></ThemeWrapper>} />
                <Route path="/blog" element={<ThemeWrapper _theme={{theme, setTheme}}><Blog /></ThemeWrapper>} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
