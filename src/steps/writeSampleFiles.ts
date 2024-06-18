import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { copy } from '../helpers/copy'

export default async function writeSampleFiles(root: string, sample: string) {
  const sampleDir = path.resolve(
    fileURLToPath(import.meta.url),
    '../..',
        `samples/${sample}`,
  )

  const write = (file: string) => {
    const targetPath = path.join(root, file)
    copy(path.join(sampleDir, file), targetPath)
  }

  const files = fs.readdirSync(sampleDir)
  for (const file of files)
    write(file)
}
