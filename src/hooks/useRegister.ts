import { useMutation } from 'react-query'
import axios from 'axios'
export function useRegister() {
  const registerUser = async (userData: any) => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const res = await axios.post(`${import.meta.env.VITE_URL}/register`, userData)

    return res
  }

  return useMutation(registerUser)
}
