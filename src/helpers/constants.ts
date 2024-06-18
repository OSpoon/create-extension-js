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
    enable: true,
    variants: [{
      name: 'vanilla',
      display: 'JavaScript',
      color: blue,
      enable: true,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: true,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'vanilla-tailwind',
      display: 'JavaScript + TailwindCSS',
      color: yellow,
      enable: true,
      samples: [{
        name: 'newtab-tailwind',
        display: 'NewTab',
        enable: true,
        color: blue,
      }, {
        name: 'content-tailwind',
        display: 'Content',
        enable: false,
        color: yellow,
      }],
    }, {
      name: 'vanilla-ts',
      display: 'TypeScript',
      color: green,
      enable: false,
      samples: [{
        name: 'newtab-ts',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content-ts',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'vanilla-ts-tailwind',
      display: 'TypeScript + TailwindCSS',
      color: lightGreen,
      enable: false,
      samples: [{
        name: 'newtab-ts-tailwind',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content-ts-tailwind',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }],
  },
  {
    name: 'react',
    display: 'React',
    color: yellow,
    enable: false,
    variants: [{
      name: 'react',
      display: 'JavaScript',
      color: blue,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'react-tailwind',
      display: 'JavaScript + TailwindCSS',
      color: yellow,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'react-ts',
      display: 'TypeScript',
      color: green,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'react-ts-tailwind',
      display: 'TypeScript + TailwindCSS',
      color: lightGreen,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }],
  },
  {
    name: 'vue',
    display: 'Vue',
    color: green,
    enable: false,
    variants: [{
      name: 'vue',
      display: 'JavaScript',
      color: blue,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'vue-tailwind',
      display: 'JavaScript + TailwindCSS',
      color: yellow,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'vue-ts',
      display: 'TypeScript',
      color: green,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'vue-ts-tailwind',
      display: 'TypeScript + TailwindCSS',
      color: lightGreen,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }],
  },
  {
    name: 'preact',
    display: 'Preact',
    color: lightGreen,
    enable: false,
    variants: [{
      name: 'preact',
      display: 'JavaScript',
      color: blue,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'preact-tailwind',
      display: 'JavaScript + TailwindCSS',
      color: yellow,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'preact-ts',
      display: 'TypeScript',
      color: green,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }, {
      name: 'preact-ts-tailwind',
      display: 'TypeScript + TailwindCSS',
      color: lightGreen,
      enable: false,
      samples: [{
        name: 'newtab',
        display: 'NewTab',
        color: blue,
        enable: false,
      }, {
        name: 'content',
        display: 'Content',
        color: yellow,
        enable: false,
      }],
    }],
  },
]

export const TEMPLATES = FRAMEWORKS.filter(v => v.enable).map(
  f => (f.variants && f.variants.filter(v => v.enable).map(v => v.name)) || [f.name],
).reduce((a, b) => a.concat(b), [])
