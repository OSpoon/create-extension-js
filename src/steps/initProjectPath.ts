import fs from 'node:fs'
import { log } from 'node:console'
import { emptyDir } from '../helpers/emptyDir'

export default function initProjectPath(root: string, overwrite: string) {
  if (overwrite === 'yes')
    emptyDir(root)
  else if (!fs.existsSync(root))
    fs.mkdirSync(root, { recursive: true })
  log(`\nScaffolding project in ${root}...`)
}
