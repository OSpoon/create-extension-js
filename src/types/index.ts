type ColorFunc = (str: string | number) => string

export interface Framework {
  name: string
  display: string
  color: ColorFunc
  enable: boolean
  variants: Variant []
}

export interface Variant {
  name: string
  display: string
  color: ColorFunc
  enable: boolean
  samples: Sample[]
}

export interface Sample {
  name: string
  display: string
  color: ColorFunc
  enable: boolean
}
