import { useMutation } from 'react-query'
import axios from 'axios'

export function useRegister() {
  const registerUser = async (userData: any) => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const { data } = await axios.post(`${process.env.URL}/register`, userData)

    return data
  }

  return useMutation(registerUser)
}
