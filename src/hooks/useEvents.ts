import { useQuery } from 'react-query'
import { Axios } from '../services'

export function useEvents() {
  const getEvents = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const { data } = await Axios.get(`${import.meta.env.VITE_URL}/user/events`)

    return data?.events || []
  }

  return useQuery(['events'], getEvents)
}
