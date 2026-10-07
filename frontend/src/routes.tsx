import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/app/Home/Home'
import { Explore } from './pages/app/Explore'
import { Login } from './pages/auth/login'
import { DefaultLayout } from './pages/_layouts/default'
import { Signup } from './pages/auth/signup'
import { Journey } from './pages/app/Journey'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <Home />,},
            { path: '/explore', element: <Explore />,},
            { path: '/journey', element: <Journey />,},
        ],
    },
    { path: '/sign-in', element: <Login />, },
    { path: '/sign-up', element: <Signup />, },
])
