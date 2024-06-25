import fs from 'node:fs'

export async function writeTemplateFiles(write: Function, templateDir: string) {
  const files = fs.readdirSync(templateDir)
  for (const file of files.filter(f => !['package.json', 'README.md'].includes(f)))
    write(file)
}
