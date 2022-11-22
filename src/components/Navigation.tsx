import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Logo } from './Logo'

export function Navigation() {
  return (
    <Container>
      <Content>
        <Nav>
          <NavButton to='/'>Home</NavButton>
          <NavButton to='/predictions'>Bet</NavButton>
        </Nav>
        <Logo />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
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

const NavButton = styled(Link)`
  height: 36px;
  line-height: 36px;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  font-weight: 800;
  margin-right: 12px;
  border-radius: 6px;
  padding: 0 12px;
  background-color: #00000099;
  text-decoration: none;
  cursor: pointer;
`
