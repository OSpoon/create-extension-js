import type { Variant } from '../types'

export function isValidSampleName(variant: Variant, sampleName: string | undefined) {
  return sampleName ? variant.samples.map(s => s.name).includes(sampleName) : false
}
