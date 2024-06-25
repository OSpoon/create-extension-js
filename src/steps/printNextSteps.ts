import path from 'node:path'
import { log } from 'node:console'
import { CWD } from '../helpers/constants'
import { getInstallCommand } from '../helpers/getInstallInfo'

export default function printNextSteps(root: string) {
  const cdProjectName = path.relative(CWD, root)
  log(`\nDone. Now run:\n`)
  if (root !== CWD) {
    log(
      `  cd ${
        cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName
      }`,
    )
  }
  const pkgManager = getInstallCommand()
  switch (pkgManager) {
    case 'yarn':
      log('  yarn')
      log('  yarn dev')
      break
    default:
      log(`  ${pkgManager} install`)
      log(`  ${pkgManager} run dev`)
      break
  }
  log()
}
