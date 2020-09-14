import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import theme from '../config/theme'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;

    @media only screen and (max-width: 50em) {
      font-size: 50%
    }

    @media only screen and (max-width: 31.25em) {
      font-size: 37.5%
    }
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
    <Normalize />
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export { Theme as default }
