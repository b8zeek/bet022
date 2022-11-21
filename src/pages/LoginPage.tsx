import styled from 'styled-components'

import { Heading, Subheading, Input } from '../components'

import { FOOTER_HEIGHT } from '../constants'

export function LoginPage() {
  return (
    <Container>
      <Heading rainbow textCenter>
        Welcome Traveler
      </Heading>
      <Subheading marginBottom='20px'>Thank you for your money poor lost soul</Subheading>
      <Form>
        <Input spellCheck={false} />
      </Form>
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(100vh - ${FOOTER_HEIGHT});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px 0;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
