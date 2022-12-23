import styled from "styled-components"
import { BG, BG2 } from "../constants"

export const Wrapper = styled.div`
    border: 6px solid ${BG};
    border-radius: 5px;

    overflow: hidden;
    position: relative;

    background: ${BG};
    border: 1px solid #fff;

    margin-bottom: 20px;

    & .cm-editor {
        background: ${BG2} !important;
    }
`

export const TopPart = styled.div`
    color: ${(props: any) => props.theme.colors.MAIN_TEXT_COLOR};
    font-weight: 600;

    background: ${BG};
    padding: 2px 10px 5px 10px;

    font-size: 15px;

    & div:nth-child(1) {
        opacity: .6;
    }
`