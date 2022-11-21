import styled from 'styled-components'

import { PageLayout } from '../wrappers'
import { Table } from '../components'

import { useParticipants } from '../hooks'

export function StandingsPage() {
  const { data: participants, isLoading, isError } = useParticipants()

  return (
    <PageLayout heading='Current Standings' subheading='You have to try much harder buddy!'>
      {!isLoading && <Table participants={participants} />}
    </PageLayout>
  )
}

const Container = styled.div``
