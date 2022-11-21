import styled from 'styled-components'

import { Participant } from '../models'

type ItemProps = {
  participant: Participant
}

function Item({ participant }: ItemProps) {
  const { name, score } = participant

  return (
    <Row>
      {name} - {score}
    </Row>
  )
}

const participants = [
  {
    name: 'Goran Panjkov',
    score: 45
  },
  {
    name: 'Petar Vidovic',
    score: 44
  },
  {
    name: 'Mirko Basic',
    score: 32
  },
  {
    name: 'Milos Micic',
    score: 27
  },
  {
    name: 'Zoran Vlaisavljevic',
    score: 24
  },
  {
    name: 'Marko Iskic',
    score: 23
  },
  {
    name: 'Dusan Maukovic',
    score: 12
  },
  {
    name: 'Bojan Babic',
    score: 12
  },
  {
    name: 'Ljubo Vidovic',
    score: 12
  },
  {
    name: 'Kemal El Shairy',
    score: 0
  }
]

export function Table() {
  return (
    <Container>
      <Header>Current Standings</Header>
      <Body>
        {participants.map(participant => (
          <Item key={participant.name} participant={participant} />
        ))}
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
