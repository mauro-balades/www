import React, { useEffect, useState } from "react";
import Window from "../Window";
import { LogoImage, NavigationSection, NavigationSpacer } from "../NavigationBarComponents";
import { Introduction, NavigationBar } from "../ViewWrapper";
import { DialogSidePanel, IntroductionDialog, ContentWrapper, Title, Controlers } from "./styles";
import Button from "../Button";

function page1() {
    return (
        <div>
            <Title>Welcome</Title>
            <p>This is my portfolio!<br/><br/> This dialog will only be showned <strong>only one time</strong>. If you click next, you will be showned how to use/navigate around the portfolio. If you would like to skip it, just press skip.<br/><br/> Hope you like it ❤️!</p>
        </div>
    )
}

function page2() {
    return (
        <div>
            <Title>How to navigate</Title>
            This is the navigation bar you will encounter:
            <br />
            <br />
            <NavigationBar style={{ borderRight: 'none', marginTop: '50px' }}>
                <NavigationSection style={{ padding: "0 25px" }}>
                    <LogoImage
                        src={`/static/images/hands/01.png`}
                        alt="Hand"
                    />
                </NavigationSection>
                <NavigationSection>
                    <svg
                        className="pointer"
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
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                    </svg>
                    <svg
                        className="pointer"
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
            </NavigationBar>
            <br />
            <br />
            <br />
            <br />
            What does each of this buttons do?
            <ol style={{ marginLeft: '10px' }}>
                <li style={{ marginTop: '5px' }}>1. Cog wheel</li>
                <li style={{ marginLeft: '10px', display: 'flex' }}>
                    The ⚙️ is used to open the settings panel. In here, you can change the colors, sound and many more options.
                </li>
                <li style={{ marginTop: '5px' }}>2. File explorer</li>
                <li style={{ marginLeft: '10px', display: 'flex' }}>
                    With the file explorer (as the name suggests), you can see all files available. You can click on those files and see what those programs do.
                </li>
                <li style={{ marginTop: '5px' }}>3. Send email</li>
                <li style={{ marginLeft: '10px', display: 'flex' }}>
                    This button will open a dialog in where you can send me an email.
                </li>
                <li style={{ marginTop: '5px' }}>4. Extra apps</li>
                <li style={{ marginLeft: '10px', display: 'flex' }}>
                    Are you bored? No problem! you can play pong, listen to music and many more!
                </li>
            </ol>
        </div>
    )
}

function IntroductionView(props: any) {
    const [currentPage, setCurrentPage] = useState(0);
    const pages: any = [
        page1(),
        page2(),
    ];

    return (
        <Introduction>
            <IntroductionDialog>
                <DialogSidePanel></DialogSidePanel>
                <ContentWrapper>
                    <div style={{ height: 'calc(100% - 45px)' }}>
                        {pages[currentPage]}
                    </div>
                    <Controlers>
                        {!(currentPage === pages.length - 1) && (
                            <Button onClick={() => window.location.reload()}>Skip</Button>
                        )}
                        <div></div>
                        <Button onClick={() => currentPage === pages.length - 1 ? window.location.reload() : setCurrentPage(currentPage+1)}>
                        {currentPage === pages.length - 1 ? (<>Finish</>) : (<>Next</>)}
                        </Button>
                    </Controlers>
                </ContentWrapper>
            </IntroductionDialog>
        </Introduction>
    );
}

export default IntroductionView;
