import React, { useEffect, useRef, useState } from "react";
import Window from "../../Window";
import { Wrapper } from "./styles";
import { useTheme } from 'styled-components';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { Terminal as XTerm } from "xterm";
import 'xterm/css/xterm.css';
import { runCommand } from "../../../utils/terminal";
import TerminalInfo from "./Info";

const emojis = [
  "\\(o_o)/",
  "(˚Δ˚)b",
  "(^-^*)",
  "(╯‵□′)╯",
  "\\(°ˊДˋ°)/",
  "╰(‵□′)╯"
];

function Terminal(props: any) {

    const theme = useTheme();
    const container = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [info, setInfo] = useState(true);
    const [term, setTerm] = useState(new XTerm({
      cursorBlink: true,
    }));


    useEffect(() => {
        if (!loaded) {
            console.log(container);
            var command = '';
            var term_element = document.getElementById('terminal') as HTMLElement;
    
            // TODO: add theme for colors
            // https://xtermjs.org/docs/api/terminal/interfaces/itheme/

            const fitAddon = new FitAddon();
            term.loadAddon(fitAddon);
            term.loadAddon(new WebLinksAddon());

            term.open(term_element);
            term.focus()

            // @ts-ignore
            term_element.querySelector(".terminal.xterm > .xterm-viewport").classList.add("scrollbar")

            // @ts-ignore
            term.prompt = () => {
                term.write("\x1b[0;33mguest@maucode.com\x1B[0m$ ~ ")
            }

            term.write(`${emojis[Math.floor(Math.random()*emojis.length)]}: Hey, you found the terminal! Type \`help\` to get started.\n\r\n\r`)

            // @ts-ignore
            term.prompt();

            term.onData(e => {
                switch (e) {
                  case '\u0003': // Ctrl+C
                    term.write('^C');
                    command = '';
                    break;
                  case '\r': // Enter
                    runCommand(term, command, props.termOptions);
                    command = '';
                    break;
                  case '\u007F': // Backspace (DEL)
                    // Do not delete the prompt
                    if (term.buffer.active.cursorX > "guest@maucode.com$ ~ ".length) {
                      term.write('\b \b');
                      if (command.length > 0) {
                        command = command.substr(0, command.length - 1);
                      }
                    }
                    break;
                  default: // Print all other characters
                    if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {
                      command += e;
                      term.write(e);
                    }
                }
              });

            fitAddon.fit();

            // @ts-ignore
            document.getElementById("terminal-window").classList.remove("init");
            console.log(document.getElementById("terminal-window"))
            props.setClosed(true);

            setLoaded(true);
        }
    }, [container])

    useEffect(() => {
        term.setOption('theme', {
          background: theme.terminalBackground,
          white: theme.terminalForeground,
          foreground: theme.terminalForeground,
        });
    }, [theme])

    return (
        <>
            <TerminalInfo closed={info} setClosed={setInfo} />
            <Window
                y="30"
                x="70"
                title="Terminal"
                width="45"
                height="30"
                id="terminal-window"
                extraClassNames="init"
                closable={true}
                info={setInfo}
                {...props}
            >
                <Wrapper ref={container} id="terminal" className="scrollbar">

                </Wrapper>
            </Window>
        </>
    );
}

export default Terminal;
