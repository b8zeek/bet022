import styled from 'styled-components'

type ParagraphProps = {
  display?: string
  fontStyle?: string
  textCenter?: boolean
  marginRight?: string
}

export const Paragraph = styled.p<ParagraphProps>`
  line-height: 24px;
  font-size: 16px;
  color: #ffffffb0;

  ${({ display }) => display && `display: ${display};`}
  ${({ fontStyle }) => fontStyle && `font-style: ${fontStyle};`}
  ${({ textCenter }) => textCenter && 'text-align: center;'}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
`
