export default async function writeTemplateFiles() {
  // const root = path.join(cwd, targetDir)

  // if (overwrite === 'yes')
  //   emptyDir(root)
  // else if (!fs.existsSync(root))
  //   fs.mkdirSync(root, { recursive: true })

  // const template: string = variant?.name || framework?.name || argTemplate
  // // const sample: string = sample?.name || argSample
  // log(template)

  // const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  // const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

  // log(`\nScaffolding project in ${root}...`)

  // const templateDir = path.resolve(
  //   fileURLToPath(import.meta.url),
  //   '../..',
  //   `template-${template}`,
  // )

  // const write = (file: string, content?: string) => {
  //   const targetPath = path.join(root, renameFiles[file] ?? file)
  //   if (content)
  //     fs.writeFileSync(targetPath, content)
  //   else
  //     copy(path.join(templateDir, file), targetPath)
  // }

  // const files = fs.readdirSync(templateDir)
  // for (const file of files.filter(f => f !== 'package.json'))
  //   write(file)

  // const pkg = JSON.parse(
  //   fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'),
  // )

  // pkg.name = packageName || getProjectName()

  // write('package.json', `${JSON.stringify(pkg, null, 2)}\n`)

  // const cdProjectName = path.relative(cwd, root)
  // log(`\nDone. Now run:\n`)
  // if (root !== cwd) {
  //   log(
  //     `  cd ${
  //       cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName
  //     }`,
  //   )
  // }
  // switch (pkgManager) {
  //   case 'yarn':
  //     log('  yarn')
  //     log('  yarn dev')
  //     break
  //   default:
  //     log(`  ${pkgManager} install`)
  //     log(`  ${pkgManager} run dev`)
  //     break
  // }
  // log()
}
