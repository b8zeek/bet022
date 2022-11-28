import styled from 'styled-components'

import { PageLayout } from '../wrappers'
import { Input, Paragraph, NavButton } from '../components'

export default function LoginPage() {
  return (
    <PageLayout heading='Welcome Traveler' subheading='We love people like you!'>
      <RedirectContainer>
        <Paragraph textCenter marginRight='20px'>
          Already have an accout?
        </Paragraph>
        <NavButton href='/login'>Login</NavButton>
      </RedirectContainer>

      <Form>
        <Input spellCheck={false} />
      </Form>
    </PageLayout>
  )
}

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const RedirectContainer = styled.div`
  text-align: center;
  margin-bottom: 100px;
`
