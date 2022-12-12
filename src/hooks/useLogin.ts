import { useMutation } from 'react-query'
import { Axios } from '../services'

export function useLogin() {
  const loginUser = async (userData: any) => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const res = await Axios.post('/login', userData)

    return res
  }

  return useMutation(loginUser)
}
