import { PageLayout } from '../wrappers'
import { Standings, Paragraph } from '../components'

import { useStandings } from '../hooks'

export default function StandingsPage() {
  const { data: participants, isLoading, isError } = useStandings()

  return (
    <PageLayout heading='Current Standings' subheading='You have to try much harder!'>
      {isError ? (
        <Paragraph textCenter>Error while fetching the data.</Paragraph>
      ) : (
        <Standings isLoading={isLoading} participants={participants} />
      )}
    </PageLayout>
  )
}
