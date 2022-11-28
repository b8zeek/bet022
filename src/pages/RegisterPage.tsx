import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useRegister } from '../hooks'

import { PageLayout } from '../wrappers'
import { Label, Input, RedirectContainer, Button } from '../components'

const schema = object().shape({
  userName: string().min(3).max(32).required(),
  firstName: string().min(3).max(32).required(),
  lastName: string().min(3).max(32).required(),
  password: string().min(6).max(255).required(),
  passwordConfirmed: string().min(6).max(255).required()
})

export function RegisterPage() {
  const { mutateAsync } = useRegister()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitHandler = async (data: any) => {
    const res = await mutateAsync(data)

    console.log('RES', res)
    reset()
  }

  return (
    <PageLayout heading='Welcome Traveler' subheading='We love people like you!'>
      <RedirectContainer paragraph='Already have an accout?' redirectLabel='Login' redirectPath='/login' />
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Label>Username</Label>
        <Input spellCheck={false} {...register('userName')} marginBottom='20px' />
        <Label>First Name</Label>
        <Input spellCheck={false} {...register('firstName')} marginBottom='20px' />
        <Label>Last Name</Label>
        <Input spellCheck={false} {...register('lastName')} marginBottom='20px' />
        <Label>Password</Label>
        <Input spellCheck={false} {...register('password')} marginBottom='20px' />
        <Label>Passwrod Confirmation</Label>
        <Input spellCheck={false} {...register('passwordConfirmed')} marginBottom='40px' />
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
