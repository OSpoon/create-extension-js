import path from 'node:path'
import fs from 'node:fs'

export default async function writePackageJson(write: Function, templateDir: string, packageName: string | undefined) {
  const pkg = JSON.parse(
    fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'),
  )

  pkg.name = packageName

  write('package.json', `${JSON.stringify(pkg, null, 2)}\n`)
}
