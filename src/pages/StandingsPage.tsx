import styled from 'styled-components'

import { Heading } from '../components'

function StandingsPage() {
  return (
    <Container>
      <Heading marginBottom='20px'>Current Standings</Heading>
      <FilesHeader>Keep Fighting ⚔️</FilesHeader>
      <FilesBody>
        <Item>Mirko</Item>
        <Item>Basic</Item>
        <Item>Petar</Item>
        <Item>Vidovic</Item>
        <Item>Ljubo</Item>
        <Item>Vidovic</Item>
        <Item>Bojan</Item>
        <Item>Babic</Item>
      </FilesBody>
    </Container>
  )
}

const Container = styled.div``

const FilesHeader = styled.div`
  padding: 16px;
  border: 1px solid #30363d;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  background-color: #161b22;
`

const FilesBody = styled.div`
  border: 1px solid #30363d;
  border-top: none;
  border-radius: 0 0 6px 6px;
`

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  border-top: 1px solid #21262d;
`

export default StandingsPage
