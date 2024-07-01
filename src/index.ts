import process from 'node:process'
import { error, log } from 'node:console'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import minimist from 'minimist'
import printHelpMessage from './steps/printHelpMessage'
import runInteractiveMode from './steps/runInteractiveMode'
import { formatTargetDir } from './helpers/formatTargetDir'
import initProjectPath from './steps/initProjectPath'
import { CWD } from './helpers/constants'
import printNextSteps from './steps/printNextSteps'
import { getProjectName } from './helpers/getProjectName'
import { getTemplateName } from './helpers/getTemplateName'
import buildTemplate from './steps/buildTemplate'

export function getTemplateDir(template: string) {
  return path.resolve(
    fileURLToPath(import.meta.url),
    '../..',
    `templates/${template}`,
  )
}

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
  const argTemplate = getTemplateName(argv.template || argv.t)

  const help = argv.help
  if (help) {
    printHelpMessage()
    return
  }

  try {
    const result = await runInteractiveMode(argTargetDir, argTemplate, argv.overwrite)
    // user choice associated with prompts
    const { targetDir, overwrite, packageName, uiContext } = result

    // determine template
    const template: string = uiContext?.name || argTemplate

    const root = path.join(CWD, targetDir)
    // Initializes the project path to prevent the folder from not existing
    initProjectPath(root, overwrite)

    const projectName = packageName || getProjectName(targetDir)
    // Generate the base project from user input
    buildTemplate(root, template, projectName)

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
