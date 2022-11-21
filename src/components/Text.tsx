import styled from 'styled-components'

type TextProps = {
  widthPercentage: number
  italic?: boolean
  textAlign?: string
}

export const Text = styled.p<TextProps>`
  ${({ widthPercentage }) => `width: ${widthPercentage}%;`}
  display: inline-block;
  vertical-align: top;
  line-height: 1.5;
  font-size: 14px;
  color: #8b949e;

  ${({ italic }) => italic && 'font-style: italic;'}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`
