import { log } from 'node:console'
import {
  yellow,
} from 'kolorist'

export default function printHelpMessage() {
  const helpMessage = `\
Usage: create-extension.js [OPTION]... [DIRECTORY]

Create a new Browser Extension project based on extension.js in JavaScript or TypeScript.
With no arguments, start the CLI in interactive mode.

Options:
  -t, --template NAME        use a specific template

Available templates:
${yellow ('https://github.com/extension-js/extension.js/discussions/93')}`

  log(helpMessage)
}
