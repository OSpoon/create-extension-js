import path from 'node:path'

export function getProjectName(targetDir: string) {
  return targetDir === '.' ? path.basename(path.resolve()) : targetDir
}
