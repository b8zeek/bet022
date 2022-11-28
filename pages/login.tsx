import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { PageLayout } from '../wrappers'
import { Input, RedirectContainer, Button } from '../components'

const schema = object().shape({
  userName: string().min(6).max(255).required(),
  password: string().min(6).max(255).required()
})

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitHandler = (data: any) => {
    console.log('DATA', { data })
    reset()
  }

  return (
    <PageLayout heading='Welcome Back Traveler' subheading='Thank you for your money poor lost soul'>
      <RedirectContainer paragraph="Don't have an accout?" redirectLabel='Register' redirectPath='/register' />
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input spellCheck={false} {...register('userName')} />
        <Input spellCheck={false} {...register('password')} />
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
