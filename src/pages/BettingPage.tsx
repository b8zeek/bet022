import { PageLayout } from '../wrappers'

import { Paragraph, Games } from '../components'

import { useGames } from '../hooks'

export function BettingPage() {
  const { data: games, isLoading, isError } = useGames()
  return (
    <PageLayout heading='Your Predictions' subheading='Hmmm... Are you sure about that?'>
      {isError ? (
        <Paragraph textCenter>Error while fetching the data.</Paragraph>
      ) : (
        <Games games={games} isLoading={isLoading} />
      )}
    </PageLayout>
  )
}
