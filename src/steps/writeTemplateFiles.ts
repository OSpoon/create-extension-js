import path from 'node:path'
import fs from 'node:fs'
import { CWD, RENAME_FILES } from '../helpers/constants'
import { copy } from '../helpers/copy'

export default async function writeTemplateFiles(root: string, template: string) {
  const templateDir = path.resolve(CWD, `templates/${template}`)

  const write = (file: string) => {
    const targetPath = path.join(root, RENAME_FILES[file] ?? file)
    copy(path.join(templateDir, file), targetPath)
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter(f => !['package.json', 'README.md'].includes(f)))
    write(file)
}
