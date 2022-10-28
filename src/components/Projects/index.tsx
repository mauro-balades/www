
import React, { useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import { ProjectsWrapper, CloseButton, TopNavigation, TopNavigationTitle, ScrollableArea, FirstSection, LeftNav, ScrollSection, ProjectView, Description, ImageView, DescriptionsWrapper } from "./styles";

function Projects(props: any) {
    const { setClosed, isClosed } = props;

    const firstSectionRef = useRef(null);
    const scrollSectionRef = useRef(null);

    const [firstSectionPosition, setFirstSectionPosition] = useState(0);

    useEffect(() => {
        setFirstSectionPosition(0);
    }, [isClosed])

    const onScroll = (e: any) => {
        let section = firstSectionRef.current as any as HTMLElement;
        let scrl_sct = scrollSectionRef.current as any as HTMLElement;
        console.log(window.innerWidth)
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

        scrl_sct.style.transform = `translateX(-${firstSectionPosition}px)`;
        section.style.transform = `translateX(-${firstSectionPosition}px)`;
    }

    return (
        <ProjectsWrapper>
            <TopNavigation>
                <TopNavigationTitle>
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
