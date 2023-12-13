import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/:url" Component={App} />
          <Route path="/*" element="Привет! Это short.fb24m.ru" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)