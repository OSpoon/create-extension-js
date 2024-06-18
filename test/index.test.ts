import { join } from 'node:path'
import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { blue, yellow } from 'kolorist'
import { isValidSampleName } from '../src/helpers/isValidSampleName'
import type { Variant } from '../src/types'
import { getProjectName } from '../src/helpers/getProjectName'
import { isEmpty } from '../src/helpers/isEmpty'
import { CWD } from '../src/helpers/constants'

describe('helpers', () => {
  const variant: Variant = {
    name: 'vue-ts',
    display: 'Vue 3 + TypeScript',
    color: yellow,
    samples: [{
      name: 'newtab',
      display: 'New Tab',
      color: yellow,
    }, {
      name: 'content',
      display: 'Content',
      color: blue,
    }],
  }
  it('enter an existing sample name:', () => {
    const result = isValidSampleName(variant, 'newtab')
    expect(result).toMatchInlineSnapshot(`true`)
  })

  it('enter a non-existent sample name:', () => {
    const result = isValidSampleName(variant, 'side_panel')
    expect(result).toMatchInlineSnapshot(`false`)
  })

  it('the sample name is not entered:', () => {
    const result = isValidSampleName(variant, undefined)
    expect(result).toMatchInlineSnapshot(`false`)
  })

  it('the current directory is the project name:', () => {
    const result = getProjectName('.')
    expect(result).toMatchInlineSnapshot(`"create-extension.js"`)
  })

  it('enter project name:', () => {
    const result = getProjectName('vue-ts-ext')
    expect(result).toMatchInlineSnapshot(`"vue-ts-ext"`)
  })

  it('enter a relative path name:', () => {
    const result = getProjectName('./vue-ts-ext')
    expect(result).toMatchInlineSnapshot(`"./vue-ts-ext"`)
  })

  it('whether the folder exists', () => {
    const result = existsSync(join(CWD, 'my-extension-project'))
    expect(result).toMatchInlineSnapshot(`true`)
  })

  it('the folder is empty:', () => {
    const result = isEmpty(join(CWD, 'my-extension-project'))
    expect(result).toMatchInlineSnapshot(`false`)
  })
})
