import styled from 'styled-components'

type ParagraphProps = {
  textCenter?: boolean
}

export const Paragraph = styled.p<ParagraphProps>`
  line-height: 24px;
  font-size: 16px;

  ${({ textCenter }) => textCenter && 'text-align: center;'}
`
