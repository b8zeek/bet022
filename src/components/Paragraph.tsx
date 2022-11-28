import styled from 'styled-components'

type ParagraphProps = {
  display?: string
  textCenter?: boolean
  marginRight?: string
}

export const Paragraph = styled.p<ParagraphProps>`
  line-height: 24px;
  font-size: 16px;

  ${({ display }) => display && `display: ${display};`}
  ${({ textCenter }) => textCenter && 'text-align: center;'}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
`
