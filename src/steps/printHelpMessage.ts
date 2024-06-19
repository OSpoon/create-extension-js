import { log } from 'node:console'
import {
  cyan,
  green,
  magenta,
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
// ${yellow ('vanilla          vanilla-tailwind')}
// ${yellow ('vanilla-ts       vanilla-ts-tailwind')}
// ${green ('vue              vue-tailwind')}
// ${green ('vue-ts           vue-ts-tailwind')}
// ${cyan ('react            react-tailwind')}
// ${cyan ('react-ts         react-ts-tailwind')}
// ${magenta ('preact           preact-tailwind')}
// ${magenta ('preact-ts        preact-ts-tailwind')}
`

  log(helpMessage)
}
