
import React, { useEffect, useState } from 'react';
import { LoadingWrapper, LoadingDialog, BootWrapper, LoadingBar, Progress, LoadingText, ImageWrapper } from './styles';
import Window from '../Window';

const INITAL_VALUE = 60;
const BOOTING_TEXTS = [
    "Booting portfolio kernel...",
    "Preparing configuration...",
    "Loading projects..."
]

function LoadingView(props: any) {
    const { setLoading } = props;

    const [ progress, setProgress ] = useState(INITAL_VALUE);
    const [ text, setText ] = useState(0);

    useEffect(() => {
        if (progress != 100 && text < BOOTING_TEXTS.length) {
            setTimeout(() => {
                setProgress(progress + 20);
                setText(text + 1);
            }, Math.floor(Math.random() * (1500 - 500 + 1) + 500))
        } else {

            setTimeout(() => {
                setLoading(false);
            }, 500)
        }
    }, [progress, text])

    return (
        <LoadingWrapper>
            <LoadingDialog>
                <BootWrapper>
                    <ImageWrapper></ImageWrapper>
                    <LoadingText>{BOOTING_TEXTS[text]}</LoadingText>
                    <LoadingBar>
                        <Progress progress={progress}></Progress>
                    </LoadingBar>
                    <div style={{ height: '2rem' }}></div>
                </BootWrapper>
            </LoadingDialog>
        </LoadingWrapper>
    )
}

export default LoadingView;
