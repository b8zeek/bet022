import styled from 'styled-components'

type SubheadingProps = {
  marginBottom?: string
}

export const Subheading = styled.h2<SubheadingProps>`
  line-height: 24px;
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  color: #ffffffb0;

  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`
