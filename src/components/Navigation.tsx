import styled from 'styled-components'

import { Logo } from './Logo'

export function Navigation() {
  return (
    <Container>
      <Content>
        <Nav>
          <NavButton>🏠</NavButton>
          <NavButton>🎰</NavButton>
          <NavButton>🗒️</NavButton>
        </Nav>
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
  justify-content: space-between;
  padding: 12px 10px;
  margin: 0 auto;
`

const Nav = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`

const NavButton = styled.a`
  height: 40px;
  line-height: 28px;
  display: inline-block;
  vertical-align: top;
  font-size: 28px;
  margin-right: 24px;
  border-radius: 6px;
  padding: 6px 8px;
  background-color: #ffffff17;
  cursor: pointer;
`
