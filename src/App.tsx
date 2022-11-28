import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { LoginPage, RegisterPage, StandingsPage, PredictionsPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StandingsPage />
  },
  {
    path: '/predictions',
    element: <PredictionsPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
