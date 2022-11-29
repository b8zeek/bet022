import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { personalAccessTokenAtom, userAtom } from '../store'
import { useSetAtom } from 'jotai'

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
  const setPersonalAccessToken = useSetAtom(personalAccessTokenAtom)
  const setUser = useSetAtom(userAtom)

  const navigate = useNavigate()

  const { mutateAsync } = useRegister()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitHandler = async (data: any) => {
    try {
      const {
        data: { data: resData },
        headers
      } = await mutateAsync(data)

      if (headers['auth-token']) setPersonalAccessToken(headers['auth-token'])

      const { userName, firstName, lastName } = resData

      setUser({
        userName,
        firstName,
        lastName
      })

      if (resData) navigate('/')
    } catch (error) {
      console.log(error)
    }
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
