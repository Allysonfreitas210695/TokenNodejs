import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalCSS } from './style/GlobalStyled'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalCSS/>
    <App />
  </React.StrictMode>
)
