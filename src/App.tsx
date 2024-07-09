import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Router'

import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      
        <Router />     

      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

