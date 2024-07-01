type ColorFunc = (str: string | number) => string

export interface Framework {
  name: string
  display: string
  color: ColorFunc
  enable: boolean
  uiContexts: UIContext []
}

export interface UIContext {
  name: string
  display: string
  color: ColorFunc
  enable: boolean
}
