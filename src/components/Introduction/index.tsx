import React, { useEffect, useState } from "react";
import Window from "../Window";
import { LogoImage } from "../NavigationBarComponents";
import { Introduction } from "../ViewWrapper";
import { DialogSidePanel, IntroductionDialog, ContentWrapper, Title, Controlers } from "./styles";

function page1() {
    return (
        <div>
            <Title>Welcome</Title>
            <p>This is my portfolio!<br/><br/> This dialog will only be showned <strong>only one time</strong>. If you click next, you will be showned how to use/navigate around the portfolio. If you would like to skip it, just press skip.<br/><br/> Hope you like it ❤️!</p>
        </div>
    )
}

function IntroductionView(props: any) {
    const [currentPage, setCurrentPage] = useState(0);
    const pages: any = [
        page1()
    ];

    return (
        <Introduction>
            <IntroductionDialog>
                <DialogSidePanel></DialogSidePanel>
                <ContentWrapper>
                    {pages[currentPage]}
                    <Controlers>buttons</Controlers>
                </ContentWrapper>
            </IntroductionDialog>
        </Introduction>
    );
}

export default IntroductionView;
