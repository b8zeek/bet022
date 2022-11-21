import { useQuery } from 'react-query'
import axios from 'axios'

export function useParticipants() {
  const getParticipants = () => axios.get('http://localhost:3000/participants').then(res => res.data)

  return useQuery(['participants'], getParticipants)
}
