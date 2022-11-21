import { PageLayout } from '../wrappers'
import { Table, Paragraph } from '../components'

import { useStandings } from '../hooks'

export function StandingsPage() {
  const { data: participants, isLoading, isError } = useStandings()

  return (
    <PageLayout heading='Current Standings' subheading='You have to try much harder buddy!'>
      {isError ? (
        <Paragraph textCenter>Error while fetching the data.</Paragraph>
      ) : (
        <Table isLoading={isLoading} participants={participants} />
      )}
    </PageLayout>
  )
}
