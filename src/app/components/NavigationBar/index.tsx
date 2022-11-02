
import React from "react";
import { matchPath, Link, useLocation } from "react-router-dom";
import { Links, Logo, Link as NavLink, Wrapper, LastLink } from "./style";
import { motion } from "framer-motion";
import { useNavigation } from "react-router-dom";

const pageVariants = {
    initial: {
        transform: 'translateY(0)'
    },
    in: {
        filter: 'blur(0px)',
        transform: 'translateY(-100px)',
        opacity: '1'
    },
    out: {
        filter: 'blur(15px)',
        transform: 'translateY(0) '
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
};

export default function(props: any) {


    let { animate } = props;

    let location = useLocation();

    const ifMatch = (route: string) => {
        console.log(location)
        return location.pathname == route;
    }

    let LinkWrapper = animate ? motion.div : "div";
    return (
        <Wrapper>
            <LinkWrapper
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}>
                <Logo>Mauro Baladés</Logo>
            </LinkWrapper>
            <Links>
                <LinkWrapper
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={{delay: 0.2, ...pageTransition}}>
                    <Link to="/">
                        <NavLink className={ifMatch("/") ? "active" : ""}>
                            Home
                        </NavLink>
                    </Link>
                </LinkWrapper>
                <LinkWrapper
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={{delay: 0.4, ...pageTransition}}>
                    <Link to="/blog">
                        <NavLink className={ifMatch("/blog") ? "active" : ""}>
                            Blog
                        </NavLink>
                    </Link>
                </LinkWrapper>
                <LinkWrapper
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={{delay: 0.6, ...pageTransition}}>
                    <Link to="/projects">
                        <NavLink className={ifMatch("/projects") ? "active" : ""}>
                            Projects
                        </NavLink>
                    </Link>
                </LinkWrapper>
                <LinkWrapper
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={{delay: 0.8, ...pageTransition}}>
                    <Link to="/contact">
                        <NavLink className={ifMatch("/contact") ? "active" : ""}>
                            Contact
                        </NavLink>
                    </Link>
                </LinkWrapper>
            </Links>
            <LinkWrapper
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{delay: 1, ...pageTransition}}>
                <LastLink>
                    <span>
                        Interactive Website
                    </span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </LastLink>
            </LinkWrapper>
        </Wrapper>
    )
}
