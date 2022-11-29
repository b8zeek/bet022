import styled from 'styled-components'
import { PageLayout } from '../wrappers'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Label, Input } from '../components'

function GameItem() {
  return (
    <ItemContainer>
      <Label>Teams</Label>
      <Teams>
        <Input marginBottom='5px' />
        <Input />
      </Teams>
    </ItemContainer>
  )
}

export function AddGamesPage() {
  return (
    <PageLayout heading='Add Games' subheading='Hmmm...'>
      <Form>
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
      </Form>
    </PageLayout>
  )
}

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ItemContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const Teams = styled.div`
  width: 100%;
`
