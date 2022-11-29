import { useMutation } from 'react-query'
import axios from 'axios'

export function useLogin() {
  const loginUser = async (userData: any) => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const res = await axios.post(`${import.meta.env.VITE_URL}/login`, userData)

    return res
  }

  return useMutation(loginUser)
}
