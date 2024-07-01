import { TEMPLATES } from './constants'

/**
 * Generates all permutations of a given array of strings
 */
function getPermutations(args: string[]) {
  const results: string[] = []

  function generate(current: string[], remaining: string[]) {
    if (remaining.length === 0) {
      results.push(current.join('-'))
      return
    }

    for (let i = 0; i < remaining.length; i++) {
      const nextCurrent = [...current, remaining[i]]
      const nextRemaining = remaining.filter((_, index) => index !== i)
      generate(nextCurrent, nextRemaining)
    }
  }

  generate([], args)
  return results
}

function arrayify(args: string) {
  if (args.includes(','))
    return args.split(',')
  return args.split('-')
}

export function getTemplateName(args: string) {
  const list = getPermutations(arrayify(args || ''))
  const [framework] = list.filter(arg => TEMPLATES.includes(arg))

  return framework
}
