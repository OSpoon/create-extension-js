import { FRAMEWORKS } from './constants'

interface Categories {
  framework: string[]
  uiContext: string[]
}

export function uiContexts(framework: string) {
  const fw = FRAMEWORKS.find(f => f.name === framework)
  return fw ? fw.uiContexts.map(ui => ui.name) : []
}

export function splitArgs(args: string) {
  if (args.includes(','))
    return args.split(',')
  return args.split('-')
}

export function getTemplateName(args: string) {
  const categories: Categories = {
    framework: FRAMEWORKS.map(f => f.name),
    uiContext: [],
  }

  // Split template name
  const list = splitArgs(args || '')

  const [framework] = list.filter(arg => categories.framework.includes(arg))
  if (!framework)
    return undefined

  categories.uiContext = uiContexts(framework)

  const [uiContext] = list.filter(arg => categories.uiContext.includes(`${framework}-${arg}`))
  const hsaTailwind = list.includes('tailwind')

  // Build template name
  let template
  if (uiContext)
    template = `${framework}-${uiContext}`
  if (template && hsaTailwind)
    template += `-tailwind`
  return template
}
