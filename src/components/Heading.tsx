import styled from 'styled-components'

type HeadingProps = {
  marginBottom?: string
}

export const Heading = styled.h1<HeadingProps>`
  width: 100%;
  line-height: 32px;
  font-size: 24px;

  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`
