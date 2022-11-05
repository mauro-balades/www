import styled from "styled-components"
import { MAIN_TEXT_COLOR } from "../../../const"
import { BG } from "../constants"

export const Wrapper = styled.div`
    border: 6px solid ${BG};
    border-radius: 5px;

    position: relative;

    background: ${BG};

    margin-bottom: 20px;
`

export const TopPart = styled.div`
    color: ${MAIN_TEXT_COLOR};
    font-weight: 600;

    background: ${BG};
    padding: 2px 10px 5px 10px;

    font-size: 15px;

    & div:nth-child(1) {
        opacity: .6;
    }
`