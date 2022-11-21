import styled from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LoginPage, StandingsPage } from './pages'
import { Navigation, Footer } from './components'

import { MAX_WIDTH, FOOTER_HEIGHT } from './constants'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>HOME!</div>
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/standings',
    element: <StandingsPage />
  }
])

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
      <Footer />
      <Navigation />
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
