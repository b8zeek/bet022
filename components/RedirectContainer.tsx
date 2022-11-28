import styled from 'styled-components'

import { Paragraph } from './Paragraph'
import { NavButton } from './NavButton'

type RegisterContainerProps = {
  paragraph: string
  redirectLabel: string
  redirectPath: string
}

export function RedirectContainer({ paragraph, redirectLabel, redirectPath }: RegisterContainerProps) {
  return (
    <Container>
      <Paragraph display='inline-block' textCenter marginRight='20px'>
        {paragraph}
      </Paragraph>
      <NavButton href={redirectPath}>{redirectLabel}</NavButton>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 100px;
`
