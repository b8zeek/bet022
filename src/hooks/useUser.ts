import { useQuery } from 'react-query'
import { Axios } from '../services'

export function useUser() {
  const getUser = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const getTokenFromLocalStorage = () =>
      localStorage.getItem('auth-token') === null ? JSON.parse(localStorage.getItem('auth-token')!) : ''

    const { data } = await Axios.get('/user', {
      headers: {
        'auth-token': getTokenFromLocalStorage()
      }
    })

    return data?.data || null
  }

  return useQuery(['user'], getUser)
}
