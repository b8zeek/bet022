import styled from 'styled-components'
import { PageLayout } from '../wrappers'
import { useForm, useFieldArray } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Label, Input, Button } from '../components'
import { useState } from 'react'

type GameItemProps = {
  register: any
  index: number
}

function GameItem({ register, index }: GameItemProps) {
  return (
    <ItemContainer>
      <Label>Teams</Label>
      <Teams>
        <Input {...register(`games.${index}.homeTeam`)} marginBottom='5px' />
        <Input {...register(`games.${index}.awayTeam`)} />
      </Teams>
      <Label>Time</Label>
      <Teams>
        <Input {...register(`games.${index}.date`)} />
      </Teams>
    </ItemContainer>
  )
}

export function AddGamesPage() {
  const { control, register, handleSubmit } = useForm()
  const { fields, append } = useFieldArray({
    control,
    name: 'games'
  })

  const addNewGame = () =>
    append({
      homeTeam: '',
      awayTeam: '',
      date: ''
    })

  const onSubmitHandler = (data: any) => {
    console.log('DATA', data)
  }

  return (
    <PageLayout heading='Add Games' subheading='Hmmm...'>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        {fields.map((field, index) => (
          <GameItem key={field.id} register={register} index={index} />
        ))}
        <Buttons>
          <Button type='button' onClick={addNewGame}>
            Add New Game
          </Button>
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
