import styled from 'styled-components'

import { PageLayout } from '../wrappers'

import { Game } from '../models'

type BettingProps = {
  games: Game[]
}

export function BettingPage() {
  return (
    <PageLayout heading='Your Predictions' subheading='Hmmm... Are you sure about that?'>
      <Form>
        <GameContainer>Game 1</GameContainer>
      </Form>
    </PageLayout>
  )
}

const Form = styled.form``

const GameContainer = styled.div``
