import path from 'node:path'
import fs from 'node:fs'
import { getTemplateDir } from '..'
import { RENAME_FILES } from '../helpers/constants'
import { copy } from '../helpers/copy'
import writePackageJson from './writePackageJson'
import writeReadmeFile from './writeReadmeFile'
import { writeTemplateFiles } from './writeTemplateFiles'

export default async function buildTemplate(root: string, template: string, packageName: string | undefined) {
  const templateDir = getTemplateDir(template)

  const write = (file: string, content: string) => {
    const targetPath = path.join(root, RENAME_FILES[file] ?? file)
    if (content)
      fs.writeFileSync(targetPath, content)
    else
      copy(path.join(templateDir, file), targetPath)
  }

  writeTemplateFiles(write, templateDir)
  writePackageJson(write, templateDir, packageName)
  writeReadmeFile(write, templateDir, packageName)
}
