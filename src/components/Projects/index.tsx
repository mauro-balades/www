
import React, { useState } from "react";
import { ProjectsWrapper, CloseButton, Dots, Dot, Arrow } from "./styles";
import Snowball from "./pages/snowball";
import Wonoly from "./pages/wonoly";

function Projects(props: any) {
    const { setClosed } = props;

    const pages = [<Snowball />, <Wonoly />];
    const [itemNumber, setItemNumber] = useState(0);

    return (
        <ProjectsWrapper>
            {pages[itemNumber]}
            <CloseButton onClick={() => setClosed(true)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </CloseButton>

            <Arrow removed={itemNumber == 0} onClick={() => setItemNumber(itemNumber - 1)} className="pointer" direction="left"></Arrow>
            <Arrow removed={itemNumber == (pages.length-1)} onClick={() => setItemNumber(itemNumber + 1)} className="pointer" direction="right"></Arrow>

            <Dots>
                {Array.from(Array(pages.length), (_, i) => {
                    return <Dot isActive={i == itemNumber}></Dot>
                })}
            </Dots>
        </ProjectsWrapper>
    )
}

export default Projects;
