import path from 'node:path'
import fs from 'node:fs'
import { RENAME_FILES } from '../helpers/constants'
import { getInstallCommand } from '../helpers/getInstallInfo'
import { getTemplateDir } from '..'

export default async function writeReadmeFile(root: string, template: string, packageName: string) {
  const templateDir = getTemplateDir(template)

  const write = (file: string, content: string) => {
    const targetPath = path.join(root, RENAME_FILES[file] ?? file)
    if (content)
      fs.writeFileSync(targetPath, content)
  }

  const readmeFile
    = fs.readFileSync(path.join(templateDir, `README.md`), 'utf-8')
  const readmeFileEdited = readmeFile
    .replaceAll('[projectName]', packageName)
    .replaceAll('[projectPackageManager]', getInstallCommand())

  write('README.md', readmeFileEdited)
}
