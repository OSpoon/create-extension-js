import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { existsSync } from 'node:fs'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import type { Browser } from 'puppeteer'
import puppeteer from 'puppeteer'

// const EXTENSION_ID = 'hkklidinfhnfidkjiknmmbmcloigimco'
const EXTENSION_PATH = path.resolve(fileURLToPath(import.meta.url), '../../..', 'my-extension-project/dist/chrome')

let browser: Browser | undefined

describe('extension', () => {
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        `--disable-extensions-except=${EXTENSION_PATH}`,
        `--load-extension=${EXTENSION_PATH}`,
      ],
    })
  })

  afterEach(async () => {
    await browser?.close()
    browser = undefined
  })

  it.skipIf(!existsSync(EXTENSION_PATH))('should open new tab successful: ', async () => {
    const page = await browser?.newPage()
    await page?.goto('chrome://newtab')
    await page?.waitForSelector('h1')
    const h1Content = await page?.$eval('h1', el => el.textContent)

    expect(h1Content).toMatch(/Welcome to your New Extension./)
  })
})
