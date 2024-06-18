import process from 'node:process'
import { error, log } from 'node:console'
import path from 'node:path'
import minimist from 'minimist'
import printHelpMessage from './steps/printHelpMessage'
import runInteractiveMode from './steps/runInteractiveMode'
import { formatTargetDir } from './helpers/formatTargetDir'
import initProjectPath from './steps/initProjectPath'
import { CWD } from './helpers/constants'
import printNextSteps from './steps/printNextSteps'
import { getProjectName } from './helpers/getProjectName'
import writeTemplateFiles from './steps/writeTemplateFiles'

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

    // determine template
    const template: string = variant?.name || framework?.name || argTemplate
    log(template)

    const root = path.join(CWD, targetDir)
    // Initializes the project path to prevent the folder from not existing
    initProjectPath(root, overwrite)

    // Generate the base project from user input
    writeTemplateFiles(root, template, packageName || getProjectName(targetDir))

    // Add sample as user input

    // After the creation is complete, a message is displayed indicating the next operation
    printNextSteps(root)
  }
  catch (cancelled: any) {
    log(cancelled.message)
  }
}

init().catch((e) => {
  error(e)
})
