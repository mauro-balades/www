
import React, { useState } from "react";
import { matchPath, Link, useLocation } from "react-router-dom";
import { Links, Blog, Link as NavLink, Wrapper, GoBackHome, BlogTitle, BlogDate, BlogWrapper, SectionTitle } from "./style";
import { motion } from "framer-motion";
import { BLOG_NAV_WIDTH } from "../../../../const";
import { useNavigate } from "react-router-dom";
import blogs from "../../../../blogs";

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

import snippets from "../../../../snippets";

import "./md/css/override.css";

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
        opacity: '0'
    },
    in: {
        filter: 'blur(0px)',
        transform: 'translate(0px, 0px)',
        opacity: '1'
    },
    out: {
        filter: 'blur(10px)',
        transform: 'translate(-80px, 5px)',
        opacity: '0'
    }
};

const blogTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

export default function() {
    let location = useLocation();
    const navigate = useNavigate();

    let [id, setId] = useState(0);
    let [isSnippet, setIfSnippet] = useState(false);

    const ifMatch = (cmp: number) => {
        return id == cmp;
    }

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Wrapper
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                key="blog-left-nav">
                <GoBackHome onClick={() => navigate(-1, { state: location }) || navigate("/", { state: location })}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    <span>Go Back</span>
                </GoBackHome>
                <Links>
                    {blogs.map((data, i) => {console.log(data); return (
                        <NavLink onClick={() => {setIfSnippet(false); setId(i+1)}} className={(ifMatch(i+1) && (!isSnippet)) ? "active" : ""}>
                            {/* <BlogTitle>{data.name}</BlogTitle>
                            <BlogDate>{data.date}</BlogDate> */}
                        </NavLink>
                    )})}
                </Links>
                <SectionTitle>Code Snippets</SectionTitle>
                <Links>
                    {snippets.map((data, i) => (
                        <NavLink onClick={() => {setIfSnippet(true); setId(i+1)}} className={(ifMatch(i+1) && isSnippet) ? "active" : ""}>
                            <BlogTitle>{data.name}</BlogTitle>
                            <BlogDate>{data.date}</BlogDate>
                        </NavLink>
                    ))}
                </Links>
                {/* TODO: snippets */}
            </Wrapper>
            <BlogWrapper>
                {id != 0 ? (
                    <Blog
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={blogVariants}
                        transition={blogTransition}
                        key={isSnippet ? id + blogs.length : id }>
                        <GoBackHome style={{ transform: 'translateY(15px)' }} onClick={() => setId(0)}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            <span>Close {isSnippet ? "Snippet" : "Blog"}</span>
                        </GoBackHome>
                        {/* <ReactMarkdown
                            children={isSnippet ? snippets[id-1].data : blogs[id-1].data}
                            remarkPlugins={[remarkGfm, remarkMath]}
                            allowElement={() => true}
                            rehypePlugins={[rehypeRaw, rehypeKatex]}
                            remarkRehypeOptions={{ allowDangerousHtml: true }}
                            components={{
                                div: "div",
                                p(props: any) { return <div className="p" {...props}></div> },
                                code({node, inline, className, children, ...props}) {
                                  const match = /language-(\w+)/.exec(className || '')
                                  return !inline && match ? (
                                    <SyntaxHighlighter
                                      children={String(children).replace(/\n$/, '')}
                                      style={dark}
                                      language={match[1]}
                                      PreTag="div"
                                      {...props}
                                    />
                                  ) : (
                                    <code className={className} {...props}>
                                      {children}
                                    </code>
                                  )
                                }
                            }} /> */}
                    </Blog>
                ) : null}
            </BlogWrapper>
        </div>
    )
}
