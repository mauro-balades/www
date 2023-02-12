
import styled from "styled-components";
import { BG, BG2 } from "../constants";

export const Wrapper = styled.div`
    border: 6px solid ${BG};
    border-radius: 5px;
    overflow: hidden;

    position: relative;

    background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG};
    border: 1px solid ${(props: any) => props.theme.theme === "light" ? BG2 : "#ddd"};

    margin-bottom: 20px;
`

export const TopPart = styled.div`
    color: ${(props: any) => props.theme.colors.MAIN_TEXT_COLOR};
    font-weight: 600;

    background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG};
    padding: 5px 10px 5px 10px;
    border-bottom: 1px solid ${(props: any) => props.theme.theme === "light" ? BG2 : "#ddd"};

    font-size: 14px;

    & div:nth-child(1) {
        opacity: .6;
    }
`

export const StyleMePlease = styled.div`

    border-radius: 5px;
    overflow: hidden;

    // max-height: 500px;

    & .playground * {
        overflow: auto;
        background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG2};

        &::-webkit-scrollbar {
            width: 3px;
        }
    
        &::-webkit-scrollbar-track {
            background: transparent;
        }
    
        &::-webkit-scrollbar-thumb {
            background: #757575;
            border-radius: 10px;
        }
    }

    & .playground > div {
        border: none !important;
    }

    & .playground div[role="tablist"] {
        background: none !important;
        border: none !important;

        background: ${(props: any) => props.theme.theme === "light" ? "transparent" : BG2} !important;
        padding-left: 5px;
        margin: 0;
        border-bottom: 1px solid ${(props: any) => props.theme.theme === "light" ? BG2 : "#ddd"} !important;
    }

    & .playground > div > div:first-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        overflow: hidden;
    }

    & .playground > div > div:last-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        overflow: hidden;
    }

    & .playground div[role="tablist"] button {
        font-weight: 700 !important;

        font-size: 0.8rem !important;
        text-transform: uppercase !important;

        background: none !important;
        border: none !important;

        padding: 5px;
        margin: 10px 5px;

        border-radius: 5px;
    }

    & .playground div[role="tablist"] button[data-selected] {
        background: ${(props: any) => props.theme.theme === "light" ? "#ddd" : "black"} !important;
    }

    & .playground textarea:focus {
        outline: none !important;
        border: none !important;

        opacity: 0.5;
    }

    & .playground .token.tag {
        color: var(--syntax-prop) !important;
    }

    & .playground .token.tag.attr-name {
        color: var(--syntax-name) !important;
        font-style: none !important;
    }

    & .playground .token.tag.attr-value {
        color: var(--syntax-str) !important;
    }

    // TODO
`