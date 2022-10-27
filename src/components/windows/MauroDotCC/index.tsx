import React, { useEffect, useState } from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';

import a11y_light from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';
import a11y_dark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

import Window from "../../Window";
import { Wrapper } from "./styles";
import { useTheme } from 'styled-components';

const code =
`
#include <string>
#include <vector>

#ifndef __H_BEAUTIFUL_DEVELOPER__
#define __H_BEAUTIFUL_DEVELOPER__

class Mauro : public Developer {

    /* I am a software developer with a keen eye for design.
     * Passionate about UI and low-level stuff I strive for pixel
     * perfect responsive layouts alongside clean, maintainable
     * and reusable code. I have an obsessive devotion to CPP,
     * Rust and other low level languages (creating my own aswell)  */

    public:

        std::string portfolio;
        std::string name;
        std::string email;

        std::vector<std::string> languages;

        Mauro() /* constructor */ {
            this->portfolio = "maucode.com";
            this->name      = "Mauro Baladès";
            this->email     = "mauro.balades@tutanota.com";

            this->languages.push_back("CPP/C");
            this->languages.push_back("Rust");
            this->languages.push_back("Python");
            this->languages.push_back("Typescript");
        }

        std::vector<std::string> skills() const {
            auto all_my_skills = languages;

            all_my_skills.add({
                "Figma", "Frontend/Backend", "Web Technologies",
                "Git", "TODO (u think I have infinite time?)"
            });

            return all_my_skills;
        }

    private:
        /* 🔒 silly billy, only *I* can access this data */
}

#endif /* __H_BEAUTIFUL_DEVELOPER__ */
`

function MauroDotCC(props: any) {
    const theme = useTheme();

    return (
        <>
            <Window
                y="30"
                x="70"
                title="cv.cc"
                width="50"
                height="50"
                closable={true}
                // customStyle={{ background: 'rgb(240, 240, 240)' }}
                {...props}
            >
                <Wrapper className="scrollbar">
                    <SyntaxHighlighter style={theme.light ? a11y_light : a11y_dark} language="cpp" showLineNumbers={true}>
                        {code}
                    </SyntaxHighlighter>
                </Wrapper>
            </Window>
        </>
    );
}

export default MauroDotCC;
