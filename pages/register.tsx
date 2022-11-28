import styled from 'styled-components'
import Link from 'next/link'

import { PageLayout } from '../wrappers'
import { Button, Input, Paragraph } from '../components'

export default function LoginPage() {
  return (
    <PageLayout heading='Welcome Traveler' subheading='We love people like you!'>
      <RedirectContainer>
        <Paragraph textCenter>Already have an accout?</Paragraph>
        <Link href='/login'>Login</Link>
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 100px;
`
