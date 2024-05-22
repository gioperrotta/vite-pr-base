import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes'
import { GlobalStyle } from './styles/global'

import { Router } from './routes/Routes'
import { AuthProvider } from './context/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  )
}
