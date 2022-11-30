import { ReactNode } from 'react'
import styled from 'styled-components'

type LabelProps = {
  children: ReactNode
  textAlign?: string
}

export function Label({ children, textAlign }: LabelProps) {
  return <StyledLabel textAlign={textAlign}>{children}</StyledLabel>
}

const StyledLabel = styled.label<{
  textAlign?: string
}>`
  width: 350px;
  display: block;
  font-size: 12px;
  font-weight: 300;
  color: #ffffffb0;
  text-align: center;
  margin: 0 auto 5px;

  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`
