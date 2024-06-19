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
      tailwind: false,
      color: blue,
      enable: true,
    }, {
      name: 'popup',
      display: 'Popup',
      tailwind: false,
      color: yellow,
      enable: true,
    }, {
      name: 'newtab',
      display: 'Newtab',
      tailwind: false,
      color: green,
      enable: true,
    }, {
      name: 'devtools',
      display: 'Devtools',
      tailwind: false,
      color: lightGreen,
      enable: true,
    }, {
      name: 'sidebar',
      display: 'Sidebar',
      tailwind: false,
      color: cyan,
      enable: true,
    }, {
      name: 'content',
      display: 'Content Scripts',
      tailwind: false,
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
      tailwind: true,
      color: blue,
      enable: true,
    }, {
      name: 'react-newtab',
      display: 'Newtab',
      tailwind: true,
      color: yellow,
      enable: true,
    }, {
      name: 'react-devtools',
      display: 'Devtools',
      tailwind: true,
      color: green,
      enable: true,
    }, {
      name: 'react-sidebar',
      display: 'Sidebar',
      tailwind: true,
      color: lightGreen,
      enable: true,
    }, {
      name: 'react-content',
      display: 'Content Scripts',
      tailwind: true,
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
      tailwind: true,
      color: blue,
      enable: true,
    }, {
      name: 'vue-newtab',
      display: 'Newtab',
      tailwind: true,
      color: yellow,
      enable: true,
    }, {
      name: 'vue-devtools',
      display: 'Devtools',
      tailwind: true,
      color: green,
      enable: true,
    }, {
      name: 'vue-sidebar',
      display: 'Sidebar',
      tailwind: true,
      color: lightGreen,
      enable: true,
    }, {
      name: 'vue-content',
      display: 'Content Scripts',
      tailwind: true,
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
      tailwind: true,
      color: blue,
      enable: true,
    }, {
      name: 'preact-newtab',
      display: 'Newtab',
      tailwind: true,
      color: yellow,
      enable: true,
    }, {
      name: 'preact-devtools',
      display: 'Devtools',
      tailwind: true,
      color: green,
      enable: true,
    }, {
      name: 'preact-sidebar',
      display: 'Sidebar',
      tailwind: true,
      color: lightGreen,
      enable: true,
    }, {
      name: 'preact-content',
      display: 'Content Scripts',
      tailwind: true,
      color: cyan,
      enable: true,
    }],
  },
]

export const TEMPLATES = FRAMEWORKS.filter(v => v.enable).map(
  f => (f.uiContexts && f.uiContexts.filter(v => v.enable).map(v => v.name)) || [f.name],
).reduce((a, b) => a.concat(b), [])
