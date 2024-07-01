import { basename, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { DEFAULT_TARGET_DIR } from '../../src/helpers/constants'
import { getProjectName } from '../../src/helpers/getProjectName'

describe('helpers', () => {
  it('should return valid name when the DEFAULT_TARGET_DIR is provided: ', () => {
    const result = getProjectName(DEFAULT_TARGET_DIR)
    expect(result).toEqual(DEFAULT_TARGET_DIR)
  })

  it('should return valid name when the . is provided: ', () => {
    const result = getProjectName('.')
    expect(result).toEqual(basename(resolve()))
    expect(result).toMatchInlineSnapshot(`"create-extension-js"`)
  })
})
