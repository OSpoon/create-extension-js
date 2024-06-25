import { FRAMEWORKS } from './constants'

interface Categories {
  framework: string[]
  uiContext: string[]
  helperLibrary: string[]
}

export function uiContexts(framework: string) {
  const fw = FRAMEWORKS.find(f => f.name === framework)
  return fw ? fw.uiContexts.map(ui => ui.name) : []
}

export function hasTailwind(framework: string, uiContext: string) {
  const fw = FRAMEWORKS.find(f => f.name === framework)
  if (!fw)
    return false
  const ui = fw.uiContexts.find(ui => ui.name === `${framework}-${uiContext}`)
  return ui ? ui.tailwind : false
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
    helperLibrary: ['tailwind'],
  }

  // Split template name
  const list = splitArgs(args || '')

  const [framework] = list.filter(arg => categories.framework.includes(arg))
  if (!framework)
    return undefined

  categories.uiContext = uiContexts(framework)

  const [uiContext] = list.filter(arg => categories.uiContext.includes(`${framework}-${arg}`))
  const helperLibrary = list.includes('tailwind') && hasTailwind(framework, uiContext)

  // Build template name
  let template
  if (uiContext)
    template = `${framework}-${uiContext}`
  if (helperLibrary)
    template += `-tailwind`

  return template
}
