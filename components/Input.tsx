import styled from 'styled-components'

export const Input = styled.input<{
  marginBottom?: string
}>`
  min-width: 350px;
  height: 28px;
  padding: 0 10px;
  font-size: 14px;
  text-align: center;
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;

  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}

  &:focus {
    background-color: #161b22;
    outline: none;
  }
`
