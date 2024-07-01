import { describe, expect, it } from 'vitest'
import { TEMPLATES } from '../../src/helpers/constants'

describe('helpers', () => {
  it('should return total number of enabled templates: ', () => {
    expect(TEMPLATES.length).toEqual(10)
  })

  it('should return names of all enabled templates: ', () => {
    expect(TEMPLATES).toEqual(
      [
        'init',
        'newtab',
        'content',
        'react-newtab',
        'react-content',
        'react-content-tailwind',
        'vue-newtab',
        'vue-content-tailwind',
        'preact-newtab',
        'preact-content-tailwind',
      ],
    )
  })
})
