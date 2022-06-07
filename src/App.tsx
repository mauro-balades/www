import React, { useEffect, useState } from "react";
import ViewWrapper, { NavigationBar } from "./components/ViewWrapper";

import Pong from "./components/windows/Pong";
import Cookies from "./components/windows/Cookies";
import Settings from "./components/windows/Settings";

import LoadingView from "./components/LoadingView";

import Email from "./components/windows/Email";
import Folders from "./components/windows/Folders";

import Theme from "./components/windows/Theme";
import ThemeProvider from "./theme/theming";
import {
    LogoImage,
    NavigationSection,
    NavigationSpacer,
    TimeSection,
} from "./components/NavigationBarComponents";

import DesktopIcon from "./components/DesktopIcon";
import ManPage from "./components/windows/ManPage";
import Projects from "./components/Projects";

import { initializeFiles } from "./fs";
import initializeSounds from "./sounds";

import { defaultSettings, get, settingsExists } from "./configuration";

import "normalize.css";

const HANDS_AVAILABLE = 2;

function App() {
    if (!settingsExists()) defaultSettings();

    const [hand, setHand] = useState(0);

    const setRandomHand = (): any => {
        let rand = Math.floor(Math.random() * (HANDS_AVAILABLE - 1 + 1) + 1);
        console.log(rand);

        if (rand == hand) return setRandomHand();

        setHand(rand);
    };

    useEffect(initializeSounds, []);
    useEffect(setRandomHand, []);

    const [isLoading, setLoading] = useState(true);
    const [theme, setTheme] = useState(get("theme"));

    const [cookies_closed, cookies_setClosed] = useState(false);
    const [settings_closed, settings_setClosed] = useState(true);
    const [pong_closed, pong_setClosed] = useState(true);
    const [email_closed, email_setClosed] = useState(true);
    const [theme_closed, theme_setClosed] = useState(true);
    const [folders_closed, folders_setClosed] = useState(true);
    const [man_closed, man_setClosed] = useState(true);
    const [projects_closed, projects_setClosed] = useState(true);

    initializeFiles({
        pong_setClosed,
        man_setClosed,
    });

    const [currentFolder, setCurrentFolder] = useState("/");

    let windows = [
        <Cookies closed={cookies_closed} setClosed={cookies_setClosed} />,
        <Email closed={email_closed} setClosed={email_setClosed} />,
        <Pong closed={pong_closed} setClosed={pong_setClosed} />,
        <Theme
            closed={theme_closed}
            setClosed={theme_setClosed}
            setTheme={setTheme}
            setRandomHand={setRandomHand}
            hand={hand}
        />,
        <Settings
            closed={settings_closed}
            setClosed={settings_setClosed}
            themeSetClosed={theme_setClosed}
        />,
        <Folders
            closed={folders_closed}
            setClosed={folders_setClosed}
            {...{ currentFolder, setCurrentFolder, pong_setClosed }}
        />,
        <ManPage
            closed={man_closed}
            setClosed={man_setClosed}
        />,
    ];

    return (
        <ThemeProvider theme={theme}>
            {!isLoading && (
                <>
                    <NavigationBar>
                        <NavigationSection style={{ padding: "0 25px" }}>
                            <LogoImage
                                onClick={setRandomHand}
                                src={`/static/images/hands/0${hand}.png`}
                                alt="Hand"
                            />
                        </NavigationSection>
                        <NavigationSection>
                            <svg
                                className="pointer"
                                onClick={() => settings_setClosed(false)}
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <svg
                                className="pointer"
                                onClick={() => email_setClosed(false)}
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <svg
                                className="pointer"
                                width="20"
                                height="20"
                                onClick={() => {
                                    setCurrentFolder("/")
                                    folders_setClosed(false);
                                }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                />
                            </svg>
                            <svg
                                className="pointer"
                                onClick={() => pong_setClosed(false)}
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </NavigationSection>
                        <NavigationSpacer></NavigationSpacer>
                        <NavigationSection className="both">
                            <TimeSection />
                        </NavigationSection>
                        <NavigationSection>
                            <svg
                                className="pointer"
                                style={{ marginRight: "10px" }}
                                onClick={() => window.location.reload()}
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                        </NavigationSection>
                    </NavigationBar>
                    <ViewWrapper>
                        <DesktopIcon handle={() => projects_setClosed(false)} img="/static/svg/folder.svg" title="Work" x={2.5} y={10} />
                        {windows}
                    </ViewWrapper>
                </>
            )}

            {isLoading && (
                <LoadingView
                    setRandomHand={setRandomHand}
                    hand={hand}
                    setLoading={setLoading}
                />
            )}

            {(!projects_closed) && (
                <Projects setClosed={projects_setClosed} />
            )}
        </ThemeProvider>
    );
}

export default App;
