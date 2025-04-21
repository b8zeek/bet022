import { useQuery } from 'react-query'
import axios from 'axios'

export function useStandings() {
  const getStandings = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 2000))

    const { data } = await axios.get(`${import.meta.env.VITE_URL}/user/standings`)

    return data?.standings || []
  }

  return useQuery(['standings'], getStandings)
}
