import styled from 'styled-components'

export function Footer() {
  return (
    <Container>
      <Content>123</Content>
    </Container>
  )
}

const Container = styled.footer`
  height: 64px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 0;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  margin: 0;
`

const Content = styled.div`
  max-width: 500px;
  width: 100%;
  height: 40px;
  margin: 0 auto;
`
