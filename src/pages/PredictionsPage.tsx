import { useEffect } from 'react'
import styled from 'styled-components'
import { useForm, useFieldArray } from 'react-hook-form'

import { PageLayout } from '../wrappers'
import { Paragraph, GameItem, SpecialItem, Button } from '../components'

import { Event, Game, Special } from '../models'

import { useUserInterface } from '../services'
import { useEvents, useUpsertBets } from '../hooks'

export function PredictionsPage() {
  const { control, register, setValue, handleSubmit } = useForm<{
    games: Game[]
    specials: Special[]
  }>()

  const { fields: games } = useFieldArray({
    control,
    name: 'games'
  })

  const { fields: specials } = useFieldArray({
    control,
    name: 'specials'
  })

  const { showSpinner, hideSpinner } = useUserInterface()

  const { data: events, isLoading, isError } = useEvents()
  const { mutateAsync: upsertBets } = useUpsertBets()

  useEffect(() => {
    if (events?.length) {
      const games = events.filter((event: Event): event is Game => event.type === 'Game')
      const specials = events.filter(event => event.type === 'Special') as Special[]

      if (games.length) setValue('games', games)
      if (specials.length) setValue('specials', specials)
    }
  }, [events])

  const onSubmitHandler = async (data: any) => {
    showSpinner()

    const parsedData = {
      bets: [
        ...data.games
          .filter((game: Game) => game.outcome)
          .map((game: Game) => ({
            eventId: game._id,
            outcome: game.outcome
          })),
        ...data.specials
          .filter((special: Special) => special.outcome)
          .map((special: Special) => ({
            eventId: special._id,
            outcome: special.outcome
          }))
      ]
    }

    try {
      await upsertBets(parsedData)
    } catch (error) {
      console.log(error)
    }

    hideSpinner()
  }

  return (
    <PageLayout heading='Upcoming Events' subheading='Take your best shot!'>
      {isError && <Paragraph textCenter>Error while fetching the data.</Paragraph>}
      {isLoading && <Paragraph textCenter>Loading...</Paragraph>}
      {!events?.length && <Paragraph textCenter>No data!</Paragraph>}

      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        {games.map((game, index) => (
          <GameItem key={game._id} game={game} index={index} register={register} />
        ))}
        {specials.map(special => (
          <SpecialItem key={special._id} special={special} />
        ))}
        <Button type='submit'>Submit</Button>
      </Form>
    </PageLayout>
  )
}

const Form = styled.form`
  text-align: center;
`
