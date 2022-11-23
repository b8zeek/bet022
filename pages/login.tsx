import styled from 'styled-components'

import { PageLayout } from '../wrappers'
import { Input } from '../components'

export default function LoginPage() {
  return (
    <PageLayout heading='Welcome Traveler' subheading='Thank you for your money poor lost soul'>
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
