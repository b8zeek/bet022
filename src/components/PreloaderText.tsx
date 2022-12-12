import styled, { keyframes } from 'styled-components'

const placeHolderShimmer = keyframes`
  0%{
      background-position: -200px 0
  }
  100%{
      background-position: 0 0
  }
`

type PreloaderTextProps = {
  widthPercentage: number
  marginRight?: number
}

export const PreloaderText = styled.div<PreloaderTextProps>`
  ${({ widthPercentage }) => `width: ${widthPercentage}%;`}
  height: 14px;
  display: inline-block;
  background: linear-gradient(90deg, rgba(100, 100, 100, 0.5), rgba(50, 50, 50, 0.1));
  background-size: 400px 100px;
  border-radius: 4px;
  margin: 4px 0 3px;
  animation: ${placeHolderShimmer} 1s linear alternate infinite;

  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}%;`}
`
