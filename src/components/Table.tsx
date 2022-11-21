import styled, { keyframes } from 'styled-components'

import { Participant } from '../models'

type ItemProps = {
  participant: Participant
}

function Item({ participant }: ItemProps) {
  const { name, score } = participant

  return (
    <Row>
      <Text widthPercentage={50}>{name}</Text>
      <Text widthPercentage={30}>Something</Text>
      <Text widthPercentage={20} textAlign='right'>
        {score}
      </Text>
    </Row>
  )
}

function PreloaderItem() {
  return (
    <Row>
      <PreloaderText widthPercentage={30} marginRight={20} />
      <PreloaderText widthPercentage={20} marginRight={25} />
      <PreloaderText widthPercentage={5} />
    </Row>
  )
}

type TableProps = {
  isLoading: boolean
  participants: Participant[]
}

export function Table({ isLoading, participants }: TableProps) {
  return (
    <Container>
      <Header>Current Standings</Header>
      <Body>
        {isLoading
          ? Array(10)
              .fill('🍀')
              .map((_, index) => <PreloaderItem key={index} />)
          : participants.map(participant => <Item key={participant.name} participant={participant} />)}
      </Body>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  border: 1px solid #21262d;
  border-radius: 6px;
  background-color: #161b22;
`

const Header = styled.div`
  padding: 16px;
`

const Body = styled.div``

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  border-top: 1px solid #21262d;
  background-color: #0c1017;

  &:last-child {
    border-radius: 0 0 6px 6px;
  }
`

type TextProps = {
  widthPercentage: number
  textAlign?: string
}

const Text = styled.p<TextProps>`
  ${({ widthPercentage }) => `width: ${widthPercentage}%;`}
  display: inline-block;
  vertical-align: top;
  line-height: 1.5;
  font-size: 14px;
  color: #c9d1d9;

  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`

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

const PreloaderText = styled.div<PreloaderTextProps>`
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
