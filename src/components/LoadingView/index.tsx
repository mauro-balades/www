import React, { useEffect, useState } from "react";
import {
    LoadingWrapper,
    LoadingDialog,
    BootWrapper,
    LoadingBar,
    Progress,
    LoadingText,
    ImageWrapper,
} from "./styles";
import Window from "../Window";
import { LogoImage } from "../NavigationBarComponents";

const INITAL_VALUE = 40;
const BOOTING_TEXTS = [
    "Booting portfolio kernel...",
    "Preparing configuration...",
    "Loading projects...",
    "Seting random hand...",
];

function LoadingView(props: any) {
    const { setLoading, setRandomHand, hand } = props;

    const [progress, setProgress] = useState(INITAL_VALUE);
    const [text, setText] = useState(0);

    useEffect(() => {
        if (progress != 100 && text < BOOTING_TEXTS.length) {
            setTimeout(() => {
                setProgress(progress + 20);
                setText(text + 1);
            }, Math.floor(Math.random() * (1500 - 500 + 1) + 500));
        } else {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }, [progress, text]);

    return (
        <LoadingWrapper>
            <LoadingDialog>
                <BootWrapper>
                    <ImageWrapper>
                        <LogoImage style={{ top: 'calc(50% - 1.5rem)', left: '50%', transform: 'translate(-50%, -50%) scale(2)' }} onClick={setRandomHand} src={`/static/images/hands/0${hand}.png`} alt="Hand" />
                    </ImageWrapper>
                    <LoadingText>{BOOTING_TEXTS[text]}</LoadingText>
                    <LoadingBar>
                        <Progress progress={progress}></Progress>
                    </LoadingBar>
                    <div style={{ height: "2rem" }}></div>
                </BootWrapper>
            </LoadingDialog>
        </LoadingWrapper>
    );
}

export default LoadingView;
