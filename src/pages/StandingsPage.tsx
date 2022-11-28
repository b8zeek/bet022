import { PageLayout } from '../wrappers'
import { Standings, Paragraph } from '../components'

import { useStandings } from '../hooks'

export function StandingsPage() {
  const { data: participants, isLoading, isError } = useStandings()

  return (
    <PageLayout heading='Current Standings' subheading='You have to try much harder!'>
      {(() => {
        if (isError) return <Paragraph textCenter>Error while fetching the data.</Paragraph>
        if (!isLoading && !participants?.length) return <Paragraph textCenter>No data.</Paragraph>

        return <Standings isLoading={isLoading} participants={participants} />
      })()}
    </PageLayout>
  )
}
