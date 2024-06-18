import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { RENAME_FILES } from '../helpers/constants'
import { copy } from '../helpers/copy'

export default async function writeTemplateFiles(root: string, template: string, packageName: string | undefined) {
  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    '../..',
    `templates/${template}`,
  )

  const write = (file: string, content?: string) => {
    const targetPath = path.join(root, RENAME_FILES[file] ?? file)
    if (content)
      fs.writeFileSync(targetPath, content)
    else
      copy(path.join(templateDir, file), targetPath)
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter(f => f !== 'package.json'))
    write(file)

  const pkg = JSON.parse(
    fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'),
  )

  pkg.name = packageName

  write('package.json', `${JSON.stringify(pkg, null, 2)}\n`)
}
