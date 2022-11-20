import styled from 'styled-components'

export function Table() {
  return (
    <Container>
      <Header>Current Standings</Header>
      <Body>
        <Row>Mirko</Row>
        <Row>Basic</Row>
        <Row>Petar</Row>
        <Row>Vidovic</Row>
        <Row>Ljubo</Row>
        <Row>Vidovic</Row>
        <Row>Bojan</Row>
        <Row>Babic</Row>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  border: 1px solid #21262d;
  border-radius: 6px;
  background-color: #161b22;
`

const Header = styled.div`
  padding: 16px;
`

const Body = styled.div``

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  border-top: 1px solid #21262d;
  background-color: #0c1017;

  &:last-child {
    border-radius: 0 0 6px 6px;
  }
`
