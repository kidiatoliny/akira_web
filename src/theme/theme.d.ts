import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string
    colors: {
      background: string
      body: string
      primary: string
      secondary: string
      hoverColor: string
      cyan: string
      green: string
      orange: string
      pink: string
      purple: string
      red: string
      yellow: string
      accent: string
    }
    fontSizes: {
      title: string
    }
    fontWeights: {
      normal: number
      subTitle: number
      link: number
      bold: number
      extraBold: number
    }
    lineHeights: {
      body: number
      title: number
    }
  }
}
