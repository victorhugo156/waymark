import { createBrowserRouter } from 'react-router-dom'
import { MapTrifoldIcon, UsersThreeIcon } from '@phosphor-icons/react'
import { Home } from './pages/app/Home/Home'
import { Explore } from './pages/app/Explore'
import { Login } from './pages/auth/login'
import { DefaultLayout } from './pages/_layouts/default'
import { Signup } from './pages/auth/signup'
import { Journey } from './pages/app/Journey'
import { PlaceDetails } from './pages/app/Place_Details'
import { ComingSoon } from './pages/app/ComingSoon'
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
          path: '/map',
          element: (
            <ComingSoon
              icon={MapTrifoldIcon}
              featureLabel="Map"
              title="A new way to explore Sydney is coming."
              description="We're working on an interactive map to help you discover places and understand available accessibility information before you visit."
            />
          ),
        },
        {
          path: '/community',
          element: (
            <ComingSoon
              icon={UsersThreeIcon}
              featureLabel="Community"
              title="A more connected Waymark is coming."
              description="We're building a space where people can share accessibility experiences, contribute useful information, and help others plan with greater confidence."
            />
          ),
        },
  
        {
          element: <ProtectedRoute />,
          children: [
            { path: '/journey', element: <Journey /> },
          ],
        },
      ],
    },
  ])
