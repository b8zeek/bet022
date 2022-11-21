import { useQuery } from 'react-query'
import axios from 'axios'

export function useParticipants() {
  const getParticipants = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 2000))

    return axios.get('http://localhost:3000/participants').then(res => res.data)
  }

  return useQuery(['participants'], getParticipants)
}
