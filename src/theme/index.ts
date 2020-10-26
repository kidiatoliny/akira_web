const defaultTheme = {
  fontSizes: {
    title: '18px'
  },
  fontWeights: {
    normal: 400,
    subTitle: 500,
    link: 600,
    bold: 700,
    title: 800
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
    body: '#FFFFFF',
    hoverColor: '#56CCF2',
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
    background: '#d5d3d3',
    body: '#44475A',
    primary: '#282A36',
    secondary: '#FFC60D',
    hoverColor: '#BD93F9',
    cyan: '#56CCF2',
    green: '#50FA7B',
    orange: '#FFB86C',
    pink: '#FF5555',
    purple: '#BD93F9',
    red: '#FF5555',
    yellow: '#F1FA8C',
    inverse: '#fff'
  }
}

export const darkTheme = { ...defaultTheme, ...dark }
export const lightTheme = { ...defaultTheme, ...light }
