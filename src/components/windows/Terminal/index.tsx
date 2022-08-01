import React, { useEffect, useRef, useState } from "react";
import Window from "../../Window";
import { Wrapper } from "./styles";
import { useTheme } from 'styled-components';
import { FitAddon } from 'xterm-addon-fit';
import { Terminal as XTerm } from "xterm";
import 'xterm/css/xterm.css';
import { runCommand } from "../../../utils/terminal";

var term: XTerm;
const emojis = ["ᕦ( ͡° ͜ʖ ͡°)ᕤ", "(｢๑•₃•)｢", "ฅ^•ﻌ•^ฅ", "(☞ ͡° ͜ʖ ͡°)☞"]

function Terminal(props: any) {

    const theme = useTheme();
    const container = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            var command = '';
            var term_element = document.getElementById('terminal') as HTMLElement;
    
            term = new XTerm({
                cursorBlink: true,
                theme: {
                    background: theme.terminalBackground
                }
            });

            const fitAddon = new FitAddon();
            term.loadAddon(fitAddon);

            term.open(term_element);
            term.focus()

            // @ts-ignore
            term_element.querySelector(".terminal.xterm > .xterm-viewport").classList.add("scrollbar")

            // @ts-ignore
            term.prompt = () => {
                term.write("$ ")
            }

            term.write(`${emojis[Math.floor(Math.random()*emojis.length)]}: Welcome to mauro's terminal!\n\r\n\r`)

            // @ts-ignore
            term.prompt();

            term.onData(e => {
                switch (e) {
                  case '\u0003': // Ctrl+C
                    term.write('^C');
                    command = '';
                    break;
                  case '\r': // Enter
                    runCommand(term, command);
                    command = '';
                    break;
                  case '\u007F': // Backspace (DEL)
                    // Do not delete the prompt
                    if (term.buffer.active.cursorX > 2) {
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
            setLoaded(true);
        }
    }, [container])

    useEffect(() => {
        term.setOption('theme', {
            background: theme.terminalBackground
        });
    }, [theme])

    return (
        <>
            <Window
                y="30"
                x="70"
                title="terminal"
                width="45"
                height="30"
                closable={true}
                {...props}
            >
                <Wrapper ref={container} id="terminal">

                </Wrapper>
            </Window>
        </>
    );
}

export default Terminal;
