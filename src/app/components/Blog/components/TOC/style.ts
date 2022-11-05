
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapepr = styled.div`

    padding: 5%;
    margin-left: 20px;

    position: relative;
`

export const Sticky = styled(motion.div)`
    position: fixed;

    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    letter-spacing: 2px;
    text-transform: uppercase;

    margin-bottom: 10px;

    font-size: 16px;
    font-weight: 600;

    opacity: .8;
`

export const Section = styled.a`
    padding-left: ${(props: any) => props.level === 1 ? '0' : (props.level * 15) - 8}px;
    margin-top: ${(props: any) => (5-props.level) + 6}px;

    font-size: ${(props: any) => (5-props.level) + 12}px;
    font-weight: 600;
    opacity: .8;

    transition: .1s;

    &:hover {
        opacity: 1;
    }
`
