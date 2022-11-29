import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { LoginPage, RegisterPage, StandingsPage, PredictionsPage } from './pages'
import { ProtectedRoute } from './wrappers'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <StandingsPage />
      </ProtectedRoute>
    )
  },
  {
    path: '/predictions',
    element: (
      <ProtectedRoute>
        <PredictionsPage />
      </ProtectedRoute>
    )
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
