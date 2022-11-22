import styled, { keyframes } from 'styled-components'

import { Participant } from '../models'

import { Text } from '../components'

type ItemProps = {
  participant: Participant
}

function Item({ participant }: ItemProps) {
  const { favorite, name, score } = participant

  return (
    <Row>
      <Text widthPercentage={10}>{favorite}</Text>
      <Text widthPercentage={70}>{name}</Text>
      <Text widthPercentage={20} textAlign='right'>
        {score}
      </Text>
    </Row>
  )
}

function PreloaderItem() {
  return (
    <Row>
      <PreloaderText widthPercentage={5} marginRight={5} />
      <PreloaderText widthPercentage={30} marginRight={55} />
      <PreloaderText widthPercentage={5} />
    </Row>
  )
}

type TableProps = {
  isLoading: boolean
  participants: Participant[]
}

export function Standings({ isLoading, participants }: TableProps) {
  return (
    <Container>
      <Header>World Cup Qatar 2022</Header>
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
