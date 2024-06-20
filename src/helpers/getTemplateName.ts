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

export function getTemplateName(args: string) {
  const categories: Categories = {
    framework: FRAMEWORKS.map(f => f.name),
    uiContext: [],
    helperLibrary: ['tailwind'],
  }

  const [framework] = args.split(',').filter(arg => categories.framework.includes(arg))
  if (!framework)
    return args

  categories.uiContext = uiContexts(framework)

  const [uiContext] = args.split(',').filter(arg => categories.uiContext.includes(`${framework}-${arg}`))
  const helperLibrary = args.split(',').includes('tailwind') && hasTailwind(framework, uiContext)

  let template = `${framework}`
  if (uiContext)
    template += `-${uiContext}`
  if (helperLibrary)
    template += `-tailwind`

  return template
}
