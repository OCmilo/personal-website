import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import theme from '../config/theme'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.fonts.text};
    background-color: ${theme.colors.black};
    color: ${theme.colors.white}
  }

  ::selection {
    background-color: ${theme.colors.primaryColor};
  }
`

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export { Theme as default }
