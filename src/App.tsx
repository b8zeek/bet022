import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { useAtomValue, useSetAtom } from 'jotai'
import { showSpinnerAtom, userAtom } from './store'

import { useUser } from './hooks'

import { LoginPage, RegisterPage, StandingsPage, PredictionsPage, AddGamesPage } from './pages'
import { ProtectedRoute, RedirectLoggedInUserRoute, AdminProtectedRoute } from './wrappers'
import { Spinner } from './components'

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
    element: (
      <RedirectLoggedInUserRoute>
        <LoginPage />
      </RedirectLoggedInUserRoute>
    )
  },
  {
    path: '/register',
    element: (
      <RedirectLoggedInUserRoute>
        <RegisterPage />
      </RedirectLoggedInUserRoute>
    )
  },
  {
    path: '/add-games',
    element: (
      <AdminProtectedRoute>
        <AddGamesPage />
      </AdminProtectedRoute>
    )
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
])

function App() {
  const showSpinnerValue = useAtomValue(showSpinnerAtom)
  const setUser = useSetAtom(userAtom)

  const { refetch, isFetching } = useUser()

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const { data } = await refetch()

        if (data) setUser(data)
      } catch (error) {
        console.log(error)
      }
    }

    if (localStorage.getItem('auth-token')) {
      fetchLoggedInUser()
    }
  }, [])

  return (
    <Container>
      {(isFetching || showSpinnerValue) && <Spinner />}
      {!isFetching && <RouterProvider router={router} />}
    </Container>
  )
}

const Container = styled.div``

export default App
