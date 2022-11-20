import styled from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LoginPage, StandingsPage } from './pages'
import { Footer } from './components'

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
    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 400vh;
  position: relative;
  padding: 20px 10px;
  margin: 0 auto;
`

export default App
