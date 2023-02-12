
import styled from "styled-components";

const INFO_DARK_BG = "hsl(210deg, 38%, 15%)"
const INFO_DARK_BR = "hsl(230deg, 100%, 69%)"

const INFO_LIGHT_BG = "hsl(220, 14%, 90%)"
const INFO_LIGHT_BR = "hsl(13, 22%, 13%)"

const WARN_DARK_BG = "hsl(56, 100%, 5%)";
const WARN_DARK_BR = "hsl(59, 100%, 75%)";

const WARN_LIGHT_BG = "rgba(255,255,0,.2)";
const WARN_LIGHT_BR = "rgba(255,255,0,.5)";

export const Alert = styled.div`
    width: 100%;
    padding: 25px;

    position:relative;
    border-radius: 5px;

    margin: 30px 0;

    ${(props: any) =>
        props.type == "info" ? `
            background: ${props.theme.theme === "light" ? INFO_LIGHT_BG : INFO_DARK_BG};
            border-left: 4px solid ${props.theme === "light" ? INFO_LIGHT_BR : INFO_DARK_BR};
        ` :
        props.type == "warn" ? `
            background: ${props.theme.theme === "light" ? WARN_LIGHT_BG : WARN_DARK_BG};
            border-left: 4px solid ${props.theme === "light" ? WARN_LIGHT_BR : WARN_DARK_BR};
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
            color: ${props.theme === "light" ? INFO_LIGHT_BR : INFO_DARK_BR};
        ` :
        props.type == "warn" ? `
            color: ${props.theme === "light" ? WARN_LIGHT_BR : WARN_DARK_BR};
        ` :
        ""}

    & svg {
        width: 30px;
        height: 30px;
    }
`
