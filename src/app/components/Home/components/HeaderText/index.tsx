
import React, { useRef } from "react";
import { DefaultBlob, SimpleBlob, SimpleBlob2 } from "../../../blobs";
import { BigText, SmallText, Wrapper, EasterEgg } from "./style";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { BLOG_NAV_WIDTH } from "../../../../theme";

function getTransitions(delay: number) {

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.2,
        delay: delay + 0.01,
    };
    
    const pageVariants = {
        initial: {
            transform: `translateX(-${BLOG_NAV_WIDTH})`,
            transition: pageTransition,
            opacity: 0,
        },
        in: {
            filter: 'blur(0px)',
            transform: `translateX(0px)`,
            opacity: 1,
            transition: pageTransition,
        },
        out: {
            trans: 'blur(15px)',
            transform: `translateX(-${BLOG_NAV_WIDTH})`,
            transition: {
                type: "tween",
                ease: "anticipate",
                duration: 0.5,
                delay: delay + 0,
            },
            opacity: '0'
        }
    };

    return pageVariants;
}

export default function() {

    return (
        <Wrapper>
            <div style={{ position: 'relative', zIndex: '2' }}>
                <SmallText
                    initial="initial"
                    animate="in"
                    exit="out"
                    key="home-text-main-1"
                    variants={getTransitions(0)}>
                    Welcome to my portfolio!
                </SmallText>
                <BigText
                    initial="initial"
                    animate="in"
                    exit="out"
                    key="home-text-main-2"
                    variants={getTransitions(0.1)}>
                    <EasterEgg data-cursora>
                        <span>Software developer</span>
                        <img src="/static/gif/cat.gif" />
                    </EasterEgg> from Madrid, Spain.<br />
                    I love to make software in any sort of <br />
                    branch
                </BigText>
            </div>
        </Wrapper>
    )
}
