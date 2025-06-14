import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
