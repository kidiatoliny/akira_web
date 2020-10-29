const defaultTheme = {
  fontSizes: {
    title: '4.2rem'
  },
  fontWeights: {
    normal: 400,
    subTitle: 500,
    link: 600,
    bold: 700,
    extraBold: 800
  },
  lineHeights: {
    body: 1.5,
    title: 1.3
  }
  // ...
}
const dark = {
  type: 'dark',
  colors: {
    background: '#44475A',
    primary: '#FFC60D',
    secondary: '#282A36',
    accent: '#282A36',
    body: '#FFFFFF',
    hoverColor: '#737373',
    cyan: '#56CCF2',
    green: '#50FA7B',
    orange: '#FFB86C',
    pink: '#FF5555',
    purple: '#BD93F9',
    red: '#FF5555',
    yellow: '#F1FA8C',
    inverse: '#282A36'
  }
}
const light = {
  type: 'light',
  colors: {
    background: '#fff',
    body: '#330000',
    primary: '#d34836',
    secondary: '#44475A',
    hoverColor: '#737373',
    cyan: '#56CCF2',
    green: '#50FA7B',
    orange: '#FFB86C',
    pink: '#FF5555',
    purple: '#BD93F9',
    red: '#FF5555',
    yellow: '#F1FA8C',
    inverse: '#fff',
    accent: '#ececec'
  }
}

export const darkTheme = { ...defaultTheme, ...dark }
export const lightTheme = { ...defaultTheme, ...light }
