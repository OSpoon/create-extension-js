import {
  blue,
  cyan,
  green,
  lightBlue,
  lightGreen,
  lightRed,
  magenta,
  red,
  reset,
  yellow,
} from 'kolorist'
import type { Framework } from './interfaces'

export const FRAMEWORKS: Framework[] = [
  {
    name: 'vanilla',
    display: 'Vanilla',
    color: yellow,
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
      }, {
        name: 'side_panel',
        display: 'SidePanel',
        color: green,
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
      }, {
        name: 'side_panel',
        display: 'SidePanel',
        color: green,
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
      }, {
        name: 'side_panel',
        display: 'SidePanel',
        color: green,
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
      }, {
        name: 'side_panel',
        display: 'SidePanel',
        color: green,
      }],
    }],
  },
]
