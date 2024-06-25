import path from 'node:path'
import fs from 'node:fs'
import { RENAME_FILES } from '../helpers/constants'
import { getTemplateDir } from '..'

export default async function writePackageJson(root: string, template: string, packageName: string | undefined) {
  const templateDir = getTemplateDir(template)

  const write = (file: string, content: string) => {
    const targetPath = path.join(root, RENAME_FILES[file] ?? file)
    if (content)
      fs.writeFileSync(targetPath, content)
  }

  const pkg = JSON.parse(
    fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'),
  )

  pkg.name = packageName

  write('package.json', `${JSON.stringify(pkg, null, 2)}\n`)
}
