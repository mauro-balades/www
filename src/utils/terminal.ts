
import { Terminal } from "xterm";
import bin from "../bin";

export function runCommand(term: Terminal, command: String) {
    term.write("\r\n");

    const [cmd, ...args] = command.split(' ');

    if (cmd == '') { /* ignore */ }
    else if (Object.keys(bin).indexOf(cmd) == -1) {
        term.write(`\x1B[1;3;31mCommand not found: ${cmd}. Try 'help' to get started.\x1B[0m\r\n`);
    } else {
        // @ts-ignore
        const executable = bin[cmd];
        executable.__command(term, args);
    }

    // @ts-ignore
    term.prompt();
}
