import { PageLayout } from '../wrappers'
import { Table, Paragraph } from '../components'

import { useParticipants } from '../hooks'

export function StandingsPage() {
  const { data: participants, isLoading, isError } = useParticipants()

  return (
    <PageLayout heading='Current Standings' subheading='You have to try much harder buddy!'>
      {(() => {
        if (isError) return <Paragraph textCenter>Error while fetching the data.</Paragraph>
        return <Table isLoading={isLoading} participants={participants} />
      })()}
    </PageLayout>
  )
}
