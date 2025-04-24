import styled from 'styled-components'

import { Participant } from '../models'

import { Text, PreloaderText } from '../components'

type ItemProps = {
  participant: Participant
}

function Item({ participant }: ItemProps) {
  const { firstName, lastName, correctBets } = participant

  return (
    <Row>
      <Text widthPercentage={80}>
        {firstName} {lastName}
      </Text>
      <Text widthPercentage={20} textAlign='right'>
        {correctBets}
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
      <Header>NBA 2025</Header>
      <Body>
        {isLoading
          ? Array(10)
              .fill('🍀')
              .map((_, index) => <PreloaderItem key={index} />)
          : participants.map(participant => <Item key={participant._id} participant={participant} />)}
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
