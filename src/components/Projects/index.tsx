
import React from "react";
import { ProjectsWrapper, CloseButton } from "./styles";


function Projects(props: any) {
    const { setClosed } = props;

    return (
        <ProjectsWrapper>
            <CloseButton onClick={() => setClosed(true)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </CloseButton>
        </ProjectsWrapper>
    )
}

export default Projects;
