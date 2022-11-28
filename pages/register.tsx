import styled from 'styled-components'

import { PageLayout } from '../wrappers'
import { Input, Paragraph, NavButton, RedirectContainer } from '../components'

export default function LoginPage() {
  return (
    <PageLayout heading='Welcome Traveler' subheading='We love people like you!'>
      <RedirectContainer paragraph='Already have an accout?' redirectLabel='Login' redirectPath='/login' />
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
