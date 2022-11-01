
import React, { useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import { ProjectsWrapper, CloseButton, TopNavigation, TopNavigationTitle, ScrollableArea, FirstSection, LeftNav, ScrollSection, ProjectView, Description, ImageView, DescriptionsWrapper } from "./styles";

function Projects(props: any) {
    const { setClosed, isClosed } = props;

    const firstSectionRef = useRef(null);
    const scrollSectionRef = useRef(null);
    const upperTextRef = useRef(null);

    const [firstSectionPosition, setFirstSectionPosition] = useState(0);

    useEffect(() => {
        setFirstSectionPosition(0);
    }, [isClosed])

    const onScroll = (e: any) => {
        let section = firstSectionRef.current as any as HTMLElement;
        let scrl_sct = scrollSectionRef.current as any as HTMLElement;
        let upp_txt = upperTextRef.current as any as HTMLElement;

        if (e.deltaY > 0) {
            if ((firstSectionPosition) >= (window.innerWidth - 40)) {
                setFirstSectionPosition((window.innerWidth));
            } else {
                setFirstSectionPosition(firstSectionPosition + 100);
            }
        } else {
            if (firstSectionPosition <= 0) {
                setFirstSectionPosition(0);
            } else {
                setFirstSectionPosition(firstSectionPosition - 100);
            }
        }

        let relative_scroll = (window.innerWidth - firstSectionPosition) + 150;

        // TODO: fix this
        if (relative_scroll >= 1900) {
            upp_txt.innerHTML = "// Selected Work";
        } else if (relative_scroll >= 1850) {
            upp_txt.innerHTML = "// Selected Wo";
        } else if (relative_scroll >= 1750) {
            upp_txt.innerHTML = "// Selected W";
        } else if (relative_scroll >= 1650) {
            upp_txt.innerHTML = "// Selected";
        } else if (relative_scroll >= 1550) {
            upp_txt.innerHTML = "// Selecte";
        } else if (relative_scroll >= 1450) {
            upp_txt.innerHTML = "// Selec";
        } else if (relative_scroll >= 1450) {
            upp_txt.innerHTML = "// Sele";
        } else if (relative_scroll >= 1350) {
            upp_txt.innerHTML = "// Sel";
        } else if (relative_scroll >= 1250) {
            upp_txt.innerHTML = "// Sel";
        } else if (relative_scroll >= 1200) {
            upp_txt.innerHTML = "// Se";
        } else if (relative_scroll >= 1150) {
            upp_txt.innerHTML = "// S";
        } else if (relative_scroll >= 1100) {
            upp_txt.innerHTML = "// ";
        } else if (relative_scroll >= 950) {
            upp_txt.innerHTML = "// M";
        } else if (relative_scroll >= 900) {
            upp_txt.innerHTML = "// Ma";
        } else if (relative_scroll >= 850) {
            upp_txt.innerHTML = "// Mau";
        } else if (relative_scroll >= 800) {
            upp_txt.innerHTML = "// Maur";
        } else if (relative_scroll >= 750) {
            upp_txt.innerHTML = "// Mauro B";
        } else if (relative_scroll >= 700) {
            upp_txt.innerHTML = "// Mauro Ba";
        } else if (relative_scroll >= 650) {
            upp_txt.innerHTML = "// Mauro Bal";
        } else if (relative_scroll >= 600) {
            upp_txt.innerHTML = "// Mauro Bala";
        } else if (relative_scroll >= 550) {
            upp_txt.innerHTML = "// Mauro Baladé";
        } else if (relative_scroll >= 500) {
            upp_txt.innerHTML = "// Mauro Baladés";
        }

        console.log(window.innerWidth - firstSectionPosition)

        scrl_sct.style.transform = `translateX(-${firstSectionPosition}px)`;
        section.style.transform = `translateX(-${firstSectionPosition}px)`;
    }

    return (
        <ProjectsWrapper>
            <TopNavigation>
                <TopNavigationTitle ref={upperTextRef}>
                    // Selected Work
                </TopNavigationTitle>
                <CloseButton onClick={() => setClosed(true)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </CloseButton>
            </TopNavigation>
            <ScrollableArea onWheel={onScroll}>
                <FirstSection ref={firstSectionRef}>
                    <Home />
                </FirstSection>
                <ScrollSection ref={scrollSectionRef}>
                    <LeftNav><span>// Selected Work (TODO: add significant text)</span></LeftNav>
                    <ProjectView>
                        <DescriptionsWrapper>
                            <Description>
                                *FIRST PROJECT*
                                note: this section will now scroll downwards and the image would change.
                            </Description>
                        </DescriptionsWrapper>
                        <ImageView>*IMAGE SECTION* note: if user scrolls, this does not follow it, fixed possition.</ImageView>
                    </ProjectView>
                </ScrollSection>
            </ScrollableArea>
        </ProjectsWrapper>
    )
}

export default Projects;
