import styled from 'styled-components'

import { Heading, Paragraph, Input } from '../components'

export function LoginPage() {
  return (
    <Container>
      <Heading rainbow marginBottom='20px'>
        Welcome to Bet022
      </Heading>
      <Form>
        <Input spellCheck={false} />
      </Form>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
