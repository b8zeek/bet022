import styled from 'styled-components'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'

import { LoginPage, StandingsPage, BettingPage } from './pages'
import { Footer } from './components'

import { MAX_WIDTH, FOOTER_HEIGHT } from './constants'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StandingsPage />
  },
  {
    path: '/predictions',
    element: <BettingPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
])

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  max-width: ${MAX_WIDTH};
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 0 10px ${FOOTER_HEIGHT};
  margin: 0 auto;
`

export default App
