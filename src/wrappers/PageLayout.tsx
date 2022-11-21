import { ReactNode } from 'react'
import styled from 'styled-components'

import { Heading, Subheading, Navigation } from '../components'

import { FOOTER_HEIGHT } from '../constants'

type PageLayoutProps = {
  heading: string
  subheading: string
  children: ReactNode | ReactNode[]
}

export function PageLayout({ heading, subheading, children }: PageLayoutProps) {
  return (
    <Container>
      <Navigation />
      <Heading rainbow textCenter>
        {heading}
      </Heading>
      <Subheading marginBottom='40px'>{subheading}</Subheading>
      {children}
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(100vh - ${FOOTER_HEIGHT});
  padding: 84px 10px 10px;
`
