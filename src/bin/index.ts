import { Terminal } from "xterm";

export default {
    "echo": {
        __command: (term: Terminal, args: String[]) => {
            term.write(args.join(' '))
            term.write("\r\n")
        },
        __help: "Display a message to the terminal"
    }
}
