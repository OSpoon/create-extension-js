import { join } from 'node:path'
import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { getProjectName } from '../src/helpers/getProjectName'
import { CWD, FRAMEWORKS } from '../src/helpers/constants'
import { getTemplateName, hasTailwind, uiContexts } from '../src/helpers/getTemplateName'

describe('helpers', () => {
  it('the current directory is the project name:', () => {
    const result = getProjectName('.')
    expect(result).toEqual('create-extension-js')
  })

  it('enter project name:', () => {
    const result = getProjectName('vue-ts-ext')
    expect(result).toEqual('vue-ts-ext')
  })

  it('enter a relative path name:', () => {
    const result = getProjectName('./vue-ts-ext')
    expect(result).toEqual('./vue-ts-ext')
  })

  it('frameworks', () => {
    const result = FRAMEWORKS.map(f => f.name)
    expect(result).toEqual(
      [
        'init',
        'react',
        'vue',
        'preact',
      ],
    )
  })

  it('uiContexts', () => {
    const result = uiContexts('react')
    expect(result).toEqual(
      [
        'react-popup',
        'react-newtab',
        'react-devtools',
        'react-sidebar',
        'react-content',
      ],
    )
  })

  it('hasTailwind', () => {
    const result = hasTailwind('react', 'content')
    expect(result).toEqual(true)
  })

  it('getTemplateName 1', () => {
    const result = getTemplateName('vue-content-tailwind')
    expect(result).toEqual('vue-content-tailwind')
  })

  it('getTemplateName 2', () => {
    const result = getTemplateName('vue,content,tailwind')
    expect(result).toEqual('vue-content-tailwind')
  })

  it('getTemplateName 3', () => {
    const result = getTemplateName('tailwind,content,vue')
    expect(result).toEqual('vue-content-tailwind')
  })
})
