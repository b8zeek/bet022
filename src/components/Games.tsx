import styled from 'styled-components'

import { Game } from '../models'

import { Text } from '../components'

function GameItem({ game }: { game: Game }) {
  return (
    <GameContainer>
      <GameData>
        <Text widthPercentage={30}>{game.homeTeam}</Text>
        <Text widthPercentage={30}>{game.awayTeam}</Text>
      </GameData>
    </GameContainer>
  )
}

type GamesProps = {
  games: Game[]
  isLoading: boolean
}

export function Games({ games, isLoading }: GamesProps) {
  return (
    <Form>
      {games.map(game => (
        <GameItem key={game.id} game={game} />
      ))}
    </Form>
  )
}

const Form = styled.form``

const GameContainer = styled.div`
  margin-bottom: 10px;
`

const GameData = styled.div`
  width: 80%;
  padding: 5px 12px;
  border-radius: 6px 0 0 6px;
  border: 1px solid #30363d;
  border-right: none;
`
