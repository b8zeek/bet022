import styled from 'styled-components'

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

type TableProps = {
  participants: Participant[]
}

export function Table({ participants }: TableProps) {
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
