import styled from 'styled-components'
import moment from 'moment'
import { UseFormRegister } from 'react-hook-form'

import { Game, Special } from '../models'

import { Text, PreloaderText, Paragraph, Button } from '../components'

type GameItemProps = {
  game: Game
  index: number
  register: UseFormRegister<{ games: Game[]; specials: Special[] }>
}

export function GameItem({ game, index, register }: GameItemProps) {
  return (
    <GameContainer>
      <EventData>
        <Text widthPercentage={30} italic>
          {moment(game.date).format('DD.MM. HH:mm')}
        </Text>
        <Text widthPercentage={25} textAlign='right' marginRight='5%'>
          {game.homeTeam}
        </Text>
        <Text widthPercentage={40}>{game.awayTeam}</Text>
      </EventData>
      <Select {...register(`games.${index}.outcome`)}>
        <option hidden></option>
        {game.availableTips.map(tip => (
          <option key={tip} value={tip}>
            {tip}
          </option>
        ))}
      </Select>
    </GameContainer>
  )
}

export function SpecialItem({ special }: { special: Special }) {
  return (
    <GameContainer>
      <EventData>
        <Text widthPercentage={30} italic>
          {moment(special.date).format('DD.MM. HH:mm')}
        </Text>
        <Text widthPercentage={70}>{special.description}</Text>
      </EventData>
      <Select>
        <option hidden></option>
        {special.availableTips.map(tip => (
          <option key={tip} value={tip}>
            {tip}
          </option>
        ))}
      </Select>
    </GameContainer>
  )
}

function PreloaderGameItem({ isLoading }: { isLoading: boolean }) {
  return (
    <GameContainer>
      <EventData>
        <PreloaderText widthPercentage={20} marginRight={15} />
        <PreloaderText widthPercentage={20} marginRight={5} />
        <PreloaderText widthPercentage={20} />
      </EventData>
      <Select disabled={isLoading}>
        <option hidden></option>
        <option value='1'>1</option>
        <option value='X'>X</option>
        <option value='2'>2</option>
      </Select>
    </GameContainer>
  )
}

type GamesProps = {
  games: Game[]
  isLoading: boolean
}

// export function Games({ games, isLoading }: GamesProps) {
//   if (isLoading || games.length !== 0)
//     return (
//       <Form>
//         {isLoading
//           ? Array(10)
//               .fill('🍀')
//               .map((_, index) => <PreloaderGameItem key={index} isLoading={isLoading} />)
//           : games.map(game => <GameItem key={game._id} game={game} />)}
//         <Button onClick={event => event.preventDefault()}>Submit</Button>
//       </Form>
//     )
//   return <Paragraph textCenter>No data.</Paragraph>
// }

const Form = styled.form`
  text-align: center;
`

const GameContainer = styled.div`
  height: 33px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`

const EventData = styled.div`
  height: 33px;
  width: 80%;
  display: inline-block;
  vertical-align: top;
  padding: 5px 12px;
  border-radius: 6px 0 0 6px;
  border: 1px solid #30363d;
  border-right: none;
  text-align: left;
`

const Select = styled.select`
  width: 20%;
  height: 33px;
  line-height: 33px;
  border-radius: 0 6px 6px 0;
  border: 1px solid #30363d;
  background-color: #21262d;
  text-align: center;
  outline: none;
`
