import { Terminal } from "xterm";

const bins = {
    "echo": {
        __command: (term: Terminal, args: String[]) => {
            term.write(args.join(' '))
            term.write("\r\n")
        },
        __help: "Display a message to the terminal"
    },
    "help": {
        __command: (term: Terminal, args: String[]) => {

            term.write("Help menu:\r\n")

            Object.keys(bins).forEach((key: string) => {

                // @ts-ignore
                term.write(` - ${key} : ${bins[key].__help}\r\n`)
            }, this)

            term.write("\r\n")
        },
        __help: "Display this message"
    }
}


export default bins;