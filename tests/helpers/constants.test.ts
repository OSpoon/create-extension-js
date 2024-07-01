import { describe, expect, it } from 'vitest'
import { TEMPLATES } from '../../src/helpers/constants'

describe('helpers', () => {
  it('should return total number of enabled templates: ', () => {
    expect(TEMPLATES.length).toEqual(36)
  })

  it('should return names of all enabled templates: ', () => {
    expect(TEMPLATES).toEqual(
      [
        'init',
        'popup',
        'newtab',
        'devtools',
        'sidebar',
        'content',
        'react-popup',
        'react-popup-tailwind',
        'react-newtab',
        'react-newtab-tailwind',
        'react-devtools',
        'react-devtools-tailwind',
        'react-sidebar',
        'react-sidebar-tailwind',
        'react-content',
        'react-content-tailwind',
        'vue-popup',
        'vue-popup-tailwind',
        'vue-newtab',
        'vue-newtab-tailwind',
        'vue-devtools',
        'vue-devtools-tailwind',
        'vue-sidebar',
        'vue-sidebar-tailwind',
        'vue-content',
        'vue-content-tailwind',
        'preact-popup',
        'preact-popup-tailwind',
        'preact-newtab',
        'preact-newtab-tailwind',
        'preact-devtools',
        'preact-devtools-tailwind',
        'preact-sidebar',
        'preact-sidebar-tailwind',
        'preact-content',
        'preact-content-tailwind',
      ],
    )
  })
})
