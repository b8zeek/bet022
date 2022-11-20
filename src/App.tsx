import styled from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LoginPage, StandingsPage } from './pages'
import { Navigation } from './components'

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
      <Footer>
        <CopyrightText>Copyright © 2022 🌾 Šid Caffe ☕, Serbia. All Rights Reserved.</CopyrightText>
      </Footer>
      <Navigation />
    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 20px 10px 300px;
  margin: 0 auto;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 10px 80px;
`

const CopyrightText = styled.p`
  font-size: 12px;
`

export default App
