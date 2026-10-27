import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/app/Home/Home'
import { Explore } from './pages/app/Explore'
import { Login } from './pages/auth/login'
import { DefaultLayout } from './pages/_layouts/default'
import { Signup } from './pages/auth/signup'
import { Journey } from './pages/app/Journey'
import { PlaceDetails } from './pages/app/Place_Details'
import { ProtectedRoute } from './components/protected_route'

export const routes = createBrowserRouter([
    { path: '/sign-in', element: <Login /> },
    { path: '/sign-up', element: <Signup /> },
  
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/explore', element: <Explore /> },
        { path: '/places/:placeId', element: <PlaceDetails /> },
  
        {
          element: <ProtectedRoute />,
          children: [
            { path: '/journey', element: <Journey /> },
          ],
        },
      ],
    },
  ])
