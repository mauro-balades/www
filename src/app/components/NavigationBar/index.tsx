
import React, { useState } from "react";
import { matchPath, Link, useLocation } from "react-router-dom";
import { Links, Logo, Link as NavLink, Wrapper, LastLink } from "./style";
import { motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle";

function animationWithDelat(_delay: number = 0) {
    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.3,
        delay: _delay + 0.2,
    };
    
    const pageVariants = {
        initial: {
            transform: 'translateY(0px)',
            transition: pageTransition
        },
        in: {
            transform: 'translateY(-100px)',
            transition: pageTransition
        },
        out: {
            transform: 'translateY(0px) ',
            transition: {
                type: "tween",
                ease: "anticipate",
                duration: 0.3,
                delay: _delay + 0,
            }
        }
    };

    return pageVariants;
}

export default function(props: any) {


    let { animate } = props;
    let location = useLocation();

    const ifMatch = (route: string) => {
        return location.pathname == route;
    }

    let LinkWrapper = animate !== undefined ? motion.div : "div";
    return (
        <Wrapper>
            <LinkWrapper
                initial="initial"
                animate="in"
                exit="out"
                key="navbar-logo"
                variants={animationWithDelat()}>
                <Logo>Mauro Baladés</Logo>
            </LinkWrapper>
            <Links>
                <LinkWrapper
                    initial="initial"
                    animate="in"
                    exit="out"
                    key="navbar-l-home"
                    variants={animationWithDelat(0.2)}>
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
                    key="navbar-l-blog"
                    variants={animationWithDelat(0.4)}>
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
                    key="navbar-l-projects"
                    variants={animationWithDelat(0.6)}>
                    <Link to="/projects">
                        <NavLink className={ifMatch("/projects") ? "active" : ""}>
                            Projects
                        </NavLink>
                    </Link>
                </LinkWrapper>
                <LinkWrapper
                    initial="initial"
                    animate="in"
                    key="navbar-l-contact"
                    exit="out"
                    variants={animationWithDelat(0.8)}>
                    <Link to="/about">
                        <NavLink className={ifMatch("/about") ? "active" : ""}>
                            About me
                        </NavLink>
                    </Link>
                </LinkWrapper>
                <ThemeToggle />
            </Links>
            <LinkWrapper
                initial="initial"
                animate="in"
                exit="out"
                key="navbar-interactive-website"
                variants={animationWithDelat(1)}>
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
