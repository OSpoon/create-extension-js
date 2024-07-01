import { describe, expect, it } from 'vitest'
import { getTemplateName } from '../../src/helpers/getTemplateName'

describe('helpers', () => {
  it('should return valid name when the init name is provided: ', () => {
    const result = getTemplateName('init')
    expect(result).toEqual('init')
  })

  it('should return valid name when the popup name is provided: ', () => {
    const result = getTemplateName('popup')
    expect(result).toEqual('popup')
  })

  it('should return valid name when the vue-devtools-tailwind name is provided: ', () => {
    const result = getTemplateName('vue-devtools-tailwind')
    expect(result).toEqual('vue-devtools-tailwind')
  })

  it('should return valid name when the tailwind,devtools,vue name is provided: ', () => {
    const result = getTemplateName('tailwind,devtools,vue')
    expect(result).toEqual('vue-devtools-tailwind')
  })

  it('should return undefined when the vue-typescript name is provided: ', () => {
    const result = getTemplateName('vue-typescript')
    expect(result).toEqual(undefined)
  })

  it('should return undefined when the vue,typescript,tailwind name is provided: ', () => {
    const result = getTemplateName('vue,typescript,tailwind')
    expect(result).toEqual(undefined)
  })

  it('should return undefined when the "" name is provided: ', () => {
    const result = getTemplateName('')
    expect(result).toEqual(undefined)
  })

  it('should return undefined when the undefined name is provided: ', () => {
    const result = getTemplateName(undefined as unknown as string)
    expect(result).toEqual(undefined)
  })
})
