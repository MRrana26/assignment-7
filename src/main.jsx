import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Roots from './roots/Roots'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/shared/Navbar'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Footer from './components/shared/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots/>,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      
    ],
    errorElement: <div>
      <Navbar />
      <PageNotFound />
      <Footer />
    </div>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
