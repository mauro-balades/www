import { ThemeProvider } from "styled-components";

export const themeKeys = ["Moonlight Drive"];
export const themes = require("./themes.json");

export default (props: any) => {
    return (
        <ThemeProvider theme={themes[props.theme]}>
            {props.children}
        </ThemeProvider>
    );
};
