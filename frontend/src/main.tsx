import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App.tsx'
import './index.css'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'
import { AuthContextProvider } from './contexts/AuthContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      
    </ThemeProvider>
  </StrictMode>,
)
