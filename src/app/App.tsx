import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { useLocation } from "react-router-dom";
import Blog from "./components/Blog";
import { AnimatePresence } from "framer-motion"
import Projects from "./components/Projects";
import { defaultSettings, get, set, settingsExists } from "../configuration";
import { ThemeProvider } from "styled-components";
import { dark_theme, getColors, light_theme, setColors } from "./theme";

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

        setColors(new_theme)
        document.body.style.background = new_theme.HOME_BACKGROUND;

        _setTheme(mode);
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<ThemeWrapper _theme={{theme, setTheme}}><Home /></ThemeWrapper>} />
                <Route path="/blog" element={<ThemeWrapper _theme={{theme, setTheme}}><Blog /></ThemeWrapper>} />
                <Route path="/projects" element={<ThemeWrapper _theme={{theme, setTheme}}><Projects /></ThemeWrapper>} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
