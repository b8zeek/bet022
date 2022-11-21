import styled from 'styled-components'

import { PageLayout } from '../wrappers'
import { Table } from '../components'

export function StandingsPage() {
  return (
    <PageLayout heading='Current Standings' subheading='You have to try much harder buddy!'>
      <Table />
    </PageLayout>
  )
}

const Container = styled.div``
