import { useQuery } from 'react-query'
import { Axios } from '../services'

export function useUser() {
  const getUser = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const { data } = await Axios.get('/user', {
      headers: {
        'auth-token': JSON.parse(localStorage.getItem('auth-token') || '')
      }
    })

    return data?.data || null
  }

  return useQuery(['user'], getUser)
}
