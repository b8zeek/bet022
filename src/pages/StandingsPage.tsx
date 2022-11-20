import styled from 'styled-components'

import { Heading, Table } from '../components'

function StandingsPage() {
  return (
    <Container>
      <Heading marginBottom='20px'>Current Standings</Heading>
      <Table />
    </Container>
  )
}

const Container = styled.div``

export default StandingsPage
