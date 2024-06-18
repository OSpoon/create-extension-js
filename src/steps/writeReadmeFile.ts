import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { RENAME_FILES } from '../helpers/constants'
import { copy } from '../helpers/copy'
import { getInstallCommand } from '../helpers/getInstallInfo'

export default async function writeReadmeFile(root: string, template: string, packageName: string) {
  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    '../..',
    `templates/${template}`,
  )

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
