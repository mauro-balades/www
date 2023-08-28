import styled from "styled-components";
import { motion } from "framer-motion";

import {
    BLOG_NAV_WIDTH
} from "../../../../theme";
import { BG } from "../../../md/constants";

export const Wrapper = styled(motion.div)`
    padding: 20px;

    z-index: 2;

    width: ${BLOG_NAV_WIDTH};
    height: 100%;

    overflow: hidden;
    color: ${(props: any) => props.theme.colors.MAIN_TEXT_COLOR};
    background: ${(props: any) => props.theme.colors.BLOG_BACKGROUND} none repeat scroll 0% 0%;
    border-right: ${(props: any) => props.theme.theme === "light" ? "1px" : "2px"} solid ${(props: any) => props.theme.colors.BLOG_BORDER_CLR};

    font-family: rubik,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
`;

export const GoBackHome = styled.div`
    display: flex;
    padding: 5px 5px 10px 10px;
    cursor: pointer;

    position: relative;

    border-bottom: 1px solid ${(props: any) => props.theme.colors.BLOG_BORDER_CLR};
    margin-bottom: 5px;

    align-items: center;

    & svg {
        width: 15px;
        margin-right: 10px;
        transition: 0.1s;
    }

    &:hover svg {
        transform: translateX(-5px);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0%;

        height: 2px;
        border-radius: 1px;

        width: -webkit-fill-available;
        transition: 0.2s;
        background: ${(props: any) => props.theme.colors.MAIN_BACKGROUND_INVERTED};

        margin: 0 100% 0 100%;
    }

    &:has(.active) {
        opacity: 1;
    }

    &:hover::after {
        margin: 0;
    }
`;

export const BlogTitle = styled.div`
    font-weight: 600;
    font-size: 13px;
`;

export const HighlightElement = styled.div`

    border-radius: 5px;

    left: 0;
    top: 0;

	position: absolute;
	background: ${(props: any) => props.theme.theme === "light" ? "rgba(0,0,0,.2)" : "#222"};
	z-index: 4;
	border-radius: 0.6ch;
	opacity: 0;

    pointer-events: none;
    transition: .1s;
`;

export const BlogDate = styled.div`
    opacity: 0.8;
    font-weight: 600;

    font-size: 11px;
`;

export const Link = styled.div`
    position: relative;
    font-weight: 600;

    user-select: none;

    width: 100%;
    z-index: 10000;
    padding: 0.4rem;

    cursor: pointer;

    border-radius: 5px;
    margin: 5px 0;

    &:hover {
        color: ${(props: any) => props.theme.colors.MAIN_TEXT_COLOR};
        // background: rgba(255, 255, 255, 0.2);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -10px;

        height: -webkit-fill-available;
        border-radius: 1px;

        width: 3px;
        transition: 1s;
        background: ${(props: any) => props.theme.colors.MAIN_BACKGROUND_INVERTED};

        margin: 100% 0;
    }

    &.active::after {
        transition: 0.2s;
        opacity: 1;
        margin: 0;
    }
`;

export const Links = styled.div`
    padding: 10px 0 10px 10px;
    z-index: 2;

    position: relative;
`;

export const BlogWrapper = styled.div`
    height: 100vh;
    margin: 0 auto;
    width: 100%;

    padding-top: 10vh;
    overflow-y: auto;

    display: flex;
    justify-content: center;

    position: relative;
    overflow-x: hidden;

    & {
        scroll-behavior: smooth;
    }

    &.disable-smooth-scroll {
        scroll-behavior: auto;
    }

    & .toc {
        position: sticky;
        margin: 30px;
        left: 100%;
        top : 0;
        width: 100%;
    }

    &::-webkit-scrollbar,
    & *::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }

    &::-webkit-scrollbar-track,
    & *::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb,
    & *::-webkit-scrollbar-thumb {
        background: #757575;
        border-radius: 10px;
    }

`;

export const SectionTitle = styled.div`
    margin: 5px;
    font-weight: 600;

    background:
    z-index: 6;
`;

export const Blog = styled(motion.div)`
    max-width: 40%;
    height: fit-content;

    & {
        color-scheme: dark;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        margin: 0;
        font-size: 16px;
        line-height: 1.5;
        word-wrap: break-word;
    }



    & details,
    & figcaption,
    & figure {
        display: block;
    }

    & summary {
        display: list-item;
    }

    & [hidden] {
        display: none !important;
    }

    & a {
        background-color: transparent;
        color: #58a6ff;
        text-decoration: none;
    }

    & a:active,
    & a:hover {
        outline-width: 0;
    }

    & abbr[title] {
        border-bottom: none;
        text-decoration: underline dotted;
    }

    & b,
    & strong {
        font-weight: 600;
    }

    & dfn {
        font-style: italic;
    }

    & h1 {
        margin: 0.67em 0;
        font-weight: 600;
        padding-bottom: 0.3em;
        font-size: 2em;
    }

    & mark {
        background-color: rgba(187, 128, 9, 0.15);
        color: #c9d1d9;
    }

    & small {
        font-size: 90%;
    }

    & sub,
    & sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    & sub {
        bottom: -0.25em;
    }

    & sup {
        top: -0.5em;
    }

    & img {
        border-style: none;
        max-width: 100%;
        box-sizing: content-box;
    }

    & code,
    & kbd,
    & pre,
    & samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    & pre > div {
        background: none !important;
        padding: 0 !important;
        font-weight: 600;
    }

    & figure {
        margin: 1em 40px;
    }

    & hr {
        box-sizing: content-box;
        overflow: hidden;
        background: transparent;
        border-bottom: 1px solid #21262d;
        height: 0.25em;
        padding: 0;
        margin: 24px 0;
        background-color: #30363d;
        border: 0;
    }

    & input {
        font: inherit;
        margin: 0;
        overflow: visible;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    & [type="button"],
    & [type="reset"],
    & [type="submit"] {
        -webkit-appearance: button;
    }

    & [type="button"]::-moz-focus-inner,
    & [type="reset"]::-moz-focus-inner,
    & [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    & [type="button"]:-moz-focusring,
    & [type="reset"]:-moz-focusring,
    & [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    & [type="checkbox"],
    & [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    & [type="number"]::-webkit-inner-spin-button,
    & [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    & [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    & [type="search"]::-webkit-search-cancel-button,
    & [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    & ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
    }

    & ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    & a:hover {
        text-decoration: underline;
    }

    & hr::before {
        display: table;
        content: "";
    }

    & hr::after {
        display: table;
        clear: both;
        content: "";
    }

    & table {
        border-spacing: 0;
        border-collapse: collapse;
        display: block;
        width: max-content;
        max-width: 100%;
        overflow: auto;
    }

    & td,
    & th {
        padding: 0;
    }

    & details summary {
        cursor: pointer;
    }

    & details:not([open]) > *:not(summary) {
        display: none !important;
    }

    & kbd {
        display: inline-block;
        padding: 3px 5px;
        font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
            Liberation Mono, monospace;
        line-height: 10px;
        color: #c9d1d9;
        vertical-align: middle;
        background-color: #161b22;
        border: solid 1px rgba(110, 118, 129, 0.4);
        border-bottom-color: rgba(110, 118, 129, 0.4);
        border-radius: 6px;
        box-shadow: inset 0 -1px 0 rgba(110, 118, 129, 0.4);
    }

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
        margin-top: 35px;
        margin-bottom: 5px;
        font-weight: 600;
        line-height: 1.25;
    }

    & h1 {
        font-weight: bolder;
        font-size: 36px;
        margin-bottom: 1rem;
    }

    & h2 {
        font-weight: 600;
        padding-bottom: 0.1em;
        font-size: 1.5em;
    }

    & h3 {
        font-weight: 600;
        font-size: 1.25em;
    }

    & h4 {
        font-weight: 600;
        font-size: 1em;
    }

    & h5 {
        font-weight: 600;
        font-size: 0.875em;
    }

    & h6 {
        font-weight: 600;
        font-size: 0.85em;
        color: #8b949e;
    }

    & p {
        margin-top: 0;
        font-weight: 500;
        opacity: 0.7;
        font-size: 15px;
        margin-bottom: 10px;
        line-height: 1.75;
    }

    & blockquote {
        margin: 0;
        padding: 0 1em;
        color: #8b949e;
        border-left: ${(props: any) => props.theme.theme === "light" ? "0.2em solid rgba(0,0,0,.2)" : "0.25em solid #30363d"};
    }

    & ul,
    & ol {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 2em;
    }

    & ol ol,
    & ul ol {
        list-style-type: lower-roman;
    }

    & ul ul ol,
    & ul ol ol,
    & ol ul ol,
    & ol ol ol {
        list-style-type: lower-alpha;
    }

    & dd {
        margin-left: 0;
    }

    & .md-language-hl code {
        background: none !important;
    }

    & tt,
    & code {
        font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
            Liberation Mono, monospace;
        font-size: 12px;
    }

    & pre {
        margin-top: 0;
        margin-bottom: 0;
        font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
            Liberation Mono, monospace;
        font-size: 12px;
        word-wrap: normal;
    }

    & .octicon {
        display: inline-block;
        overflow: visible !important;
        vertical-align: text-bottom;
        fill: currentColor;
    }

    & ::placeholder {
        color: #484f58;
        opacity: 1;
    }

    & input::-webkit-outer-spin-button,
    & input::-webkit-inner-spin-button {
        margin: 0;
        -webkit-appearance: none;
        appearance: none;
    }

    & .pl-c {
        color: #8b949e;
    }

    & .pl-c1,
    & .pl-s .pl-v {
        color: #79c0ff;
    }

    & .pl-e,
    & .pl-en {
        color: #d2a8ff;
    }

    & .pl-smi,
    & .pl-s .pl-s1 {
        color: #c9d1d9;
    }

    & .pl-ent {
        color: #7ee787;
    }

    & .pl-k {
        color: #ff7b72;
    }

    & .pl-s,
    & .pl-pds,
    & .pl-s .pl-pse .pl-s1,
    & .pl-sr,
    & .pl-sr .pl-cce,
    & .pl-sr .pl-sre,
    & .pl-sr .pl-sra {
        color: #a5d6ff;
    }

    & .pl-v,
    & .pl-smw {
        color: #ffa657;
    }

    & .pl-bu {
        color: #f85149;
    }

    & .pl-ii {
        color: #f0f6fc;
        background-color: #8e1519;
    }

    & .pl-c2 {
        color: #f0f6fc;
        background-color: #b62324;
    }

    & .pl-sr .pl-cce {
        font-weight: bold;
        color: #7ee787;
    }

    & .pl-ml {
        color: #f2cc60;
    }

    & .pl-mh,
    & .pl-mh .pl-en,
    & .pl-ms {
        font-weight: bold;
        color: #1f6feb;
    }

    & .pl-mi {
        font-style: italic;
        color: #c9d1d9;
    }

    & .pl-mb {
        font-weight: bold;
        color: #c9d1d9;
    }

    & .pl-md {
        color: #ffdcd7;
        background-color: #67060c;
    }

    & .pl-mi1 {
        color: #aff5b4;
        background-color: #033a16;
    }

    & .pl-mc {
        color: #ffdfb6;
        background-color: #5a1e02;
    }

    & .pl-mi2 {
        color: #c9d1d9;
        background-color: #1158c7;
    }

    & .pl-mdr {
        font-weight: bold;
        color: #d2a8ff;
    }

    & .pl-ba {
        color: #8b949e;
    }

    & .pl-sg {
        color: #484f58;
    }

    & .pl-corl {
        text-decoration: underline;
        color: #a5d6ff;
    }

    & [data-catalyst] {
        display: block;
    }

    & g-emoji {
        font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 1em;
        font-style: normal !important;
        font-weight: 400;
        line-height: 1;
        vertical-align: -0.075em;
    }

    & g-emoji img {
        width: 1em;
        height: 1em;
    }

    & > *:first-child {
        margin-top: 0 !important;
    }

    & > *:last-child {
        margin-bottom: 0 !important;
    }

    & a:not([href]) {
        color: inherit;
        text-decoration: none;
    }

    & .absent {
        color: #f85149;
    }

    & .anchor {
        float: left;
        padding-right: 4px;
        margin-left: -20px;
        line-height: 1;
    }

    & .anchor:focus {
        outline: none;
    }

    & p,
    & blockquote,
    & ul,
    & ol,
    & dl,
    & table,
    & pre,
    & details {
        margin-top: 0;
        margin-bottom: 16px;
    }

    // code sandbox
    & .sp-stack p {
        margin-bottom: 0 !important;
        font-size: 13px !important;
    }

    & blockquote > :first-child {
        margin-top: 0;
    }

    & blockquote > :last-child {
        margin-bottom: 0;
    }

    & sup > a::before {
        content: "[";
    }

    & sup > a::after {
        content: "]";
    }

    & h1 .octicon-link,
    & h2 .octicon-link,
    & h3 .octicon-link,
    & h4 .octicon-link,
    & h5 .octicon-link,
    & h6 .octicon-link {
        color: #c9d1d9;
        vertical-align: middle;
        visibility: hidden;
    }

    & h1:hover .anchor,
    & h2:hover .anchor,
    & h3:hover .anchor,
    & h4:hover .anchor,
    & h5:hover .anchor,
    & h6:hover .anchor {
        text-decoration: none;
    }

    & h1 tt,
    & h1 code,
    & h2 tt,
    & h2 code,
    & h3 tt,
    & h3 code,
    & h4 tt,
    & h4 code,
    & h5 tt,
    & h5 code,
    & h6 tt,
    & h6 code {
        padding: 0 0.2em;
        font-size: inherit;
    }

    & ul.no-list,
    & ol.no-list {
        padding: 0;
        list-style-type: none;
    }

    & ol[type="1"] {
        list-style-type: decimal;
    }

    & ol[type="a"] {
        list-style-type: lower-alpha;
    }

    & ol[type="i"] {
        list-style-type: lower-roman;
    }

    & div > ol:not([type]) {
        list-style-type: decimal;
    }

    & ul ul,
    & ul ol,
    & ol ol,
    & ol ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    & li > p {
        margin-top: 16px;
    }

    & li {
        list-style: circle;
    }

    & li + li {
        margin-top: 0.25em;
    }

    & dl {
        padding: 0;
    }

    & dl dt {
        padding: 0;
        margin-top: 16px;
        font-size: 1em;
        font-style: italic;
        font-weight: 600;
    }

    & dl dd {
        padding: 0 16px;
        margin-bottom: 16px;
    }

    & table th {
        font-weight: 600;
    }

    & table th,
    & table td {
        padding: 6px 13px;
        border: 1px solid #30363d;
    }

    & table tr {
        background-color: #0d1117;
        border-top: 1px solid #21262d;
    }

    & table tr:nth-child(2n) {
        background-color: #161b22;
    }

    & table img {
        background-color: transparent;
    }

    & img[align="right"] {
        padding-left: 20px;
    }

    & img[align="left"] {
        padding-right: 20px;
    }

    & .emoji {
        max-width: none;
        vertical-align: text-top;
        background-color: transparent;
    }

    & span.frame {
        display: block;
        overflow: hidden;
    }

    & span.frame > span {
        display: block;
        float: left;
        width: auto;
        padding: 7px;
        margin: 13px 0 0;
        overflow: hidden;
        border: 1px solid #30363d;
    }

    & span.frame span img {
        display: block;
        float: left;
    }

    & span.frame span span {
        display: block;
        padding: 5px 0 0;
        clear: both;
        color: #c9d1d9;
    }

    & span.align-center {
        display: block;
        overflow: hidden;
        clear: both;
    }

    & span.align-center > span {
        display: block;
        margin: 13px auto 0;
        overflow: hidden;
        text-align: center;
    }

    & span.align-center span img {
        margin: 0 auto;
        text-align: center;
    }

    & span.align-right {
        display: block;
        overflow: hidden;
        clear: both;
    }

    & span.align-right > span {
        display: block;
        margin: 13px 0 0;
        overflow: hidden;
        text-align: right;
    }

    & span.align-right span img {
        margin: 0;
        text-align: right;
    }

    & span.float-left {
        display: block;
        float: left;
        margin-right: 13px;
        overflow: hidden;
    }

    & span.float-left span {
        margin: 13px 0 0;
    }

    & span.float-right {
        display: block;
        float: right;
        margin-left: 13px;
        overflow: hidden;
    }

    & span.float-right > span {
        display: block;
        margin: 13px auto 0;
        overflow: hidden;
        text-align: right;
    }

    & code,
    & tt {
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(110, 118, 129, 0.4);
        border-radius: 6px;
    }

    & code br,
    & tt br {
        display: none;
    }

    & del code {
        text-decoration: inherit;
    }

    & pre code {
        font-size: 100%;
    }

    & pre > code {
        padding: 0;
        margin: 0;
        word-break: normal;
        white-space: pre;
        background: transparent;
        border: 0;
    }

    & .highlight {
        margin-bottom: 16px;
    }

    & .highlight pre {
        margin-bottom: 0;
        word-break: normal;
    }

    & .highlight pre,
    & pre {
        padding: 15px 0 15px 20px;
        overflow: auto;
        font-size: 85%;
        // line-height: 1.45;
        background-color: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG};
        border: 1px solid ${(props: any) => props.theme.theme === "light" ? "hsl(0, 0%, 78%)" : "none"};
        border-radius: 5px;

        & * {
            text-shadow: none !important;
        }
    }

    & pre code,
    & pre tt {
        display: inline;
        max-width: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        line-height: inherit;
        word-wrap: normal;
        background-color: transparent;
        border: 0;
    }

    & .csv-data td,
    & .csv-data th {
        padding: 5px;
        overflow: hidden;
        font-size: 12px;
        line-height: 1;
        text-align: left;
        white-space: nowrap;
    }

    & .csv-data .blob-num {
        padding: 10px 8px 9px;
        text-align: right;
        background: #0d1117;
        border: 0;
    }

    & .csv-data tr {
        border-top: 0;
    }

    & .csv-data th {
        font-weight: 600;
        background: #161b22;
        border-top: 0;
    }

    & .footnotes {
        font-size: 12px;
        color: #8b949e;
        border-top: 1px solid #30363d;
    }

    & .footnotes ol {
        padding-left: 16px;
    }

    & .footnotes li {
        position: relative;
    }

    & .footnotes li:target::before {
        position: absolute;
        top: -8px;
        right: -8px;
        bottom: -8px;
        left: -24px;
        pointer-events: none;
        content: "";
        border: 2px solid #1f6feb;
        border-radius: 6px;
    }

    & .footnotes li:target {
        color: #c9d1d9;
    }

    & .footnotes .data-footnote-backref g-emoji {
        font-family: monospace;
    }

    & .task-list-item {
        list-style-type: none;
    }

    & .task-list-item label {
        font-weight: 400;
    }

    & .task-list-item.enabled label {
        cursor: pointer;
    }

    & .task-list-item + .task-list-item {
        margin-top: 3px;
    }

    & .task-list-item .handle {
        display: none;
    }

    & .task-list-item-checkbox {
        margin: 0 0.2em 0.25em -1.6em;
        vertical-align: middle;
    }

    & .contains-task-list:dir(rtl) .task-list-item-checkbox {
        margin: 0 -1.6em 0.25em 0.2em;
    }

    & ::-webkit-calendar-picker-indicator {
        filter: invert(50%);
    }
`;
