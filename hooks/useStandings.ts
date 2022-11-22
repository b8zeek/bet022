import { useQuery } from 'react-query'
import axios from 'axios'

export function useStandings() {
  const getStandings = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    return axios.get('http://localhost:3000/standings').then(res => res.data)
  }

  return useQuery(['standings'], getStandings)
}
