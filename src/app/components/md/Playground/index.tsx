
// @ts-ignore
import Playground from "@agney/playground";
import { StyleMePlease, TopPart, Wrapper, BG2, BG } from "./style";

export default function(props: any) {
  const snippet = {
    markup: props.html,
    css: props.css,
    javascript: props.js,
  };

  return (
    <Wrapper style={ props.style }>
        <TopPart>
            <div>Code Playground</div>
        </TopPart>
        <StyleMePlease>
            <Playground
                mode="dark"
                initialSnippet={snippet}
                defaultEditorTab={props.defaultEditorTab ?? "html"}
                transformJs
                presets={["react", ...(props.presets || [])]}
                theme={{
                    container: {
                        borderColor: "",
                        minHeight: "20em",
                        minWidth: "15em",
                    },
                    error: {
                        background: "",
                        color: "",
                    },
                    console: {
                        background: BG2,
                    },
                    divider: {
                        width: 4,
                        background: "",
                        dividerBackground: BG,
                        containerWidth: 4,
                    },
                    editor: {
                      fontFamily: "Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace",
                      backgroundColor: BG2,
                      color: ``,
                    },
                    tabs: {
                        tabHeader: {
                            borderBottom: "",
                            panelBackground: "",
                            background: "",
                            color: "",
                        },
                        tabPanel: {
                            phoneHeight: "10em",
                        },
                        selectedTab: {
                            background: BG,
                        },
                    },
                }}
            />
        </StyleMePlease>
    </Wrapper>
  );
};