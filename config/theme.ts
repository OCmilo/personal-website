const colors = {
  gainsboro: '#d8dbe2',
  lightBlue: '#a9bcd0',
  cadetBlue: '#58a4b0',
  xiketic: '#050517',
  pastelPink: '#daa49a',
}

const theme = {
  colors: {
    primaryColor: colors.cadetBlue,
    secondaryColor: colors.lightBlue,
    tertiaryColor: colors.pastelPink,
    white: colors.gainsboro,
    black: colors.xiketic,
  },
  breakpoints: {},
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fonts: {
    text: "'B612', sans-serif",
  },
}

export { theme as default }
