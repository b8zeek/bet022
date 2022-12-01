import { PageLayout } from '../wrappers'

import { Paragraph, Games } from '../components'

import { useEvents } from '../hooks'

export function PredictionsPage() {
  const { data: events, isLoading, isError } = useEvents()

  console.log('EVENTS', events)

  return (
    <PageLayout heading='Upcoming Events' subheading='Take your best shot!'>
      {isError && <Paragraph textCenter>Error while fetching the data.</Paragraph>}
      {isLoading && <Paragraph textCenter>Loading...</Paragraph>}
      {!events?.length && <Paragraph textCenter>No data!</Paragraph>}

      {JSON.stringify(events)}
      {/* <Games games={events!.filter(event => event.type === 'game')} isLoading={isLoading} /> */}
    </PageLayout>
  )
}
