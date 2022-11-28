import styled from 'styled-components'

import { PageLayout } from '../wrappers'
import { Input, RedirectContainer } from '../components'

export default function LoginPage() {
  return (
    <PageLayout heading='Welcome Back Traveler' subheading='Thank you for your money poor lost soul'>
      <RedirectContainer paragraph="Don't have an accout?" redirectLabel='Register' redirectPath='/register' />
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
