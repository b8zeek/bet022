import styled from 'styled-components'

import { useAtomValue } from 'jotai'
import { userAtom } from '../store'

import { Logo } from './Logo'
import { NavButton } from './NavButton'

export function Navigation() {
  const user = useAtomValue(userAtom)

  return (
    <Container>
      <Content>
        <Nav>
          {user && (
            <>
              <NavButton to='/'>Home</NavButton>
              <NavButton to='/predictions'>Bet</NavButton>
            </>
          )}
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
