import path from 'node:path'
import fs from 'node:fs'
import { getInstallCommand } from '../helpers/getInstallInfo'

export default async function writeReadmeFile(write: Function, templateDir: string, packageName: string | undefined) {
  const readmeFile
    = fs.readFileSync(path.join(templateDir, `README.md`), 'utf-8')
  const readmeFileEdited = readmeFile
    .replaceAll('[projectName]', packageName || '[projectName]')
    .replaceAll('[projectPackageManager]', getInstallCommand())

  write('README.md', readmeFileEdited)
}
