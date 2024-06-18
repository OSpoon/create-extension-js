import process from 'node:process'
import { error, log } from 'node:console'
import minimist from 'minimist'
import printHelpMessage from './steps/printHelpMessage'
import runInteractiveMode from './steps/runInteractiveMode'
import { formatTargetDir } from './helpers/formatTargetDir'

const argv = minimist<{
  template?: string
  help?: boolean
}>(process.argv.slice(2), {
  default: { help: false },
  alias: { h: 'help', t: 'template' },
  string: ['_'],
})

async function init() {
  const argTargetDir = formatTargetDir(argv._[0])
  const argTemplate = argv.template || argv.t
  const argSample = argv.sample || argv.s

  const help = argv.help
  if (help) {
    printHelpMessage()
    return
  }

  try {
    const result = await runInteractiveMode(argTargetDir, argTemplate, argSample, argv.overwrite)
    // user choice associated with prompts
    const { targetDir, overwrite, packageName, framework, variant, sample } = result
    log('targetDir:', targetDir)
    log('overwrite:', overwrite)
    log('packageName:', packageName)
    log('framework:', framework?.name)
    log('variant:', variant?.name)
    log('sample:', sample)
  }
  catch (cancelled: any) {
    log(cancelled.message)
  }
}

init().catch((e) => {
  error(e)
})
