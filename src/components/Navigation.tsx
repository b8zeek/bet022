import styled from 'styled-components'

import { Logo } from './Logo'

export function Navigation() {
  return (
    <Container>
      <Content>
        <Logo />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  height: 64px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  margin: 0;
`

const Content = styled.div`
  max-width: 500px;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-end;
  padding: 12px 10px;
  margin: 0 auto;
`
