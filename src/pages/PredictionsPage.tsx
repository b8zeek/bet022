import { useEffect } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

import { PageLayout } from '../wrappers'

import { Paragraph, GameItem } from '../components'

import { Event, Game, Special } from '../models'

import { useEvents } from '../hooks'

export function PredictionsPage() {
  const { control, register, setValue, handleSubmit } = useForm<{
    games: Game[]
    specials: Special[]
  }>()

  const { fields: games, append: appendGame } = useFieldArray({
    control,
    name: 'games'
  })

  const { fields: specials, append: appendSpecial } = useFieldArray({
    control,
    name: 'specials'
  })

  const { data: events, isLoading, isError } = useEvents()

  useEffect(() => {
    if (events?.length) {
      const games = events.filter((event: Event): event is Game => event.type === 'Game')
      const specials = events.filter(event => event.type === 'Special') as Special[]

      console.log('GAMES', games)

      if (games.length) setValue('games', games)
      if (specials.length) setValue('specials', specials)
    }
  }, [events])

  return (
    <PageLayout heading='Upcoming Events' subheading='Take your best shot!'>
      {isError && <Paragraph textCenter>Error while fetching the data.</Paragraph>}
      {isLoading && <Paragraph textCenter>Loading...</Paragraph>}
      {!events?.length && <Paragraph textCenter>No data!</Paragraph>}

      {games.map(game => (
        <GameItem key={game._id} game={game} />
      ))}
    </PageLayout>
  )
}
