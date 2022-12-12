import { useMutation } from 'react-query'
import { Axios } from '../services'

export function useRegister() {
  const registerUser = async (userData: any) => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const res = await Axios.post('/register', userData)

    return res
  }

  return useMutation(registerUser)
}
