import * as React from "react"
import { useTheme } from "styled-components"

export default function(props) {
    let theme = useTheme(); 
    return <img {...props} style={{filter: `invert(${
        (theme.theme !== "light") * 
            100}%)`, margin: '0 auto', ...props.style }} />
}