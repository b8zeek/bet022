import styled from 'styled-components'

export function Logo() {
  return <StyledParagraph>Bet022</StyledParagraph>
}

const StyledParagraph = styled.p`
  line-height: 40px;
  font-size: 32px;
  font-weight: 900;
  background-image: linear-gradient(180deg, #ffb6ff, #b344ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
