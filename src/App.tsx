import styled from 'styled-components'

function App() {
  return (
    <Container>
    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 300vh;
  position: relative;
  background-color: aquamarine;
  margin: 0 auto;
`

const Header = styled.header`
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: aliceblue;
`

export default App
