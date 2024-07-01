import process from 'node:process'
import {
  blue,
  cyan,
  gray,
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
    name: 'init',
    display: 'None (JS)',
    color: blue,
    enable: true,
    uiContexts: [{
      name: 'init',
      display: 'None (Init)',
      color: blue,
      enable: true,
    }, {
      name: 'popup',
      display: 'Popup',
      color: yellow,
      enable: true,
    }, {
      name: 'newtab',
      display: 'Newtab',
      color: green,
      enable: true,
    }, {
      name: 'devtools',
      display: 'Devtools',
      color: lightGreen,
      enable: true,
    }, {
      name: 'sidebar',
      display: 'Sidebar',
      color: cyan,
      enable: true,
    }, {
      name: 'content',
      display: 'Content Scripts',
      color: gray,
      enable: true,
    }],
  },
  {
    name: 'react',
    display: 'React',
    color: yellow,
    enable: true,
    uiContexts: [{
      name: 'react-popup',
      display: 'Popup',
      color: blue,
      enable: true,
    }, {
      name: 'react-popup-tailwind',
      display: 'Popup + Tailwind',
      color: blue,
      enable: true,
    }, {
      name: 'react-newtab',
      display: 'Newtab',
      color: yellow,
      enable: true,
    }, {
      name: 'react-newtab-tailwind',
      display: 'Newtab + Tailwind',
      color: yellow,
      enable: true,
    }, {
      name: 'react-devtools',
      display: 'Devtools',
      color: green,
      enable: true,
    }, {
      name: 'react-devtools-tailwind',
      display: 'Devtools + Tailwind',
      color: green,
      enable: true,
    }, {
      name: 'react-sidebar',
      display: 'Sidebar',
      color: lightGreen,
      enable: true,
    }, {
      name: 'react-sidebar-tailwind',
      display: 'Sidebar + Tailwind',
      color: lightGreen,
      enable: true,
    }, {
      name: 'react-content',
      display: 'Content Scripts',
      color: cyan,
      enable: true,
    }, {
      name: 'react-content-tailwind',
      display: 'Content Scripts + Tailwind',
      color: cyan,
      enable: true,
    }],
  },
  {
    name: 'vue',
    display: 'Vue',
    color: green,
    enable: true,
    uiContexts: [{
      name: 'vue-popup',
      display: 'Popup',
      color: blue,
      enable: true,
    }, {
      name: 'vue-popup-tailwind',
      display: 'Popup + Tailwind',
      color: blue,
      enable: true,
    }, {
      name: 'vue-newtab',
      display: 'Newtab',
      color: yellow,
      enable: true,
    }, {
      name: 'vue-newtab-tailwind',
      display: 'Newtab + Tailwind',
      color: yellow,
      enable: true,
    }, {
      name: 'vue-devtools',
      display: 'Devtools',
      color: green,
      enable: true,
    }, {
      name: 'vue-devtools-tailwind',
      display: 'Devtools + Tailwind',
      color: green,
      enable: true,
    }, {
      name: 'vue-sidebar',
      display: 'Sidebar',
      color: lightGreen,
      enable: true,
    }, {
      name: 'vue-sidebar-tailwind',
      display: 'Sidebar + Tailwind',
      color: lightGreen,
      enable: true,
    }, {
      name: 'vue-content',
      display: 'Content Scripts',
      color: cyan,
      enable: true,
    }, {
      name: 'vue-content-tailwind',
      display: 'Content Scripts + Tailwind',
      color: cyan,
      enable: true,
    }],
  },
  {
    name: 'preact',
    display: 'Preact',
    color: lightGreen,
    enable: true,
    uiContexts: [{
      name: 'preact-popup',
      display: 'Popup',
      color: blue,
      enable: true,
    }, {
      name: 'preact-popup-tailwind',
      display: 'Popup + Tailwind',
      color: blue,
      enable: true,
    }, {
      name: 'preact-newtab',
      display: 'Newtab',
      color: yellow,
      enable: true,
    }, {
      name: 'preact-newtab-tailwind',
      display: 'Newtab + Tailwind',
      color: yellow,
      enable: true,
    }, {
      name: 'preact-devtools',
      display: 'Devtools',
      color: green,
      enable: true,
    }, {
      name: 'preact-devtools-tailwind',
      display: 'Devtools + Tailwind',
      color: green,
      enable: true,
    }, {
      name: 'preact-sidebar',
      display: 'Sidebar',
      color: lightGreen,
      enable: true,
    }, {
      name: 'preact-sidebar-tailwind',
      display: 'Sidebar + Tailwind',
      color: lightGreen,
      enable: true,
    }, {
      name: 'preact-content',
      display: 'Content Scripts',
      color: cyan,
      enable: true,
    }, {
      name: 'preact-content-tailwind',
      display: 'Content Scripts + Tailwind',
      color: cyan,
      enable: true,
    }],
  },
]

export const TEMPLATES = FRAMEWORKS.filter(v => v.enable).flatMap((framework) => {
  return framework.uiContexts.filter(v => v.enable).flatMap((uiContext) => {
    return uiContext.name
  })
})
