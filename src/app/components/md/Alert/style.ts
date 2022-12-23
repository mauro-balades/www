
import styled from "styled-components";

const INFO_BG = "hsl(210deg, 38%, 15%)"
const INFO_BR = "hsl(230deg, 100%, 69%)"

const WARN_BG = "hsl(56, 100%, 5%)"
const WARN_BR = "hsl(59, 100%, 75%)"

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
        props.type == "warn" ? `
            background: ${WARN_BG};
            border-left: 4px solid ${WARN_BR};
        ` :
        ""}

    & *:last-child {
        margin-bottom: 0;
    }
`

export const Icon = styled.div`
    position: absolute;

    top: -20px;
    left: -20px;

    padding: ${(props: any) => props.type == "warn" ? "6px" : "3px"};

    background: ${(props: any) => props.theme.colors.HOME_BACKGROUND};

    border-radius: 50%;
    ${(props: any) =>
        props.type == "info" ? `
            color: ${INFO_BR};
        ` :
        props.type == "warn" ? `
            color: ${WARN_BR};
        ` :
        ""}

    & svg {
        width: 30px;
        height: 30px;
    }
`
