
import styled from "styled-components";
import { MAIN_BACKGROUND } from "../../../const";

const INFO_BG = "hsl(210deg, 38%, 15%)"
const INFO_BR = "hsl(230deg, 100%, 69%)"

export const Alert = styled.div`
    width: 100%;
    padding: 25px;

    position:relative;
    border-radius: 5px;

    margin: 30px 0;

    ${(props: any) =>
        props.type == "info" ? `
            background: ${INFO_BG};
            border-left: 4px solid ${INFO_BR};
        ` :
        props.type == "warning" ? `` :
        ""}

    & *:last-child {
        margin-bottom: 0;
    }
`

export const Icon = styled.div`
    position: absolute;

    top: -20px;
    left: -20px;

    padding: 3px;

    background: ${MAIN_BACKGROUND};

    border-radius: 50%;
    ${(props: any) =>
        props.type == "info" ? `
            color: ${INFO_BR};
        ` :
        props.type == "warning" ? `` :
        ""}

    & svg {
        width: 30px;
        height: 30px;
    }
`
