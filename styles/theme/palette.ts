export interface ColorPalette {
  main: string
  mainDarken: string
  contrast: string
}

export interface Palette {
  [K: string]: ColorPalette
}

export const palette: Palette = {
  primary: {
    main: '#8e24aa',
    mainDarken: '#6d1785',
    contrast: '#ffffff',
  },
}
