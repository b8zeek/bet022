import { useQuery } from 'react-query'
import axios from 'axios'

export function useStandings() {
  const getStandings = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 2000))

    const { data } = await axios.get('http://localhost:3000/api/standings')

    return data?.standings || []
  }

  return useQuery(['standings'], getStandings)
}
