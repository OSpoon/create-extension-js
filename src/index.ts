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
import writePackageJson from './steps/writePackageJson'
import writeReadmeFile from './steps/writeReadmeFile'
import { getTemplateName } from './helpers/getTemplateName'

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
    const { targetDir, overwrite, packageName, uiContext, tailwind } = result

    // determine template
    const template: string = tailwind ? `${uiContext?.name}-tailwind` : uiContext?.name || argTemplate

    const root = path.join(CWD, targetDir)
    // Initializes the project path to prevent the folder from not existing
    initProjectPath(root, overwrite)

    const projectName = packageName || getProjectName(targetDir)
    // Generate the base project from user input
    writeTemplateFiles(root, template)
    writePackageJson(root, template, projectName)
    writeReadmeFile(root, template, projectName)

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
