import React from "react";
import Wrapper, { CenteredText, CenteredTextJustify } from "./styles";
import Core from 'react-input-switch';
import { useTheme } from 'styled-components';

export default function (props: any) {
    const theme = useTheme();

    return (
        <Wrapper>
            <CenteredText>
                <CenteredTextJustify>
                    <span>Hey,</span> <span>i'm</span> <span>Mauro</span> <span>baladés</span> <span>but</span> <span>you</span> <span>can</span> <span>call</span>
                </CenteredTextJustify>
                <CenteredTextJustify>
                    <span>me</span> <span>mauro.</span> <span>i'm</span> <span>a</span> <span>software</span> <span>developer</span> <span>and</span> <span>passionate</span>
                </CenteredTextJustify>
                <CenteredTextJustify>
                    <span>about</span> <span>technology.</span> <span>here,</span> <span>you</span> <span>can</span> <span>see</span> <span>my</span> <span>projects</span>
                </CenteredTextJustify>
            </CenteredText>
        </Wrapper>
    );
}
