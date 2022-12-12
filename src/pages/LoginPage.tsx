import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { personalAccessTokenAtom, userAtom } from '../store'
import { useSetAtom } from 'jotai'

import { useLogin } from '../hooks'

import { useUserInterface } from '../services'

import { PageLayout } from '../wrappers'
import { Label, Input, RedirectContainer, Button } from '../components'

const schema = object().shape({
  userName: string().min(3).max(32).required(),
  password: string().min(6).max(255).required()
})

export function LoginPage() {
  const setPersonalAccessToken = useSetAtom(personalAccessTokenAtom)
  const setUser = useSetAtom(userAtom)

  const navigate = useNavigate()

  const { mutateAsync } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { showSpinner, hideSpinner } = useUserInterface()

  const onSubmitHandler = async (data: any) => {
    showSpinner()

    try {
      const {
        data: { data: resData },
        headers
      } = await mutateAsync(data)

      if (headers['auth-token']) setPersonalAccessToken(headers['auth-token'])

      const { userName, firstName, lastName, isAdmin } = resData

      setUser({
        userName,
        firstName,
        lastName,
        isAdmin
      })

      if (resData) navigate('/')
    } catch (error) {
      console.log(error)
    }

    hideSpinner()
  }

  return (
    <PageLayout heading='Welcome Back Traveler' subheading='Thank you for your money poor lost soul'>
      <RedirectContainer paragraph="Don't have an accout?" redirectLabel='Register' redirectPath='/register' />
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Label>Username</Label>
        <Input spellCheck={false} {...register('userName')} marginBottom='20px' />
        <Label>Password</Label>
        <Input spellCheck={false} {...register('password')} marginBottom='40px' />
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
