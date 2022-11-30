import styled from 'styled-components'
import { PageLayout } from '../wrappers'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Label, Input, Button } from '../components'
import { useState } from 'react'

function GameItem() {
  return (
    <ItemContainer>
      <Label>Teams</Label>
      <Teams>
        <Input marginBottom='5px' />
        <Input />
      </Teams>
      <Label>Time</Label>
      <Teams>
        <Input />
      </Teams>
    </ItemContainer>
  )
}

export function AddGamesPage() {
  return (
    <PageLayout heading='Add Games' subheading='Hmmm...'>
      <Form>
        <Buttons>
          <Button type='button'>Add New Game</Button>
          <Button type='button'>Add New Special</Button>
        </Buttons>
        <Button type='submit'>Submit</Button>
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
  text-align: center;
  margin-bottom: 30px;
`

const Teams = styled.div`
  width: 100%;
`

const Buttons = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
