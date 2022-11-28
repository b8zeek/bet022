import { ReactNode } from 'react'
import styled from 'styled-components'

type LabelProps = {
  children: ReactNode
}

export function Label({ children }: LabelProps) {
  return <StyledLabel>{children}</StyledLabel>
}

const StyledLabel = styled.label`
  min-width: 350px;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`
