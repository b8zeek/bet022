import { PageLayout } from '../wrappers'

import { Paragraph, Games } from '../components'

import { useGames } from '../hooks'

export function PredictionsPage() {
  const { data: games, isLoading, isError } = useGames()

  return (
    <PageLayout heading='Your Predictions' subheading='Take your best shot!'>
      {(() => {
        if (isError) return <Paragraph textCenter>Error while fetching the data.</Paragraph>
        if (!isLoading && !games?.length) return <Paragraph textCenter>No data.</Paragraph>

        return <Games games={games} isLoading={isLoading} />
      })()}
    </PageLayout>
  )
}
