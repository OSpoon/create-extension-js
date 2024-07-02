import { log } from 'node:console'
import process from 'node:process'
import shell from 'shelljs'

const PROJECT_NAME = 'my-extension-project'

export function createNewExtension(template?: string) {
  try {
    const commands = [
      `npx rimraf ${PROJECT_NAME}`,
      `node bin/cli.mjs ${PROJECT_NAME} --template ${template || 'newtab'}`,
      `cd ${PROJECT_NAME} && npm install && npm run build`,
    ]
    shell.exec(commands.join(' && '), {
      cwd: process.cwd(),
      fatal: true,
    })
    log('Extension created successfully.')
  }
  catch (error) {
    console.error('Error executing command:', error)
    process.exit(1)
  }
}

export function removeNewExtension() {
  try {
    const commands = [
      `npx rimraf ${PROJECT_NAME}`,
    ]
    shell.exec(commands.join(' && '), {
      cwd: process.cwd(),
      fatal: true,
    })
    log('Extension removed successfully.')
  }
  catch (error) {
    console.error('Error executing command:', error)
    process.exit(1)
  }
}
