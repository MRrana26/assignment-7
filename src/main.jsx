import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Roots from './roots/Roots'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/shared/Navbar'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Footer from './components/shared/Footer'
import TimeLine from './components/timeLine/TimeLine'
import FriendDetail from './pages/friendDetails/FriendDetail'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots/>,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'timeline',
        element: <TimeLine />
      },
      {
        path: 'friend/:id',
        element: <FriendDetail />
      }
      
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
