import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/app/Home/Home'
import { Login } from './pages/auth/login'
import { DefaultLayout } from './pages/_layouts/default'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <Home />,},
        ],
    },
    { path: '/sign-in', element: <Login />, },
])
