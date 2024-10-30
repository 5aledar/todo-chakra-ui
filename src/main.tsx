import { StrictMode } from 'react'
import { Provider } from './components/ui/provider.tsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.tsx'
import Home from './pages/Home.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
)
