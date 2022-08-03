import { Terminal } from "xterm";

const neofetch = `
  \x1B[0;33m     --- _       guest\x1B[1;36m@maucode-com-g551jx \x1B[0m\x1B[0m\r
  \x1B[0;33m   / ---  \\      kernel \x1B[0m5.15.0-41-generic\x1B[0m\r
  \x1B[0;33m  | |   |  |      shell \x1B[0mzsh\x1B[0m\r
  \x1B[0;33m   \\ --- _/      uptime \x1B[0mup ∞ hours\x1B[0m\r
  \x1B[0;33m     ---            cpu \x1B[0mIntel(R) Core(TM) i7-4720HQ CPU\x1B[0m\r
  \x1B[0;33m                     os \x1B[0mLinux\x1B[0m\r\n\r
    > https://github.com/mauro-balades/sf\r\n\r
`

const bins = {
    "echo": {
        __command: (term: Terminal, args: String[], _: any) => {
            term.write(args.join(' '))
            term.write("\r\n")
        },
        __help: "Display a message to the terminal"
    },
    "clear": {
        __command: (term: Terminal, _: String[], _2: any) => {
            term.reset()
        },
        __help: "Clear the terminal"
    },
    "hack": {
        __command: (term: Terminal, _: String[], options: any) => {
            for (let [key, value] of Object.entries(options.hacks)) {
                (value as any).state(false);

                setTimeout(() => {
                    (value as any).state(true);
                }, (value as any).time)
            }

            term.write("Fetching IP adress... \x1B[1;36mOK\x1B[0m\n\r")
            term.write("Entering email account... \x1B[1;36mOK\x1B[0m\n\r")
            term.write("Geolocating user... \x1B[1;36mOK\x1B[0m\n\r")
        },
        __help: "???"
    },
    "fetch": {
        __command: (term: Terminal, _: String[], _2: any) => {
            term.write(neofetch)
        },
        __help: "Fetch information from the system"
    },
    "help": {
        __command: (term: Terminal, args: String[], _: any) => {

            term.write("\r\nHelp menu:\r\n")

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