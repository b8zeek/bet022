import styled from 'styled-components'

import { PageLayout } from '../wrappers'
import { Heading, Subheading, Input } from '../components'

import { FOOTER_HEIGHT } from '../constants'

export function LoginPage() {
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
