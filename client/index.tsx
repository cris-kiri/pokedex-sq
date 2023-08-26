import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import App from './components/App.tsx'
import { router } from './router.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={router} />
  )
})
