import { ThemeProvider } from "styled-components";

export const themes = require("./themes.json");
export const themeKeys = Object.keys(themes);

export default (props: any) => {
    return (
        <ThemeProvider theme={themes[props.theme]}>
            {props.children}
        </ThemeProvider>
    );
};
