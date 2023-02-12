
import React, { useEffect, useRef, useState } from "react";
import { matchPath, Link, useLocation } from "react-router-dom";
import { Links, Blog, Link as NavLink, Wrapper, GoBackHome, BlogTitle, BlogDate, BlogWrapper, SectionTitle, HighlightElement } from "./style";
import { motion } from "framer-motion";
import { BLOG_NAV_WIDTH } from "../../../../theme";
import { useNavigate, useNavigation } from "react-router-dom";
import blogs from "../../../../blogs";

import gsap from "gsap";

import {MDXProvider} from '@mdx-js/react'
import { useTheme } from 'styled-components'

import snippets from "../../../../snippets";
import code from "./md/core/code";
import { ProgressPlugin } from "webpack";
import TOC from "../TOC";
import { replace_id } from "../../utils";
import mdLink from "./md/mdLink";
import { LightThemeNoise } from "../../style";

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
    delay: 1.2,
};

const pageVariants = {
    initial: {
        transform: `translateX(-${BLOG_NAV_WIDTH})`,
        transition: pageTransition
    },
    in: {
        filter: 'blur(0px)',
        transform: `translateX(0px)`,
        opacity: '1',
        transition: pageTransition
    },
    out: {
        filter: 'blur(15px)',
        transform: `translateX(-${BLOG_NAV_WIDTH})`,
        transition: {
            type: "tween",
            ease: "anticipate",
            duration: 0.5,
            delay: 0,
        }
    }
};

const blogVariants = {
    initial: {
        filter: 'blur(10px)',
        transform: 'translate(-80px, 5px)',
    },
    in: {
        filter: 'blur(0px)',
        transform: 'translate(0px, 0px)',
    },
    out: {
        filter: 'blur(10px)',
        transform: 'translate(-80px, 5px)',
        opacity: 0
    }
};

const blogTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

export default function() {
    const theme = useTheme()
    const navigate = useNavigate();

    let toc: any = [];

    let [id, setId] = useState(0);
    let [isSnippet, setIfSnippet] = useState(false);

    let blogref = useRef(null);
    let highlightElement = useRef(null);
    let highlightElement2 = useRef(null);

    const arrLength = blogs.length + snippets.length;
    const refs = useRef([] as any);

    const addToRefs = (el: any) => {
        if (el && !refs.current.includes(el)) {
          refs.current.push(el);
        }
    };

    useEffect(() => {
        if (refs.current.length == arrLength) {
            gsap.config({ force3D: 'auto' })

            refs.current.map((el: any, i: number) => {
                let hl_el = (i >= blogs.length) ? highlightElement2 : highlightElement;

                el.addEventListener('mouseenter', (e: any) => {
                    gsap.killTweensOf(hl_el.current)

                    if (refs.current.includes(e.relatedTarget) === true) {
                        gsap.set(hl_el.current, { opacity: 1, height: el.offsetHeight - 2 })

                        gsap.to(
                            hl_el.current,
                                {
                                    width: el.offsetWidth,
                                    y: el.offsetTop,
                                    x: el.offsetLeft,
                                    duration: 0.1
                                }
                        )
        
                        return;
                    }


                    gsap.set(
                        hl_el.current,
                        {
                            opacity: 1,
                            width: el.offsetWidth,
                            height: el.offsetHeight - 2,
                            y: el.offsetTop,
                            x: el.offsetLeft,
                        }
                    )

                })

                el.addEventListener('mouseleave', (_: any) => {
                    gsap.to(hl_el.current, { opacity: 0, duration: 0.1 })
                })
            })
        }
    }, [refs])

    useEffect(() => {
        (blogref as any).current.classList.add("disable-smooth-scroll");
        (blogref as any).current.scrollTop = 0;
        (blogref as any).current.classList.remove("disable-smooth-scroll");
    }, [id]);

    const ifMatch = (cmp: number) => {
        return id == cmp;
    }

    const add_to_toc = (level: number, name: string) => {
        if (typeof name === "string") {
            toc[toc.length] = {
                level,
                name
            }
        }
    }

    const blog_props = {
        components: {
            code,
            a: mdLink,
            h1: (props: any) => {add_to_toc(1, props.children); return (<section id={replace_id(props.children)}><h1>{props.children}</h1></section>)},
            h2: (props: any) => {add_to_toc(2, props.children); return (<section id={replace_id(props.children)}><h2>{props.children}</h2></section>)},
            h3: (props: any) => {add_to_toc(3, props.children); return (<section id={replace_id(props.children)}><h3>{props.children}</h3></section>)},
            h4: (props: any) => {add_to_toc(4, props.children); return (<section id={replace_id(props.children)}><h4>{props.children}</h4></section>)},
        },
    }

    return (
        <div style={{ overflowY: 'hidden', display: 'flex', width: '100%' }}>
            {theme.theme === "light" && (
                <LightThemeNoise></LightThemeNoise>
            )}
            <Wrapper
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                key="blog-left-nav">
                <GoBackHome onClick={() => {
                    (navigate(-1) || navigate("/"))
                }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    <span>Go Back</span>
                </GoBackHome>
                <Links>
                    <HighlightElement ref={highlightElement}></HighlightElement>

                    {blogs.map((data: any, i) => (
                        <NavLink ref={addToRefs} onClick={() => {setIfSnippet(false); setId(i+1)}} className={(ifMatch(i+1) && (!isSnippet)) ? "active" : ""}>
                            <BlogTitle>{data.meta.name}</BlogTitle>
                            <BlogDate>
                                {data.meta.date}
                                {data.meta.tag && (
                                    <>
                                        <span style={{ margin: '0 5px' }}>—</span>{data.meta.tag}
                                    </>
                                )}
                            </BlogDate>
                        </NavLink>
                    ))}
                </Links>
                <SectionTitle>Code Snippets</SectionTitle>
                <Links>
                    <HighlightElement ref={highlightElement2}></HighlightElement>

                    {snippets.map((data: any, i) => (
                        <NavLink ref={addToRefs} onClick={() => {setIfSnippet(true); setId(i+1)}} className={(ifMatch(i+1) && isSnippet) ? "active" : ""}>
                            <BlogTitle>{data.meta.name}</BlogTitle>
                            <BlogDate>
                                {data.meta.date}
                                {data.meta.tag && (
                                    <>
                                        <span style={{ margin: '0 5px' }}>—</span>{data.meta.tag}
                                    </>
                                )}
                            </BlogDate>
                        </NavLink>
                    ))}
                </Links>
                {/* TODO: snippets */}
            </Wrapper>
            <BlogWrapper ref={blogref}>
                {id != 0 ? (
                    <>
                        <Blog
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={blogVariants}
                            transition={blogTransition}
                            key={isSnippet ? id + blogs.length : (id+1) }>
                            <GoBackHome style={{ transform: 'translateY(15px)' }} onClick={() => setId(0)}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                <span>Close {isSnippet ? "Snippet" : "Article"}</span>
                            </GoBackHome>
                            {isSnippet && (<br/>)}
                            <MDXProvider>
                                {isSnippet ? snippets[id-1].default(blog_props) : blogs[id-1].default(blog_props)}
                            </MDXProvider>
                        </Blog>
                        <TOC
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={blogVariants}
                            transition={blogTransition}
                            key={`toc-${isSnippet ? id + blogs.length : id}`}
                            contents={toc} />
                    </>
                ) : null}
            </BlogWrapper>
        </div>
    )
}
