import { ReactNode } from 'react'
import styled from 'styled-components'
import { RotatingLines } from 'react-loader-spinner'

import { showSpinnerAtom } from '../store'
import { useAtomValue } from 'jotai'

import { Heading, Subheading, Navigation, Footer } from '../components'

import { MAX_WIDTH, FOOTER_HEIGHT } from '../constants'

type PageLayoutProps = {
  heading: string
  subheading: string
  children: ReactNode | ReactNode[]
}

export function PageLayout({ heading, subheading, children }: PageLayoutProps) {
  const showSpinner = useAtomValue(showSpinnerAtom)

  return (
    <Container>
      {showSpinner && (
        <Backdrop>
          <RotatingLines width='150' strokeColor='#ffffff99' strokeWidth='5' />
        </Backdrop>
      )}
      <Page>
        <Navigation />
        <Heading rainbow textCenter>
          {heading}
        </Heading>
        <Subheading marginBottom='40px'>{subheading}</Subheading>
        {children}
      </Page>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  max-width: ${MAX_WIDTH};
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 0 10px ${FOOTER_HEIGHT};
  margin: 0 auto;
`

const Page = styled.div`
  min-height: calc(100vh - ${FOOTER_HEIGHT});
  padding: 84px 10px 10px;
  margin: 0 auto;
`

const Backdrop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000bb;
`
