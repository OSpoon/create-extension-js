import process from 'node:process'
import {
  blue,
  green,
  lightGreen,
  yellow,
} from 'kolorist'
import type { Framework } from '../types'

export const CWD = process.cwd()

export const DEFAULT_TARGET_DIR = 'my-extension-project'

export const RENAME_FILES: Record<string, string | undefined> = {
  _gitignore: '.gitignore',
}

export const FRAMEWORKS: Framework[] = [
  {
    name: 'vanilla',
    display: 'Vanilla',
    color: blue,
    variants: [{
      name: 'vanilla',
      display: 'JavaScript',
      color: blue,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'vanilla-tailwind',
      display: 'JavaScript + TailwindCSS',
      color: yellow,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'vanilla-ts',
      display: 'TypeScript',
      color: green,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'vanilla-ts-tailwind',
      display: 'TypeScript + TailwindCSS',
      color: lightGreen,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }],
  },
  {
    name: 'react',
    display: 'React',
    color: yellow,
    variants: [{
      name: 'react',
      display: 'JavaScript',
      color: blue,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'react-tailwind',
      display: 'JavaScript + TailwindCSS',
      color: yellow,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'react-ts',
      display: 'TypeScript',
      color: green,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'react-ts-tailwind',
      display: 'TypeScript + TailwindCSS',
      color: lightGreen,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }],
  },
  {
    name: 'vue',
    display: 'Vue',
    color: green,
    variants: [{
      name: 'vue',
      display: 'JavaScript',
      color: blue,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'vue-tailwind',
      display: 'JavaScript + TailwindCSS',
      color: yellow,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'vue-ts',
      display: 'TypeScript',
      color: green,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'vue-ts-tailwind',
      display: 'TypeScript + TailwindCSS',
      color: lightGreen,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }],
  },
  {
    name: 'preact',
    display: 'Preact',
    color: lightGreen,
    variants: [{
      name: 'preact',
      display: 'JavaScript',
      color: blue,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'preact-tailwind',
      display: 'JavaScript + TailwindCSS',
      color: yellow,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'preact-ts',
      display: 'TypeScript',
      color: green,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }, {
      name: 'preact-ts-tailwind',
      display: 'TypeScript + TailwindCSS',
      color: lightGreen,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
      }],
    }],
  },
]

export const TEMPLATES = FRAMEWORKS.map(
  f => (f.variants && f.variants.map(v => v.name)) || [f.name],
).reduce((a, b) => a.concat(b), [])
