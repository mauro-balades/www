
import React, { useRef } from "react";
import { DefaultBlob, SimpleBlob, SimpleBlob2 } from "../../../blobs";
import { BigText, SmallText, Wrapper, EasterEgg } from "./style";
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
        filter: 'blur(15px)',
        opacity: '0'
    },
    in: {
        filter: 'blur(0px)',
        opacity: '1'
    },
    out: {
        filter: 'blur(15px)',
        opacity: '0'
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

export default function() {

    return (
        <Wrapper>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div style={{ position: 'relative', zIndex: '2' }}>
                    <SmallText>
                        Welcome to my portfolio!
                    </SmallText>
                    <BigText>
                        <EasterEgg>
                            <span>Software developer</span>
                            <img src="/static/gif/cat.gif" />
                        </EasterEgg> from Madrid, Spain.<br />
                        I love to make software in any sort of <br />
                        branch
                    </BigText>
                </div>
            </motion.div>
        </Wrapper>
    )
}
