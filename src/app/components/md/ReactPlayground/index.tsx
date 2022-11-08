
import { Sandpack } from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";
import { TopPart, Wrapper } from "./style";

import { python } from "@codemirror/lang-python";


export default function Playground({style, template, ...props}: any) {

    return (
        <Wrapper style={style}>
            <TopPart>CodeSandbox playground</TopPart>
            <Sandpack
                theme={atomDark}
                template={template || "react"}
                {...props}
            />
        </Wrapper>
    );
  }
