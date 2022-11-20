import styled from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>HOME!</div>
  },
  {
    path: '/about',
    element: <div>ABOUT PAGE!</div>
  }
])

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 300vh;
  position: relative;
  margin: 0 auto;
`

export default App
