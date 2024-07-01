import { describe, expect, it } from 'vitest'
import { getTemplateName } from '../../src/helpers/getTemplateName'

describe('helpers', () => {
  it('should return valid name when the init name is provided: ', () => {
    const result = getTemplateName('init')
    expect(result).toEqual('init')
  })

  it('should return valid name when the newtab name is provided: ', () => {
    const result = getTemplateName('newtab')
    expect(result).toEqual('newtab')
  })

  it('should return valid name when the react-content-tailwind name is provided: ', () => {
    const result = getTemplateName('react-content-tailwind')
    expect(result).toEqual('react-content-tailwind')
  })

  it('should return valid name when the tailwind,content,react name is provided: ', () => {
    const result = getTemplateName('tailwind,content,react')
    expect(result).toEqual('react-content-tailwind')
  })

  it('should return undefined when the react-typescript name is provided: ', () => {
    const result = getTemplateName('react-typescript')
    expect(result).toEqual(undefined)
  })

  it('should return undefined when the react,typescript,tailwind name is provided: ', () => {
    const result = getTemplateName('react,typescript,tailwind')
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
