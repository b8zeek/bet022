import styled from 'styled-components'

export function Logo() {
  return <StyledParagraph>☘️ Bet022</StyledParagraph>
}

const StyledParagraph = styled.p`
  line-height: 40px;
  font-size: 24px;
  font-weight: 900;
  background-image: linear-gradient(
    71.18deg,
    rgb(0, 34, 255) -27.32%,
    rgb(0, 34, 255) -16.39%,
    rgb(81, 121, 254) -7.38%,
    rgb(165, 237, 182) 30.59%,
    rgb(250, 232, 90) 46.06%,
    rgb(253, 172, 62) 62.61%,
    rgb(255, 92, 0) 75.82%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
