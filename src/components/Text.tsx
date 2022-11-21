import styled from 'styled-components'

type TextProps = {
  widthPercentage: number
  textAlign?: string
}

export const Text = styled.p<TextProps>`
  ${({ widthPercentage }) => `width: ${widthPercentage}%;`}
  display: inline-block;
  vertical-align: top;
  line-height: 1.5;
  font-size: 14px;
  color: #c9d1d9;

  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`
